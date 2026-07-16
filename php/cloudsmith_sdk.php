<?php
declare(strict_types=1);

// Cloudsmith SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudsmithSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudsmithUtility();
        $this->_utility = $utility;

        $config = CloudsmithConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudsmithHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudsmithHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, CloudsmithFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudsmithUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudsmithHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudsmithHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudsmithHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudsmithSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudsmithHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudsmithHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_abort = null;

    // Canonical facade: $client->Abort()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->abort()
    // resolves here too.
    public function Abort($data = null)
    {
        require_once __DIR__ . '/entity/abort_entity.php';
        if ($data === null) {
            if ($this->_abort === null) {
                $this->_abort = new AbortEntity($this, null);
            }
            return $this->_abort;
        }
        return new AbortEntity($this, $data);
    }


    private $_alpine = null;

    // Canonical facade: $client->Alpine()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alpine()
    // resolves here too.
    public function Alpine($data = null)
    {
        require_once __DIR__ . '/entity/alpine_entity.php';
        if ($data === null) {
            if ($this->_alpine === null) {
                $this->_alpine = new AlpineEntity($this, null);
            }
            return $this->_alpine;
        }
        return new AlpineEntity($this, $data);
    }


    private $_audit_log = null;

    // Canonical facade: $client->AuditLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->audit_log()
    // resolves here too.
    public function AuditLog($data = null)
    {
        require_once __DIR__ . '/entity/audit_log_entity.php';
        if ($data === null) {
            if ($this->_audit_log === null) {
                $this->_audit_log = new AuditLogEntity($this, null);
            }
            return $this->_audit_log;
        }
        return new AuditLogEntity($this, $data);
    }


    private $_basic = null;

    // Canonical facade: $client->Basic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->basic()
    // resolves here too.
    public function Basic($data = null)
    {
        require_once __DIR__ . '/entity/basic_entity.php';
        if ($data === null) {
            if ($this->_basic === null) {
                $this->_basic = new BasicEntity($this, null);
            }
            return $this->_basic;
        }
        return new BasicEntity($this, $data);
    }


    private $_cargo = null;

    // Canonical facade: $client->Cargo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cargo()
    // resolves here too.
    public function Cargo($data = null)
    {
        require_once __DIR__ . '/entity/cargo_entity.php';
        if ($data === null) {
            if ($this->_cargo === null) {
                $this->_cargo = new CargoEntity($this, null);
            }
            return $this->_cargo;
        }
        return new CargoEntity($this, $data);
    }


    private $_cocoapod = null;

    // Canonical facade: $client->Cocoapod()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cocoapod()
    // resolves here too.
    public function Cocoapod($data = null)
    {
        require_once __DIR__ . '/entity/cocoapod_entity.php';
        if ($data === null) {
            if ($this->_cocoapod === null) {
                $this->_cocoapod = new CocoapodEntity($this, null);
            }
            return $this->_cocoapod;
        }
        return new CocoapodEntity($this, $data);
    }


    private $_complete = null;

    // Canonical facade: $client->Complete()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->complete()
    // resolves here too.
    public function Complete($data = null)
    {
        require_once __DIR__ . '/entity/complete_entity.php';
        if ($data === null) {
            if ($this->_complete === null) {
                $this->_complete = new CompleteEntity($this, null);
            }
            return $this->_complete;
        }
        return new CompleteEntity($this, $data);
    }


    private $_composer = null;

    // Canonical facade: $client->Composer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->composer()
    // resolves here too.
    public function Composer($data = null)
    {
        require_once __DIR__ . '/entity/composer_entity.php';
        if ($data === null) {
            if ($this->_composer === null) {
                $this->_composer = new ComposerEntity($this, null);
            }
            return $this->_composer;
        }
        return new ComposerEntity($this, $data);
    }


    private $_conan = null;

    // Canonical facade: $client->Conan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conan()
    // resolves here too.
    public function Conan($data = null)
    {
        require_once __DIR__ . '/entity/conan_entity.php';
        if ($data === null) {
            if ($this->_conan === null) {
                $this->_conan = new ConanEntity($this, null);
            }
            return $this->_conan;
        }
        return new ConanEntity($this, $data);
    }


    private $_conda = null;

    // Canonical facade: $client->Conda()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conda()
    // resolves here too.
    public function Conda($data = null)
    {
        require_once __DIR__ . '/entity/conda_entity.php';
        if ($data === null) {
            if ($this->_conda === null) {
                $this->_conda = new CondaEntity($this, null);
            }
            return $this->_conda;
        }
        return new CondaEntity($this, $data);
    }


    private $_copy = null;

    // Canonical facade: $client->Copy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->copy()
    // resolves here too.
    public function Copy($data = null)
    {
        require_once __DIR__ . '/entity/copy_entity.php';
        if ($data === null) {
            if ($this->_copy === null) {
                $this->_copy = new CopyEntity($this, null);
            }
            return $this->_copy;
        }
        return new CopyEntity($this, $data);
    }


    private $_cran = null;

    // Canonical facade: $client->Cran()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cran()
    // resolves here too.
    public function Cran($data = null)
    {
        require_once __DIR__ . '/entity/cran_entity.php';
        if ($data === null) {
            if ($this->_cran === null) {
                $this->_cran = new CranEntity($this, null);
            }
            return $this->_cran;
        }
        return new CranEntity($this, $data);
    }


    private $_dart = null;

    // Canonical facade: $client->Dart()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dart()
    // resolves here too.
    public function Dart($data = null)
    {
        require_once __DIR__ . '/entity/dart_entity.php';
        if ($data === null) {
            if ($this->_dart === null) {
                $this->_dart = new DartEntity($this, null);
            }
            return $this->_dart;
        }
        return new DartEntity($this, $data);
    }


    private $_deb = null;

    // Canonical facade: $client->Deb()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deb()
    // resolves here too.
    public function Deb($data = null)
    {
        require_once __DIR__ . '/entity/deb_entity.php';
        if ($data === null) {
            if ($this->_deb === null) {
                $this->_deb = new DebEntity($this, null);
            }
            return $this->_deb;
        }
        return new DebEntity($this, $data);
    }


    private $_deny_policy = null;

    // Canonical facade: $client->DenyPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deny_policy()
    // resolves here too.
    public function DenyPolicy($data = null)
    {
        require_once __DIR__ . '/entity/deny_policy_entity.php';
        if ($data === null) {
            if ($this->_deny_policy === null) {
                $this->_deny_policy = new DenyPolicyEntity($this, null);
            }
            return $this->_deny_policy;
        }
        return new DenyPolicyEntity($this, $data);
    }


    private $_dependency = null;

    // Canonical facade: $client->Dependency()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependency()
    // resolves here too.
    public function Dependency($data = null)
    {
        require_once __DIR__ . '/entity/dependency_entity.php';
        if ($data === null) {
            if ($this->_dependency === null) {
                $this->_dependency = new DependencyEntity($this, null);
            }
            return $this->_dependency;
        }
        return new DependencyEntity($this, $data);
    }


    private $_disable = null;

    // Canonical facade: $client->Disable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->disable()
    // resolves here too.
    public function Disable($data = null)
    {
        require_once __DIR__ . '/entity/disable_entity.php';
        if ($data === null) {
            if ($this->_disable === null) {
                $this->_disable = new DisableEntity($this, null);
            }
            return $this->_disable;
        }
        return new DisableEntity($this, $data);
    }


    private $_distribution_full = null;

    // Canonical facade: $client->DistributionFull()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->distribution_full()
    // resolves here too.
    public function DistributionFull($data = null)
    {
        require_once __DIR__ . '/entity/distribution_full_entity.php';
        if ($data === null) {
            if ($this->_distribution_full === null) {
                $this->_distribution_full = new DistributionFullEntity($this, null);
            }
            return $this->_distribution_full;
        }
        return new DistributionFullEntity($this, $data);
    }


    private $_distro = null;

    // Canonical facade: $client->Distro()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->distro()
    // resolves here too.
    public function Distro($data = null)
    {
        require_once __DIR__ . '/entity/distro_entity.php';
        if ($data === null) {
            if ($this->_distro === null) {
                $this->_distro = new DistroEntity($this, null);
            }
            return $this->_distro;
        }
        return new DistroEntity($this, $data);
    }


    private $_docker = null;

    // Canonical facade: $client->Docker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->docker()
    // resolves here too.
    public function Docker($data = null)
    {
        require_once __DIR__ . '/entity/docker_entity.php';
        if ($data === null) {
            if ($this->_docker === null) {
                $this->_docker = new DockerEntity($this, null);
            }
            return $this->_docker;
        }
        return new DockerEntity($this, $data);
    }


    private $_dynamic_mapping = null;

    // Canonical facade: $client->DynamicMapping()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dynamic_mapping()
    // resolves here too.
    public function DynamicMapping($data = null)
    {
        require_once __DIR__ . '/entity/dynamic_mapping_entity.php';
        if ($data === null) {
            if ($this->_dynamic_mapping === null) {
                $this->_dynamic_mapping = new DynamicMappingEntity($this, null);
            }
            return $this->_dynamic_mapping;
        }
        return new DynamicMappingEntity($this, $data);
    }


    private $_ecdsa = null;

    // Canonical facade: $client->Ecdsa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ecdsa()
    // resolves here too.
    public function Ecdsa($data = null)
    {
        require_once __DIR__ . '/entity/ecdsa_entity.php';
        if ($data === null) {
            if ($this->_ecdsa === null) {
                $this->_ecdsa = new EcdsaEntity($this, null);
            }
            return $this->_ecdsa;
        }
        return new EcdsaEntity($this, $data);
    }


    private $_enable = null;

    // Canonical facade: $client->Enable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enable()
    // resolves here too.
    public function Enable($data = null)
    {
        require_once __DIR__ . '/entity/enable_entity.php';
        if ($data === null) {
            if ($this->_enable === null) {
                $this->_enable = new EnableEntity($this, null);
            }
            return $this->_enable;
        }
        return new EnableEntity($this, $data);
    }


    private $_entitlement = null;

    // Canonical facade: $client->Entitlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entitlement()
    // resolves here too.
    public function Entitlement($data = null)
    {
        require_once __DIR__ . '/entity/entitlement_entity.php';
        if ($data === null) {
            if ($this->_entitlement === null) {
                $this->_entitlement = new EntitlementEntity($this, null);
            }
            return $this->_entitlement;
        }
        return new EntitlementEntity($this, $data);
    }


    private $_evaluation = null;

    // Canonical facade: $client->Evaluation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->evaluation()
    // resolves here too.
    public function Evaluation($data = null)
    {
        require_once __DIR__ . '/entity/evaluation_entity.php';
        if ($data === null) {
            if ($this->_evaluation === null) {
                $this->_evaluation = new EvaluationEntity($this, null);
            }
            return $this->_evaluation;
        }
        return new EvaluationEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_format = null;

    // Canonical facade: $client->Format()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->format()
    // resolves here too.
    public function Format($data = null)
    {
        require_once __DIR__ . '/entity/format_entity.php';
        if ($data === null) {
            if ($this->_format === null) {
                $this->_format = new FormatEntity($this, null);
            }
            return $this->_format;
        }
        return new FormatEntity($this, $data);
    }


    private $_geoip = null;

    // Canonical facade: $client->Geoip()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->geoip()
    // resolves here too.
    public function Geoip($data = null)
    {
        require_once __DIR__ . '/entity/geoip_entity.php';
        if ($data === null) {
            if ($this->_geoip === null) {
                $this->_geoip = new GeoipEntity($this, null);
            }
            return $this->_geoip;
        }
        return new GeoipEntity($this, $data);
    }


    private $_gon = null;

    // Canonical facade: $client->Gon()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon()
    // resolves here too.
    public function Gon($data = null)
    {
        require_once __DIR__ . '/entity/gon_entity.php';
        if ($data === null) {
            if ($this->_gon === null) {
                $this->_gon = new GonEntity($this, null);
            }
            return $this->_gon;
        }
        return new GonEntity($this, $data);
    }


    private $_gon2 = null;

    // Canonical facade: $client->Gon2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon2()
    // resolves here too.
    public function Gon2($data = null)
    {
        require_once __DIR__ . '/entity/gon2_entity.php';
        if ($data === null) {
            if ($this->_gon2 === null) {
                $this->_gon2 = new Gon2Entity($this, null);
            }
            return $this->_gon2;
        }
        return new Gon2Entity($this, $data);
    }


    private $_gon3 = null;

    // Canonical facade: $client->Gon3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon3()
    // resolves here too.
    public function Gon3($data = null)
    {
        require_once __DIR__ . '/entity/gon3_entity.php';
        if ($data === null) {
            if ($this->_gon3 === null) {
                $this->_gon3 = new Gon3Entity($this, null);
            }
            return $this->_gon3;
        }
        return new Gon3Entity($this, $data);
    }


    private $_gon4 = null;

    // Canonical facade: $client->Gon4()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon4()
    // resolves here too.
    public function Gon4($data = null)
    {
        require_once __DIR__ . '/entity/gon4_entity.php';
        if ($data === null) {
            if ($this->_gon4 === null) {
                $this->_gon4 = new Gon4Entity($this, null);
            }
            return $this->_gon4;
        }
        return new Gon4Entity($this, $data);
    }


    private $_gon5 = null;

    // Canonical facade: $client->Gon5()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon5()
    // resolves here too.
    public function Gon5($data = null)
    {
        require_once __DIR__ . '/entity/gon5_entity.php';
        if ($data === null) {
            if ($this->_gon5 === null) {
                $this->_gon5 = new Gon5Entity($this, null);
            }
            return $this->_gon5;
        }
        return new Gon5Entity($this, $data);
    }


    private $_gon6 = null;

    // Canonical facade: $client->Gon6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon6()
    // resolves here too.
    public function Gon6($data = null)
    {
        require_once __DIR__ . '/entity/gon6_entity.php';
        if ($data === null) {
            if ($this->_gon6 === null) {
                $this->_gon6 = new Gon6Entity($this, null);
            }
            return $this->_gon6;
        }
        return new Gon6Entity($this, $data);
    }


    private $_gon7 = null;

    // Canonical facade: $client->Gon7()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon7()
    // resolves here too.
    public function Gon7($data = null)
    {
        require_once __DIR__ . '/entity/gon7_entity.php';
        if ($data === null) {
            if ($this->_gon7 === null) {
                $this->_gon7 = new Gon7Entity($this, null);
            }
            return $this->_gon7;
        }
        return new Gon7Entity($this, $data);
    }


    private $_gon8 = null;

    // Canonical facade: $client->Gon8()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon8()
    // resolves here too.
    public function Gon8($data = null)
    {
        require_once __DIR__ . '/entity/gon8_entity.php';
        if ($data === null) {
            if ($this->_gon8 === null) {
                $this->_gon8 = new Gon8Entity($this, null);
            }
            return $this->_gon8;
        }
        return new Gon8Entity($this, $data);
    }


    private $_gon9 = null;

    // Canonical facade: $client->Gon9()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gon9()
    // resolves here too.
    public function Gon9($data = null)
    {
        require_once __DIR__ . '/entity/gon9_entity.php';
        if ($data === null) {
            if ($this->_gon9 === null) {
                $this->_gon9 = new Gon9Entity($this, null);
            }
            return $this->_gon9;
        }
        return new Gon9Entity($this, $data);
    }


    private $_gpg = null;

    // Canonical facade: $client->Gpg()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gpg()
    // resolves here too.
    public function Gpg($data = null)
    {
        require_once __DIR__ . '/entity/gpg_entity.php';
        if ($data === null) {
            if ($this->_gpg === null) {
                $this->_gpg = new GpgEntity($this, null);
            }
            return $this->_gpg;
        }
        return new GpgEntity($this, $data);
    }


    private $_group = null;

    // Canonical facade: $client->Group()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group()
    // resolves here too.
    public function Group($data = null)
    {
        require_once __DIR__ . '/entity/group_entity.php';
        if ($data === null) {
            if ($this->_group === null) {
                $this->_group = new GroupEntity($this, null);
            }
            return $this->_group;
        }
        return new GroupEntity($this, $data);
    }


    private $_helm = null;

    // Canonical facade: $client->Helm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->helm()
    // resolves here too.
    public function Helm($data = null)
    {
        require_once __DIR__ . '/entity/helm_entity.php';
        if ($data === null) {
            if ($this->_helm === null) {
                $this->_helm = new HelmEntity($this, null);
            }
            return $this->_helm;
        }
        return new HelmEntity($this, $data);
    }


    private $_hex = null;

    // Canonical facade: $client->Hex()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hex()
    // resolves here too.
    public function Hex($data = null)
    {
        require_once __DIR__ . '/entity/hex_entity.php';
        if ($data === null) {
            if ($this->_hex === null) {
                $this->_hex = new HexEntity($this, null);
            }
            return $this->_hex;
        }
        return new HexEntity($this, $data);
    }


    private $_history = null;

    // Canonical facade: $client->History()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->history()
    // resolves here too.
    public function History($data = null)
    {
        require_once __DIR__ . '/entity/history_entity.php';
        if ($data === null) {
            if ($this->_history === null) {
                $this->_history = new HistoryEntity($this, null);
            }
            return $this->_history;
        }
        return new HistoryEntity($this, $data);
    }


    private $_huggingface = null;

    // Canonical facade: $client->Huggingface()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->huggingface()
    // resolves here too.
    public function Huggingface($data = null)
    {
        require_once __DIR__ . '/entity/huggingface_entity.php';
        if ($data === null) {
            if ($this->_huggingface === null) {
                $this->_huggingface = new HuggingfaceEntity($this, null);
            }
            return $this->_huggingface;
        }
        return new HuggingfaceEntity($this, $data);
    }


    private $_info = null;

    // Canonical facade: $client->Info()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->info()
    // resolves here too.
    public function Info($data = null)
    {
        require_once __DIR__ . '/entity/info_entity.php';
        if ($data === null) {
            if ($this->_info === null) {
                $this->_info = new InfoEntity($this, null);
            }
            return $this->_info;
        }
        return new InfoEntity($this, $data);
    }


    private $_invite = null;

    // Canonical facade: $client->Invite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invite()
    // resolves here too.
    public function Invite($data = null)
    {
        require_once __DIR__ . '/entity/invite_entity.php';
        if ($data === null) {
            if ($this->_invite === null) {
                $this->_invite = new InviteEntity($this, null);
            }
            return $this->_invite;
        }
        return new InviteEntity($this, $data);
    }


    private $_license_policy = null;

    // Canonical facade: $client->LicensePolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->license_policy()
    // resolves here too.
    public function LicensePolicy($data = null)
    {
        require_once __DIR__ . '/entity/license_policy_entity.php';
        if ($data === null) {
            if ($this->_license_policy === null) {
                $this->_license_policy = new LicensePolicyEntity($this, null);
            }
            return $this->_license_policy;
        }
        return new LicensePolicyEntity($this, $data);
    }


    private $_limit = null;

    // Canonical facade: $client->Limit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->limit()
    // resolves here too.
    public function Limit($data = null)
    {
        require_once __DIR__ . '/entity/limit_entity.php';
        if ($data === null) {
            if ($this->_limit === null) {
                $this->_limit = new LimitEntity($this, null);
            }
            return $this->_limit;
        }
        return new LimitEntity($this, $data);
    }


    private $_luarock = null;

    // Canonical facade: $client->Luarock()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->luarock()
    // resolves here too.
    public function Luarock($data = null)
    {
        require_once __DIR__ . '/entity/luarock_entity.php';
        if ($data === null) {
            if ($this->_luarock === null) {
                $this->_luarock = new LuarockEntity($this, null);
            }
            return $this->_luarock;
        }
        return new LuarockEntity($this, $data);
    }


    private $_maven = null;

    // Canonical facade: $client->Maven()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->maven()
    // resolves here too.
    public function Maven($data = null)
    {
        require_once __DIR__ . '/entity/maven_entity.php';
        if ($data === null) {
            if ($this->_maven === null) {
                $this->_maven = new MavenEntity($this, null);
            }
            return $this->_maven;
        }
        return new MavenEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_move = null;

    // Canonical facade: $client->Move()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->move()
    // resolves here too.
    public function Move($data = null)
    {
        require_once __DIR__ . '/entity/move_entity.php';
        if ($data === null) {
            if ($this->_move === null) {
                $this->_move = new MoveEntity($this, null);
            }
            return $this->_move;
        }
        return new MoveEntity($this, $data);
    }


    private $_namespace = null;

    // Canonical facade: $client->Namespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->namespace()
    // resolves here too.
    public function Namespace($data = null)
    {
        require_once __DIR__ . '/entity/namespace_entity.php';
        if ($data === null) {
            if ($this->_namespace === null) {
                $this->_namespace = new NamespaceEntity($this, null);
            }
            return $this->_namespace;
        }
        return new NamespaceEntity($this, $data);
    }


    private $_namespace_audit_log = null;

    // Canonical facade: $client->NamespaceAuditLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->namespace_audit_log()
    // resolves here too.
    public function NamespaceAuditLog($data = null)
    {
        require_once __DIR__ . '/entity/namespace_audit_log_entity.php';
        if ($data === null) {
            if ($this->_namespace_audit_log === null) {
                $this->_namespace_audit_log = new NamespaceAuditLogEntity($this, null);
            }
            return $this->_namespace_audit_log;
        }
        return new NamespaceAuditLogEntity($this, $data);
    }


    private $_npm = null;

    // Canonical facade: $client->Npm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->npm()
    // resolves here too.
    public function Npm($data = null)
    {
        require_once __DIR__ . '/entity/npm_entity.php';
        if ($data === null) {
            if ($this->_npm === null) {
                $this->_npm = new NpmEntity($this, null);
            }
            return $this->_npm;
        }
        return new NpmEntity($this, $data);
    }


    private $_nuget = null;

    // Canonical facade: $client->Nuget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nuget()
    // resolves here too.
    public function Nuget($data = null)
    {
        require_once __DIR__ . '/entity/nuget_entity.php';
        if ($data === null) {
            if ($this->_nuget === null) {
                $this->_nuget = new NugetEntity($this, null);
            }
            return $this->_nuget;
        }
        return new NugetEntity($this, $data);
    }


    private $_openid_connect = null;

    // Canonical facade: $client->OpenidConnect()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->openid_connect()
    // resolves here too.
    public function OpenidConnect($data = null)
    {
        require_once __DIR__ . '/entity/openid_connect_entity.php';
        if ($data === null) {
            if ($this->_openid_connect === null) {
                $this->_openid_connect = new OpenidConnectEntity($this, null);
            }
            return $this->_openid_connect;
        }
        return new OpenidConnectEntity($this, $data);
    }


    private $_org = null;

    // Canonical facade: $client->Org()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org()
    // resolves here too.
    public function Org($data = null)
    {
        require_once __DIR__ . '/entity/org_entity.php';
        if ($data === null) {
            if ($this->_org === null) {
                $this->_org = new OrgEntity($this, null);
            }
            return $this->_org;
        }
        return new OrgEntity($this, $data);
    }


    private $_organization_group_sync = null;

    // Canonical facade: $client->OrganizationGroupSync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_group_sync()
    // resolves here too.
    public function OrganizationGroupSync($data = null)
    {
        require_once __DIR__ . '/entity/organization_group_sync_entity.php';
        if ($data === null) {
            if ($this->_organization_group_sync === null) {
                $this->_organization_group_sync = new OrganizationGroupSyncEntity($this, null);
            }
            return $this->_organization_group_sync;
        }
        return new OrganizationGroupSyncEntity($this, $data);
    }


    private $_organization_group_sync_status = null;

    // Canonical facade: $client->OrganizationGroupSyncStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_group_sync_status()
    // resolves here too.
    public function OrganizationGroupSyncStatus($data = null)
    {
        require_once __DIR__ . '/entity/organization_group_sync_status_entity.php';
        if ($data === null) {
            if ($this->_organization_group_sync_status === null) {
                $this->_organization_group_sync_status = new OrganizationGroupSyncStatusEntity($this, null);
            }
            return $this->_organization_group_sync_status;
        }
        return new OrganizationGroupSyncStatusEntity($this, $data);
    }


    private $_organization_invite = null;

    // Canonical facade: $client->OrganizationInvite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_invite()
    // resolves here too.
    public function OrganizationInvite($data = null)
    {
        require_once __DIR__ . '/entity/organization_invite_entity.php';
        if ($data === null) {
            if ($this->_organization_invite === null) {
                $this->_organization_invite = new OrganizationInviteEntity($this, null);
            }
            return $this->_organization_invite;
        }
        return new OrganizationInviteEntity($this, $data);
    }


    private $_organization_invite_extend = null;

    // Canonical facade: $client->OrganizationInviteExtend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_invite_extend()
    // resolves here too.
    public function OrganizationInviteExtend($data = null)
    {
        require_once __DIR__ . '/entity/organization_invite_extend_entity.php';
        if ($data === null) {
            if ($this->_organization_invite_extend === null) {
                $this->_organization_invite_extend = new OrganizationInviteExtendEntity($this, null);
            }
            return $this->_organization_invite_extend;
        }
        return new OrganizationInviteExtendEntity($this, $data);
    }


    private $_organization_membership = null;

    // Canonical facade: $client->OrganizationMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_membership()
    // resolves here too.
    public function OrganizationMembership($data = null)
    {
        require_once __DIR__ . '/entity/organization_membership_entity.php';
        if ($data === null) {
            if ($this->_organization_membership === null) {
                $this->_organization_membership = new OrganizationMembershipEntity($this, null);
            }
            return $this->_organization_membership;
        }
        return new OrganizationMembershipEntity($this, $data);
    }


    private $_organization_membership_role_update = null;

    // Canonical facade: $client->OrganizationMembershipRoleUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_membership_role_update()
    // resolves here too.
    public function OrganizationMembershipRoleUpdate($data = null)
    {
        require_once __DIR__ . '/entity/organization_membership_role_update_entity.php';
        if ($data === null) {
            if ($this->_organization_membership_role_update === null) {
                $this->_organization_membership_role_update = new OrganizationMembershipRoleUpdateEntity($this, null);
            }
            return $this->_organization_membership_role_update;
        }
        return new OrganizationMembershipRoleUpdateEntity($this, $data);
    }


    private $_organization_membership_visibility_update = null;

    // Canonical facade: $client->OrganizationMembershipVisibilityUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_membership_visibility_update()
    // resolves here too.
    public function OrganizationMembershipVisibilityUpdate($data = null)
    {
        require_once __DIR__ . '/entity/organization_membership_visibility_update_entity.php';
        if ($data === null) {
            if ($this->_organization_membership_visibility_update === null) {
                $this->_organization_membership_visibility_update = new OrganizationMembershipVisibilityUpdateEntity($this, null);
            }
            return $this->_organization_membership_visibility_update;
        }
        return new OrganizationMembershipVisibilityUpdateEntity($this, $data);
    }


    private $_organization_package_license_policy = null;

    // Canonical facade: $client->OrganizationPackageLicensePolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_package_license_policy()
    // resolves here too.
    public function OrganizationPackageLicensePolicy($data = null)
    {
        require_once __DIR__ . '/entity/organization_package_license_policy_entity.php';
        if ($data === null) {
            if ($this->_organization_package_license_policy === null) {
                $this->_organization_package_license_policy = new OrganizationPackageLicensePolicyEntity($this, null);
            }
            return $this->_organization_package_license_policy;
        }
        return new OrganizationPackageLicensePolicyEntity($this, $data);
    }


    private $_organization_package_vulnerability_policy = null;

    // Canonical facade: $client->OrganizationPackageVulnerabilityPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_package_vulnerability_policy()
    // resolves here too.
    public function OrganizationPackageVulnerabilityPolicy($data = null)
    {
        require_once __DIR__ . '/entity/organization_package_vulnerability_policy_entity.php';
        if ($data === null) {
            if ($this->_organization_package_vulnerability_policy === null) {
                $this->_organization_package_vulnerability_policy = new OrganizationPackageVulnerabilityPolicyEntity($this, null);
            }
            return $this->_organization_package_vulnerability_policy;
        }
        return new OrganizationPackageVulnerabilityPolicyEntity($this, $data);
    }


    private $_organization_saml_auth = null;

    // Canonical facade: $client->OrganizationSamlAuth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_saml_auth()
    // resolves here too.
    public function OrganizationSamlAuth($data = null)
    {
        require_once __DIR__ . '/entity/organization_saml_auth_entity.php';
        if ($data === null) {
            if ($this->_organization_saml_auth === null) {
                $this->_organization_saml_auth = new OrganizationSamlAuthEntity($this, null);
            }
            return $this->_organization_saml_auth;
        }
        return new OrganizationSamlAuthEntity($this, $data);
    }


    private $_organization_team = null;

    // Canonical facade: $client->OrganizationTeam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_team()
    // resolves here too.
    public function OrganizationTeam($data = null)
    {
        require_once __DIR__ . '/entity/organization_team_entity.php';
        if ($data === null) {
            if ($this->_organization_team === null) {
                $this->_organization_team = new OrganizationTeamEntity($this, null);
            }
            return $this->_organization_team;
        }
        return new OrganizationTeamEntity($this, $data);
    }


    private $_organization_team_member = null;

    // Canonical facade: $client->OrganizationTeamMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_team_member()
    // resolves here too.
    public function OrganizationTeamMember($data = null)
    {
        require_once __DIR__ . '/entity/organization_team_member_entity.php';
        if ($data === null) {
            if ($this->_organization_team_member === null) {
                $this->_organization_team_member = new OrganizationTeamMemberEntity($this, null);
            }
            return $this->_organization_team_member;
        }
        return new OrganizationTeamMemberEntity($this, $data);
    }


    private $_oss = null;

    // Canonical facade: $client->Oss()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oss()
    // resolves here too.
    public function Oss($data = null)
    {
        require_once __DIR__ . '/entity/oss_entity.php';
        if ($data === null) {
            if ($this->_oss === null) {
                $this->_oss = new OssEntity($this, null);
            }
            return $this->_oss;
        }
        return new OssEntity($this, $data);
    }


    private $_p2n = null;

    // Canonical facade: $client->P2n()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->p2n()
    // resolves here too.
    public function P2n($data = null)
    {
        require_once __DIR__ . '/entity/p2n_entity.php';
        if ($data === null) {
            if ($this->_p2n === null) {
                $this->_p2n = new P2nEntity($this, null);
            }
            return $this->_p2n;
        }
        return new P2nEntity($this, $data);
    }


    private $_p2n2 = null;

    // Canonical facade: $client->P2n2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->p2n2()
    // resolves here too.
    public function P2n2($data = null)
    {
        require_once __DIR__ . '/entity/p2n2_entity.php';
        if ($data === null) {
            if ($this->_p2n2 === null) {
                $this->_p2n2 = new P2n2Entity($this, null);
            }
            return $this->_p2n2;
        }
        return new P2n2Entity($this, $data);
    }


    private $_package = null;

    // Canonical facade: $client->Package()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package()
    // resolves here too.
    public function Package($data = null)
    {
        require_once __DIR__ . '/entity/package_entity.php';
        if ($data === null) {
            if ($this->_package === null) {
                $this->_package = new PackageEntity($this, null);
            }
            return $this->_package;
        }
        return new PackageEntity($this, $data);
    }


    private $_package_deny_policy = null;

    // Canonical facade: $client->PackageDenyPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_deny_policy()
    // resolves here too.
    public function PackageDenyPolicy($data = null)
    {
        require_once __DIR__ . '/entity/package_deny_policy_entity.php';
        if ($data === null) {
            if ($this->_package_deny_policy === null) {
                $this->_package_deny_policy = new PackageDenyPolicyEntity($this, null);
            }
            return $this->_package_deny_policy;
        }
        return new PackageDenyPolicyEntity($this, $data);
    }


    private $_package_file_parts_upload = null;

    // Canonical facade: $client->PackageFilePartsUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_file_parts_upload()
    // resolves here too.
    public function PackageFilePartsUpload($data = null)
    {
        require_once __DIR__ . '/entity/package_file_parts_upload_entity.php';
        if ($data === null) {
            if ($this->_package_file_parts_upload === null) {
                $this->_package_file_parts_upload = new PackageFilePartsUploadEntity($this, null);
            }
            return $this->_package_file_parts_upload;
        }
        return new PackageFilePartsUploadEntity($this, $data);
    }


    private $_package_file_upload = null;

    // Canonical facade: $client->PackageFileUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_file_upload()
    // resolves here too.
    public function PackageFileUpload($data = null)
    {
        require_once __DIR__ . '/entity/package_file_upload_entity.php';
        if ($data === null) {
            if ($this->_package_file_upload === null) {
                $this->_package_file_upload = new PackageFileUploadEntity($this, null);
            }
            return $this->_package_file_upload;
        }
        return new PackageFileUploadEntity($this, $data);
    }


    private $_package_license_policy_evaluation = null;

    // Canonical facade: $client->PackageLicensePolicyEvaluation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_license_policy_evaluation()
    // resolves here too.
    public function PackageLicensePolicyEvaluation($data = null)
    {
        require_once __DIR__ . '/entity/package_license_policy_evaluation_entity.php';
        if ($data === null) {
            if ($this->_package_license_policy_evaluation === null) {
                $this->_package_license_policy_evaluation = new PackageLicensePolicyEvaluationEntity($this, null);
            }
            return $this->_package_license_policy_evaluation;
        }
        return new PackageLicensePolicyEvaluationEntity($this, $data);
    }


    private $_package_version_badge = null;

    // Canonical facade: $client->PackageVersionBadge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_version_badge()
    // resolves here too.
    public function PackageVersionBadge($data = null)
    {
        require_once __DIR__ . '/entity/package_version_badge_entity.php';
        if ($data === null) {
            if ($this->_package_version_badge === null) {
                $this->_package_version_badge = new PackageVersionBadgeEntity($this, null);
            }
            return $this->_package_version_badge;
        }
        return new PackageVersionBadgeEntity($this, $data);
    }


    private $_package_vulnerability_policy_evaluation = null;

    // Canonical facade: $client->PackageVulnerabilityPolicyEvaluation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_vulnerability_policy_evaluation()
    // resolves here too.
    public function PackageVulnerabilityPolicyEvaluation($data = null)
    {
        require_once __DIR__ . '/entity/package_vulnerability_policy_evaluation_entity.php';
        if ($data === null) {
            if ($this->_package_vulnerability_policy_evaluation === null) {
                $this->_package_vulnerability_policy_evaluation = new PackageVulnerabilityPolicyEvaluationEntity($this, null);
            }
            return $this->_package_vulnerability_policy_evaluation;
        }
        return new PackageVulnerabilityPolicyEvaluationEntity($this, $data);
    }


    private $_privilege = null;

    // Canonical facade: $client->Privilege()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->privilege()
    // resolves here too.
    public function Privilege($data = null)
    {
        require_once __DIR__ . '/entity/privilege_entity.php';
        if ($data === null) {
            if ($this->_privilege === null) {
                $this->_privilege = new PrivilegeEntity($this, null);
            }
            return $this->_privilege;
        }
        return new PrivilegeEntity($this, $data);
    }


    private $_profile = null;

    // Canonical facade: $client->Profile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->profile()
    // resolves here too.
    public function Profile($data = null)
    {
        require_once __DIR__ . '/entity/profile_entity.php';
        if ($data === null) {
            if ($this->_profile === null) {
                $this->_profile = new ProfileEntity($this, null);
            }
            return $this->_profile;
        }
        return new ProfileEntity($this, $data);
    }


    private $_provider_setting = null;

    // Canonical facade: $client->ProviderSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->provider_setting()
    // resolves here too.
    public function ProviderSetting($data = null)
    {
        require_once __DIR__ . '/entity/provider_setting_entity.php';
        if ($data === null) {
            if ($this->_provider_setting === null) {
                $this->_provider_setting = new ProviderSettingEntity($this, null);
            }
            return $this->_provider_setting;
        }
        return new ProviderSettingEntity($this, $data);
    }


    private $_provider_settings_write = null;

    // Canonical facade: $client->ProviderSettingsWrite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->provider_settings_write()
    // resolves here too.
    public function ProviderSettingsWrite($data = null)
    {
        require_once __DIR__ . '/entity/provider_settings_write_entity.php';
        if ($data === null) {
            if ($this->_provider_settings_write === null) {
                $this->_provider_settings_write = new ProviderSettingsWriteEntity($this, null);
            }
            return $this->_provider_settings_write;
        }
        return new ProviderSettingsWriteEntity($this, $data);
    }


    private $_python = null;

    // Canonical facade: $client->Python()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->python()
    // resolves here too.
    public function Python($data = null)
    {
        require_once __DIR__ . '/entity/python_entity.php';
        if ($data === null) {
            if ($this->_python === null) {
                $this->_python = new PythonEntity($this, null);
            }
            return $this->_python;
        }
        return new PythonEntity($this, $data);
    }


    private $_quarantine = null;

    // Canonical facade: $client->Quarantine()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->quarantine()
    // resolves here too.
    public function Quarantine($data = null)
    {
        require_once __DIR__ . '/entity/quarantine_entity.php';
        if ($data === null) {
            if ($this->_quarantine === null) {
                $this->_quarantine = new QuarantineEntity($this, null);
            }
            return $this->_quarantine;
        }
        return new QuarantineEntity($this, $data);
    }


    private $_quota = null;

    // Canonical facade: $client->Quota()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->quota()
    // resolves here too.
    public function Quota($data = null)
    {
        require_once __DIR__ . '/entity/quota_entity.php';
        if ($data === null) {
            if ($this->_quota === null) {
                $this->_quota = new QuotaEntity($this, null);
            }
            return $this->_quota;
        }
        return new QuotaEntity($this, $data);
    }


    private $_raw = null;

    // Canonical facade: $client->Raw()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->raw()
    // resolves here too.
    public function Raw($data = null)
    {
        require_once __DIR__ . '/entity/raw_entity.php';
        if ($data === null) {
            if ($this->_raw === null) {
                $this->_raw = new RawEntity($this, null);
            }
            return $this->_raw;
        }
        return new RawEntity($this, $data);
    }


    private $_refresh = null;

    // Canonical facade: $client->Refresh()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->refresh()
    // resolves here too.
    public function Refresh($data = null)
    {
        require_once __DIR__ . '/entity/refresh_entity.php';
        if ($data === null) {
            if ($this->_refresh === null) {
                $this->_refresh = new RefreshEntity($this, null);
            }
            return $this->_refresh;
        }
        return new RefreshEntity($this, $data);
    }


    private $_regenerate = null;

    // Canonical facade: $client->Regenerate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->regenerate()
    // resolves here too.
    public function Regenerate($data = null)
    {
        require_once __DIR__ . '/entity/regenerate_entity.php';
        if ($data === null) {
            if ($this->_regenerate === null) {
                $this->_regenerate = new RegenerateEntity($this, null);
            }
            return $this->_regenerate;
        }
        return new RegenerateEntity($this, $data);
    }


    private $_repo = null;

    // Canonical facade: $client->Repo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repo()
    // resolves here too.
    public function Repo($data = null)
    {
        require_once __DIR__ . '/entity/repo_entity.php';
        if ($data === null) {
            if ($this->_repo === null) {
                $this->_repo = new RepoEntity($this, null);
            }
            return $this->_repo;
        }
        return new RepoEntity($this, $data);
    }


    private $_repository_audit_log = null;

    // Canonical facade: $client->RepositoryAuditLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_audit_log()
    // resolves here too.
    public function RepositoryAuditLog($data = null)
    {
        require_once __DIR__ . '/entity/repository_audit_log_entity.php';
        if ($data === null) {
            if ($this->_repository_audit_log === null) {
                $this->_repository_audit_log = new RepositoryAuditLogEntity($this, null);
            }
            return $this->_repository_audit_log;
        }
        return new RepositoryAuditLogEntity($this, $data);
    }


    private $_repository_ecdsa_key = null;

    // Canonical facade: $client->RepositoryEcdsaKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_ecdsa_key()
    // resolves here too.
    public function RepositoryEcdsaKey($data = null)
    {
        require_once __DIR__ . '/entity/repository_ecdsa_key_entity.php';
        if ($data === null) {
            if ($this->_repository_ecdsa_key === null) {
                $this->_repository_ecdsa_key = new RepositoryEcdsaKeyEntity($this, null);
            }
            return $this->_repository_ecdsa_key;
        }
        return new RepositoryEcdsaKeyEntity($this, $data);
    }


    private $_repository_geo_ip_rule = null;

    // Canonical facade: $client->RepositoryGeoIpRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_geo_ip_rule()
    // resolves here too.
    public function RepositoryGeoIpRule($data = null)
    {
        require_once __DIR__ . '/entity/repository_geo_ip_rule_entity.php';
        if ($data === null) {
            if ($this->_repository_geo_ip_rule === null) {
                $this->_repository_geo_ip_rule = new RepositoryGeoIpRuleEntity($this, null);
            }
            return $this->_repository_geo_ip_rule;
        }
        return new RepositoryGeoIpRuleEntity($this, $data);
    }


    private $_repository_geo_ip_status = null;

    // Canonical facade: $client->RepositoryGeoIpStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_geo_ip_status()
    // resolves here too.
    public function RepositoryGeoIpStatus($data = null)
    {
        require_once __DIR__ . '/entity/repository_geo_ip_status_entity.php';
        if ($data === null) {
            if ($this->_repository_geo_ip_status === null) {
                $this->_repository_geo_ip_status = new RepositoryGeoIpStatusEntity($this, null);
            }
            return $this->_repository_geo_ip_status;
        }
        return new RepositoryGeoIpStatusEntity($this, $data);
    }


    private $_repository_geo_ip_test_address = null;

    // Canonical facade: $client->RepositoryGeoIpTestAddress()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_geo_ip_test_address()
    // resolves here too.
    public function RepositoryGeoIpTestAddress($data = null)
    {
        require_once __DIR__ . '/entity/repository_geo_ip_test_address_entity.php';
        if ($data === null) {
            if ($this->_repository_geo_ip_test_address === null) {
                $this->_repository_geo_ip_test_address = new RepositoryGeoIpTestAddressEntity($this, null);
            }
            return $this->_repository_geo_ip_test_address;
        }
        return new RepositoryGeoIpTestAddressEntity($this, $data);
    }


    private $_repository_gpg_key = null;

    // Canonical facade: $client->RepositoryGpgKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_gpg_key()
    // resolves here too.
    public function RepositoryGpgKey($data = null)
    {
        require_once __DIR__ . '/entity/repository_gpg_key_entity.php';
        if ($data === null) {
            if ($this->_repository_gpg_key === null) {
                $this->_repository_gpg_key = new RepositoryGpgKeyEntity($this, null);
            }
            return $this->_repository_gpg_key;
        }
        return new RepositoryGpgKeyEntity($this, $data);
    }


    private $_repository_privilege_input = null;

    // Canonical facade: $client->RepositoryPrivilegeInput()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_privilege_input()
    // resolves here too.
    public function RepositoryPrivilegeInput($data = null)
    {
        require_once __DIR__ . '/entity/repository_privilege_input_entity.php';
        if ($data === null) {
            if ($this->_repository_privilege_input === null) {
                $this->_repository_privilege_input = new RepositoryPrivilegeInputEntity($this, null);
            }
            return $this->_repository_privilege_input;
        }
        return new RepositoryPrivilegeInputEntity($this, $data);
    }


    private $_repository_retention_rule = null;

    // Canonical facade: $client->RepositoryRetentionRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_retention_rule()
    // resolves here too.
    public function RepositoryRetentionRule($data = null)
    {
        require_once __DIR__ . '/entity/repository_retention_rule_entity.php';
        if ($data === null) {
            if ($this->_repository_retention_rule === null) {
                $this->_repository_retention_rule = new RepositoryRetentionRuleEntity($this, null);
            }
            return $this->_repository_retention_rule;
        }
        return new RepositoryRetentionRuleEntity($this, $data);
    }


    private $_repository_rsa_key = null;

    // Canonical facade: $client->RepositoryRsaKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_rsa_key()
    // resolves here too.
    public function RepositoryRsaKey($data = null)
    {
        require_once __DIR__ . '/entity/repository_rsa_key_entity.php';
        if ($data === null) {
            if ($this->_repository_rsa_key === null) {
                $this->_repository_rsa_key = new RepositoryRsaKeyEntity($this, null);
            }
            return $this->_repository_rsa_key;
        }
        return new RepositoryRsaKeyEntity($this, $data);
    }


    private $_repository_token = null;

    // Canonical facade: $client->RepositoryToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_token()
    // resolves here too.
    public function RepositoryToken($data = null)
    {
        require_once __DIR__ . '/entity/repository_token_entity.php';
        if ($data === null) {
            if ($this->_repository_token === null) {
                $this->_repository_token = new RepositoryTokenEntity($this, null);
            }
            return $this->_repository_token;
        }
        return new RepositoryTokenEntity($this, $data);
    }


    private $_repository_token_refresh = null;

    // Canonical facade: $client->RepositoryTokenRefresh()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_token_refresh()
    // resolves here too.
    public function RepositoryTokenRefresh($data = null)
    {
        require_once __DIR__ . '/entity/repository_token_refresh_entity.php';
        if ($data === null) {
            if ($this->_repository_token_refresh === null) {
                $this->_repository_token_refresh = new RepositoryTokenRefreshEntity($this, null);
            }
            return $this->_repository_token_refresh;
        }
        return new RepositoryTokenRefreshEntity($this, $data);
    }


    private $_repository_token_sync = null;

    // Canonical facade: $client->RepositoryTokenSync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_token_sync()
    // resolves here too.
    public function RepositoryTokenSync($data = null)
    {
        require_once __DIR__ . '/entity/repository_token_sync_entity.php';
        if ($data === null) {
            if ($this->_repository_token_sync === null) {
                $this->_repository_token_sync = new RepositoryTokenSyncEntity($this, null);
            }
            return $this->_repository_token_sync;
        }
        return new RepositoryTokenSyncEntity($this, $data);
    }


    private $_repository_webhook = null;

    // Canonical facade: $client->RepositoryWebhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_webhook()
    // resolves here too.
    public function RepositoryWebhook($data = null)
    {
        require_once __DIR__ . '/entity/repository_webhook_entity.php';
        if ($data === null) {
            if ($this->_repository_webhook === null) {
                $this->_repository_webhook = new RepositoryWebhookEntity($this, null);
            }
            return $this->_repository_webhook;
        }
        return new RepositoryWebhookEntity($this, $data);
    }


    private $_repository_x509_ecdsa_certificate = null;

    // Canonical facade: $client->RepositoryX509EcdsaCertificate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_x509_ecdsa_certificate()
    // resolves here too.
    public function RepositoryX509EcdsaCertificate($data = null)
    {
        require_once __DIR__ . '/entity/repository_x509_ecdsa_certificate_entity.php';
        if ($data === null) {
            if ($this->_repository_x509_ecdsa_certificate === null) {
                $this->_repository_x509_ecdsa_certificate = new RepositoryX509EcdsaCertificateEntity($this, null);
            }
            return $this->_repository_x509_ecdsa_certificate;
        }
        return new RepositoryX509EcdsaCertificateEntity($this, $data);
    }


    private $_repository_x509_rsa_certificate = null;

    // Canonical facade: $client->RepositoryX509RsaCertificate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_x509_rsa_certificate()
    // resolves here too.
    public function RepositoryX509RsaCertificate($data = null)
    {
        require_once __DIR__ . '/entity/repository_x509_rsa_certificate_entity.php';
        if ($data === null) {
            if ($this->_repository_x509_rsa_certificate === null) {
                $this->_repository_x509_rsa_certificate = new RepositoryX509RsaCertificateEntity($this, null);
            }
            return $this->_repository_x509_rsa_certificate;
        }
        return new RepositoryX509RsaCertificateEntity($this, $data);
    }


    private $_reset = null;

    // Canonical facade: $client->Reset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reset()
    // resolves here too.
    public function Reset($data = null)
    {
        require_once __DIR__ . '/entity/reset_entity.php';
        if ($data === null) {
            if ($this->_reset === null) {
                $this->_reset = new ResetEntity($this, null);
            }
            return $this->_reset;
        }
        return new ResetEntity($this, $data);
    }


    private $_resources_rate_check = null;

    // Canonical facade: $client->ResourcesRateCheck()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resources_rate_check()
    // resolves here too.
    public function ResourcesRateCheck($data = null)
    {
        require_once __DIR__ . '/entity/resources_rate_check_entity.php';
        if ($data === null) {
            if ($this->_resources_rate_check === null) {
                $this->_resources_rate_check = new ResourcesRateCheckEntity($this, null);
            }
            return $this->_resources_rate_check;
        }
        return new ResourcesRateCheckEntity($this, $data);
    }


    private $_resync = null;

    // Canonical facade: $client->Resync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resync()
    // resolves here too.
    public function Resync($data = null)
    {
        require_once __DIR__ . '/entity/resync_entity.php';
        if ($data === null) {
            if ($this->_resync === null) {
                $this->_resync = new ResyncEntity($this, null);
            }
            return $this->_resync;
        }
        return new ResyncEntity($this, $data);
    }


    private $_retention = null;

    // Canonical facade: $client->Retention()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->retention()
    // resolves here too.
    public function Retention($data = null)
    {
        require_once __DIR__ . '/entity/retention_entity.php';
        if ($data === null) {
            if ($this->_retention === null) {
                $this->_retention = new RetentionEntity($this, null);
            }
            return $this->_retention;
        }
        return new RetentionEntity($this, $data);
    }


    private $_rpm = null;

    // Canonical facade: $client->Rpm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rpm()
    // resolves here too.
    public function Rpm($data = null)
    {
        require_once __DIR__ . '/entity/rpm_entity.php';
        if ($data === null) {
            if ($this->_rpm === null) {
                $this->_rpm = new RpmEntity($this, null);
            }
            return $this->_rpm;
        }
        return new RpmEntity($this, $data);
    }


    private $_rsa = null;

    // Canonical facade: $client->Rsa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rsa()
    // resolves here too.
    public function Rsa($data = null)
    {
        require_once __DIR__ . '/entity/rsa_entity.php';
        if ($data === null) {
            if ($this->_rsa === null) {
                $this->_rsa = new RsaEntity($this, null);
            }
            return $this->_rsa;
        }
        return new RsaEntity($this, $data);
    }


    private $_ruby = null;

    // Canonical facade: $client->Ruby()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ruby()
    // resolves here too.
    public function Ruby($data = null)
    {
        require_once __DIR__ . '/entity/ruby_entity.php';
        if ($data === null) {
            if ($this->_ruby === null) {
                $this->_ruby = new RubyEntity($this, null);
            }
            return $this->_ruby;
        }
        return new RubyEntity($this, $data);
    }


    private $_saml_group_sync = null;

    // Canonical facade: $client->SamlGroupSync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->saml_group_sync()
    // resolves here too.
    public function SamlGroupSync($data = null)
    {
        require_once __DIR__ . '/entity/saml_group_sync_entity.php';
        if ($data === null) {
            if ($this->_saml_group_sync === null) {
                $this->_saml_group_sync = new SamlGroupSyncEntity($this, null);
            }
            return $this->_saml_group_sync;
        }
        return new SamlGroupSyncEntity($this, $data);
    }


    private $_scan = null;

    // Canonical facade: $client->Scan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scan()
    // resolves here too.
    public function Scan($data = null)
    {
        require_once __DIR__ . '/entity/scan_entity.php';
        if ($data === null) {
            if ($this->_scan === null) {
                $this->_scan = new ScanEntity($this, null);
            }
            return $this->_scan;
        }
        return new ScanEntity($this, $data);
    }


    private $_self = null;

    // Canonical facade: $client->Self()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->self()
    // resolves here too.
    public function Self($data = null)
    {
        require_once __DIR__ . '/entity/self_entity.php';
        if ($data === null) {
            if ($this->_self === null) {
                $this->_self = new SelfEntity($this, null);
            }
            return $this->_self;
        }
        return new SelfEntity($this, $data);
    }


    private $_service = null;

    // Canonical facade: $client->Service()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->service()
    // resolves here too.
    public function Service($data = null)
    {
        require_once __DIR__ . '/entity/service_entity.php';
        if ($data === null) {
            if ($this->_service === null) {
                $this->_service = new ServiceEntity($this, null);
            }
            return $this->_service;
        }
        return new ServiceEntity($this, $data);
    }


    private $_status = null;

    // Canonical facade: $client->Status()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status()
    // resolves here too.
    public function Status($data = null)
    {
        require_once __DIR__ . '/entity/status_entity.php';
        if ($data === null) {
            if ($this->_status === null) {
                $this->_status = new StatusEntity($this, null);
            }
            return $this->_status;
        }
        return new StatusEntity($this, $data);
    }


    private $_status_basic = null;

    // Canonical facade: $client->StatusBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_basic()
    // resolves here too.
    public function StatusBasic($data = null)
    {
        require_once __DIR__ . '/entity/status_basic_entity.php';
        if ($data === null) {
            if ($this->_status_basic === null) {
                $this->_status_basic = new StatusBasicEntity($this, null);
            }
            return $this->_status_basic;
        }
        return new StatusBasicEntity($this, $data);
    }


    private $_storage_region = null;

    // Canonical facade: $client->StorageRegion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->storage_region()
    // resolves here too.
    public function StorageRegion($data = null)
    {
        require_once __DIR__ . '/entity/storage_region_entity.php';
        if ($data === null) {
            if ($this->_storage_region === null) {
                $this->_storage_region = new StorageRegionEntity($this, null);
            }
            return $this->_storage_region;
        }
        return new StorageRegionEntity($this, $data);
    }


    private $_swift = null;

    // Canonical facade: $client->Swift()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->swift()
    // resolves here too.
    public function Swift($data = null)
    {
        require_once __DIR__ . '/entity/swift_entity.php';
        if ($data === null) {
            if ($this->_swift === null) {
                $this->_swift = new SwiftEntity($this, null);
            }
            return $this->_swift;
        }
        return new SwiftEntity($this, $data);
    }


    private $_sync = null;

    // Canonical facade: $client->Sync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sync()
    // resolves here too.
    public function Sync($data = null)
    {
        require_once __DIR__ . '/entity/sync_entity.php';
        if ($data === null) {
            if ($this->_sync === null) {
                $this->_sync = new SyncEntity($this, null);
            }
            return $this->_sync;
        }
        return new SyncEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_terraform = null;

    // Canonical facade: $client->Terraform()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->terraform()
    // resolves here too.
    public function Terraform($data = null)
    {
        require_once __DIR__ . '/entity/terraform_entity.php';
        if ($data === null) {
            if ($this->_terraform === null) {
                $this->_terraform = new TerraformEntity($this, null);
            }
            return $this->_terraform;
        }
        return new TerraformEntity($this, $data);
    }


    private $_test = null;

    // Canonical facade: $client->Test_()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->test()
    // resolves here too.
    public function Test_($data = null)
    {
        require_once __DIR__ . '/entity/test_entity.php';
        if ($data === null) {
            if ($this->_test === null) {
                $this->_test = new TestEntity($this, null);
            }
            return $this->_test;
        }
        return new TestEntity($this, $data);
    }


    private $_token = null;

    // Canonical facade: $client->Token()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->token()
    // resolves here too.
    public function Token($data = null)
    {
        require_once __DIR__ . '/entity/token_entity.php';
        if ($data === null) {
            if ($this->_token === null) {
                $this->_token = new TokenEntity($this, null);
            }
            return $this->_token;
        }
        return new TokenEntity($this, $data);
    }


    private $_transfer_region = null;

    // Canonical facade: $client->TransferRegion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transfer_region()
    // resolves here too.
    public function TransferRegion($data = null)
    {
        require_once __DIR__ . '/entity/transfer_region_entity.php';
        if ($data === null) {
            if ($this->_transfer_region === null) {
                $this->_transfer_region = new TransferRegionEntity($this, null);
            }
            return $this->_transfer_region;
        }
        return new TransferRegionEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_auth_token = null;

    // Canonical facade: $client->UserAuthToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_auth_token()
    // resolves here too.
    public function UserAuthToken($data = null)
    {
        require_once __DIR__ . '/entity/user_auth_token_entity.php';
        if ($data === null) {
            if ($this->_user_auth_token === null) {
                $this->_user_auth_token = new UserAuthTokenEntity($this, null);
            }
            return $this->_user_auth_token;
        }
        return new UserAuthTokenEntity($this, $data);
    }


    private $_user_authentication_token = null;

    // Canonical facade: $client->UserAuthenticationToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_authentication_token()
    // resolves here too.
    public function UserAuthenticationToken($data = null)
    {
        require_once __DIR__ . '/entity/user_authentication_token_entity.php';
        if ($data === null) {
            if ($this->_user_authentication_token === null) {
                $this->_user_authentication_token = new UserAuthenticationTokenEntity($this, null);
            }
            return $this->_user_authentication_token;
        }
        return new UserAuthenticationTokenEntity($this, $data);
    }


    private $_user_brief = null;

    // Canonical facade: $client->UserBrief()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_brief()
    // resolves here too.
    public function UserBrief($data = null)
    {
        require_once __DIR__ . '/entity/user_brief_entity.php';
        if ($data === null) {
            if ($this->_user_brief === null) {
                $this->_user_brief = new UserBriefEntity($this, null);
            }
            return $this->_user_brief;
        }
        return new UserBriefEntity($this, $data);
    }


    private $_user_profile = null;

    // Canonical facade: $client->UserProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_profile()
    // resolves here too.
    public function UserProfile($data = null)
    {
        require_once __DIR__ . '/entity/user_profile_entity.php';
        if ($data === null) {
            if ($this->_user_profile === null) {
                $this->_user_profile = new UserProfileEntity($this, null);
            }
            return $this->_user_profile;
        }
        return new UserProfileEntity($this, $data);
    }


    private $_vagrant = null;

    // Canonical facade: $client->Vagrant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vagrant()
    // resolves here too.
    public function Vagrant($data = null)
    {
        require_once __DIR__ . '/entity/vagrant_entity.php';
        if ($data === null) {
            if ($this->_vagrant === null) {
                $this->_vagrant = new VagrantEntity($this, null);
            }
            return $this->_vagrant;
        }
        return new VagrantEntity($this, $data);
    }


    private $_validate = null;

    // Canonical facade: $client->Validate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->validate()
    // resolves here too.
    public function Validate($data = null)
    {
        require_once __DIR__ . '/entity/validate_entity.php';
        if ($data === null) {
            if ($this->_validate === null) {
                $this->_validate = new ValidateEntity($this, null);
            }
            return $this->_validate;
        }
        return new ValidateEntity($this, $data);
    }


    private $_version = null;

    // Canonical facade: $client->Version()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->version()
    // resolves here too.
    public function Version($data = null)
    {
        require_once __DIR__ . '/entity/version_entity.php';
        if ($data === null) {
            if ($this->_version === null) {
                $this->_version = new VersionEntity($this, null);
            }
            return $this->_version;
        }
        return new VersionEntity($this, $data);
    }


    private $_vulnerability = null;

    // Canonical facade: $client->Vulnerability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vulnerability()
    // resolves here too.
    public function Vulnerability($data = null)
    {
        require_once __DIR__ . '/entity/vulnerability_entity.php';
        if ($data === null) {
            if ($this->_vulnerability === null) {
                $this->_vulnerability = new VulnerabilityEntity($this, null);
            }
            return $this->_vulnerability;
        }
        return new VulnerabilityEntity($this, $data);
    }


    private $_vulnerability_policy = null;

    // Canonical facade: $client->VulnerabilityPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vulnerability_policy()
    // resolves here too.
    public function VulnerabilityPolicy($data = null)
    {
        require_once __DIR__ . '/entity/vulnerability_policy_entity.php';
        if ($data === null) {
            if ($this->_vulnerability_policy === null) {
                $this->_vulnerability_policy = new VulnerabilityPolicyEntity($this, null);
            }
            return $this->_vulnerability_policy;
        }
        return new VulnerabilityPolicyEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }


    private $_x509_ecdsa = null;

    // Canonical facade: $client->X509Ecdsa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->x509_ecdsa()
    // resolves here too.
    public function X509Ecdsa($data = null)
    {
        require_once __DIR__ . '/entity/x509_ecdsa_entity.php';
        if ($data === null) {
            if ($this->_x509_ecdsa === null) {
                $this->_x509_ecdsa = new X509EcdsaEntity($this, null);
            }
            return $this->_x509_ecdsa;
        }
        return new X509EcdsaEntity($this, $data);
    }


    private $_x509_rsa = null;

    // Canonical facade: $client->X509Rsa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->x509_rsa()
    // resolves here too.
    public function X509Rsa($data = null)
    {
        require_once __DIR__ . '/entity/x509_rsa_entity.php';
        if ($data === null) {
            if ($this->_x509_rsa === null) {
                $this->_x509_rsa = new X509RsaEntity($this, null);
            }
            return $this->_x509_rsa;
        }
        return new X509RsaEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudsmithSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
