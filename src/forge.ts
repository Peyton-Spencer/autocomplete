const completion: Fig.Spec = {
  name: "forge",
  description: "Build, test, fuzz, debug and deploy Solidity contracts",
  subcommands: [
    {
      name: ["test", "t"],
      description: "Run the project's tests",
      options: [
        {
          name: "--debug",
          description: "Run a test in the debugger",
          isRepeatable: true,
          args: {
            name: "debug",
            isOptional: true,
          },
        },
        {
          name: "--etherscan-api-key",
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "etherscan_api_key",
            isOptional: true,
          },
        },
        {
          name: "--fuzz-seed",
          description: "Set seed used to generate randomness during your fuzz runs",
          isRepeatable: true,
          args: {
            name: "fuzz_seed",
            isOptional: true,
          },
        },
        {
          name: "--fuzz-runs",
          isRepeatable: true,
          args: {
            name: "fuzz_runs",
            isOptional: true,
          },
        },
        {
          name: ["--match-test", "--mt"],
          description: "Only run test functions matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-test", "--nmt"],
          description: "Only run test functions that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-contract", "--mc"],
          description: "Only run tests in contracts matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-contract", "--nmc"],
          description: "Only run tests in contracts that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-path", "--mp"],
          description: "Only run tests in source files matching the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "path_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-path", "--nmp"],
          description: "Only run tests in source files that do not match the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "no-match-path",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the given files or directories for changes",
          isRepeatable: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--watch-delay",
          description: "File update debounce delay",
          isRepeatable: true,
          args: {
            name: "watch_delay",
            isOptional: true,
          },
        },
        {
          name: "--gas-report",
          description: "Print a gas report",
        },
        {
          name: "--allow-failure",
          description: "Exit with code 0 even if a test fails",
        },
        {
          name: ["-j", "--json"],
          description: "Output test results in JSON format",
        },
        {
          name: "--fail-fast",
          description: "Stop running tests after the first failure",
        },
        {
          name: ["-l", "--list"],
          description: "List tests instead of running them",
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-restart",
          description: "Do not restart the command while it's still running",
        },
        {
          name: "--run-all",
          description: "Explicitly re-run all tests when a change is made",
        },
        {
          name: "--summary",
          description: "Print test summary table",
        },
        {
          name: "--detailed",
          description: "Print detailed test summary table",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: "script",
      description: "Run a smart contract as a script, building transactions that can be sent onchain",
      options: [
        {
          name: ["--target-contract", "--tc"],
          description: "The name of the contract you want to run",
          isRepeatable: true,
          args: {
            name: "target_contract",
            isOptional: true,
          },
        },
        {
          name: ["-s", "--sig"],
          description: "The signature of the function you want to call in the contract, or raw calldata",
          isRepeatable: true,
          args: {
            name: "sig",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: ["-g", "--gas-estimate-multiplier"],
          description: "Relative percentage to multiply gas estimates by",
          isRepeatable: true,
          args: {
            name: "gas_estimate_multiplier",
            isOptional: true,
          },
        },
        {
          name: "--etherscan-api-key",
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "etherscan_api_key",
            isOptional: true,
          },
        },
        {
          name: "--with-gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "with_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--skip",
          description: "Skip building files whose names contain the given filter",
          isRepeatable: true,
          args: {
            name: "skip",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the given files or directories for changes",
          isRepeatable: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--watch-delay",
          description: "File update debounce delay",
          isRepeatable: true,
          args: {
            name: "watch_delay",
            isOptional: true,
          },
        },
        {
          name: ["-a", "--froms"],
          description: "The sender accounts",
          isRepeatable: true,
          args: {
            name: "froms",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-i", "--interactives"],
          description: "Open an interactive prompt to enter your private key",
          isRepeatable: true,
          args: {
            name: "interactives",
            isOptional: true,
          },
        },
        {
          name: "--private-keys",
          description: "Use the provided private keys",
          isRepeatable: true,
          args: {
            name: "private_keys",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          exclusiveOn: [
            "--private-keys",
          ],
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonics",
          description: "Use the mnemonic phrases of mnemonic files at the specified paths",
          isRepeatable: true,
          args: {
            name: "mnemonics",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrases",
          description: "Use a BIP39 passphrases for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrases",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-paths",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_paths",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-indexes",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-paths",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_indexes",
            isOptional: true,
          },
        },
        {
          name: ["--keystore", "--keystores"],
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_paths",
            isOptional: true,
          },
        },
        {
          name: ["--account", "--accounts"],
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_names",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_passwords",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_files",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--verifier",
          description: "The contract verification provider to use",
          isRepeatable: true,
          args: {
            name: "verifier",
            isOptional: true,
            suggestions: [
              "etherscan",
              "sourcify",
              "blockscout",
            ],
          },
        },
        {
          name: "--verifier-url",
          description: "The verifier URL, if using a custom provider",
          isRepeatable: true,
          args: {
            name: "verifier_url",
            isOptional: true,
          },
        },
        {
          name: "--retries",
          description: "Number of attempts for retrying verification",
          isRepeatable: true,
          args: {
            name: "retries",
            isOptional: true,
          },
        },
        {
          name: "--delay",
          description: "Optional delay to apply inbetween verification attempts, in seconds",
          isRepeatable: true,
          args: {
            name: "delay",
            isOptional: true,
          },
        },
        {
          name: "--legacy",
          description: "Use legacy transactions instead of EIP1559 ones",
        },
        {
          name: "--broadcast",
          description: "Broadcasts the transactions",
        },
        {
          name: "--skip-simulation",
          description: "Skips on-chain simulation",
        },
        {
          name: "--unlocked",
          description: "Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender",
          exclusiveOn: [
            "--private-key",
            "--private-keys",
            "-a",
            "--froms",
            "-l",
            "--ledger",
            "-t",
            "--trezor",
            "--aws",
          ],
        },
        {
          name: "--resume",
          description: "Resumes submitting transactions that failed or timed-out previously",
        },
        {
          name: "--multi",
          description: "If present, --resume or --verify will be assumed to be a multi chain deployment",
        },
        {
          name: "--debug",
          description: "Open the script in the debugger",
        },
        {
          name: "--slow",
          description: "Makes sure a transaction is sent, only after its previous one has been confirmed and succeeded",
        },
        {
          name: "--non-interactive",
          description: "Disables interactive prompts that might appear when deploying big contracts",
        },
        {
          name: "--verify",
          description: "Verifies all the contracts found in the receipts of a script, if any",
        },
        {
          name: "--json",
          description: "Output results in JSON format",
        },
        {
          name: "--names",
          description: "Print compiled contract names",
        },
        {
          name: "--sizes",
          description: "Print compiled contract sizes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-restart",
          description: "Do not restart the command while it's still running",
        },
        {
          name: "--run-all",
          description: "Explicitly re-run all tests when a change is made",
        },
        {
          name: "--format-json",
          description: "Output the compilation errors in the json format. This is useful when you want to use the output in other tools",
          exclusiveOn: [
            "--silent",
          ],
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "path",
          template: "filepaths",
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: "coverage",
      description: "Generate coverage reports",
      options: [
        {
          name: "--report",
          description: "The report type to use for coverage",
          isRepeatable: true,
          args: {
            name: "report",
            isOptional: true,
            suggestions: [
              "summary",
              "lcov",
              "debug",
              "bytecode",
            ],
          },
        },
        {
          name: ["-r", "--report-file"],
          description: "The path to output the report",
          isRepeatable: true,
          args: {
            name: "report_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["--match-test", "--mt"],
          description: "Only run test functions matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-test", "--nmt"],
          description: "Only run test functions that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-contract", "--mc"],
          description: "Only run tests in contracts matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-contract", "--nmc"],
          description: "Only run tests in contracts that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-path", "--mp"],
          description: "Only run tests in source files matching the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "path_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-path", "--nmp"],
          description: "Only run tests in source files that do not match the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "no-match-path",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ir-minimum",
          description: "Enable viaIR with minimum optimization",
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["bind", "bi"],
      description: "Generate Rust bindings for smart contracts",
      options: [
        {
          name: ["-b", "--bindings-path"],
          description: "Path to where the contract artifacts are stored",
          isRepeatable: true,
          args: {
            name: "bindings",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--select",
          description: "Create bindings only for contracts whose names match the specified filter(s)",
          isRepeatable: true,
          args: {
            name: "select",
            isOptional: true,
          },
        },
        {
          name: "--skip",
          description: "Create bindings only for contracts whose names do not match the specified filter(s)",
          exclusiveOn: [
            "--select",
          ],
          isRepeatable: true,
          args: {
            name: "skip",
            isOptional: true,
          },
        },
        {
          name: "--crate-name",
          description: "The name of the Rust crate to generate",
          isRepeatable: true,
          args: {
            name: "crate_name",
            isOptional: true,
          },
        },
        {
          name: "--crate-version",
          description: "The version of the Rust crate to generate",
          isRepeatable: true,
          args: {
            name: "crate_version",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--select-all",
          description: "Explicitly generate bindings for all contracts",
          exclusiveOn: [
            "--select",
            "--skip",
          ],
        },
        {
          name: "--module",
          description: "Generate the bindings as a module instead of a crate",
        },
        {
          name: "--overwrite",
          description: "Overwrite existing generated bindings",
        },
        {
          name: "--single-file",
          description: "Generate bindings as a single file",
        },
        {
          name: "--skip-cargo-toml",
          description: "Skip Cargo.toml consistency checks",
        },
        {
          name: "--skip-build",
          description: "Skips running forge build before generating binding",
        },
        {
          name: "--skip-extra-derives",
          description: "Don't add any additional derives to generated bindings",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["build", "b", "compile"],
      description: "Build the project's smart contracts",
      options: [
        {
          name: "--skip",
          description: "Skip building files whose names contain the given filter",
          isRepeatable: true,
          args: {
            name: "skip",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the given files or directories for changes",
          isRepeatable: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--watch-delay",
          description: "File update debounce delay",
          isRepeatable: true,
          args: {
            name: "watch_delay",
            isOptional: true,
          },
        },
        {
          name: "--names",
          description: "Print compiled contract names",
        },
        {
          name: "--sizes",
          description: "Print compiled contract sizes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-restart",
          description: "Do not restart the command while it's still running",
        },
        {
          name: "--run-all",
          description: "Explicitly re-run all tests when a change is made",
        },
        {
          name: "--format-json",
          description: "Output the compilation errors in the json format. This is useful when you want to use the output in other tools",
          exclusiveOn: [
            "--silent",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["debug", "d"],
      description: "Debugs a single smart contract as a script",
      options: [
        {
          name: ["--target-contract", "--tc"],
          description: "The name of the contract you want to run",
          isRepeatable: true,
          args: {
            name: "target_contract",
            isOptional: true,
          },
        },
        {
          name: ["-s", "--sig"],
          description: "The signature of the function you want to call in the contract, or raw calldata",
          isRepeatable: true,
          args: {
            name: "sig",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--debug",
          description: "Open the script in the debugger",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "path",
          template: "filepaths",
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["update", "u"],
      description: "Update one or multiple dependencies",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Override the up-to-date check",
        },
        {
          name: ["-r", "--recursive"],
          description: "Recursively update submodules",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "dependencies",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["install", "i"],
      description: "Install one or multiple dependencies",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--shallow",
          description: "Perform shallow clones instead of deep ones",
        },
        {
          name: "--no-git",
          description: "Install without adding the dependency as a submodule",
        },
        {
          name: "--no-commit",
          description: "Do not create a commit",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "dependencies",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["remove", "rm"],
      description: "Remove one or multiple dependencies",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Override the up-to-date check",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "dependencies",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["remappings", "re"],
      description: "Get the automatically inferred remappings for the project",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--pretty",
          description: "Pretty-print the remappings, grouping each of them by context",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["verify-contract", "v"],
      description: "Verify smart contracts on Etherscan",
      options: [
        {
          name: ["--constructor-args", "--encoded-constructor-args"],
          description: "The ABI-encoded constructor arguments",
          exclusiveOn: [
            "--constructor-args-path",
          ],
          isRepeatable: true,
          args: {
            name: "constructor_args",
            isOptional: true,
          },
        },
        {
          name: "--constructor-args-path",
          description: "The path to a file containing the constructor arguments",
          isRepeatable: true,
          args: {
            name: "constructor_args_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--compiler-version",
          description: "The `solc` version to use to build the smart contract",
          isRepeatable: true,
          args: {
            name: "compiler_version",
            isOptional: true,
          },
        },
        {
          name: ["--num-of-optimizations", "--optimizer-runs"],
          description: "The number of optimization runs used to build the smart contract",
          isRepeatable: true,
          args: {
            name: "num_of_optimizations",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The EVM version to use",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--retries",
          description: "Number of attempts for retrying verification",
          isRepeatable: true,
          args: {
            name: "retries",
            isOptional: true,
          },
        },
        {
          name: "--delay",
          description: "Optional delay to apply inbetween verification attempts, in seconds",
          isRepeatable: true,
          args: {
            name: "delay",
            isOptional: true,
          },
        },
        {
          name: "--verifier",
          description: "The contract verification provider to use",
          isRepeatable: true,
          args: {
            name: "verifier",
            isOptional: true,
            suggestions: [
              "etherscan",
              "sourcify",
              "blockscout",
            ],
          },
        },
        {
          name: "--verifier-url",
          description: "The verifier URL, if using a custom provider",
          isRepeatable: true,
          args: {
            name: "verifier_url",
            isOptional: true,
          },
        },
        {
          name: "--flatten",
          description: "Flatten the source code before verifying",
        },
        {
          name: ["-f", "--force"],
          description: "Do not compile the flattened smart contract before verifying (if --flatten is passed)",
        },
        {
          name: "--skip-is-verified-check",
          description: "Do not check if the contract is already verified before verifying",
        },
        {
          name: "--watch",
          description: "Wait for verification result after submission",
        },
        {
          name: "--show-standard-json-input",
          description: "Prints the standard json compiler input",
          exclusiveOn: [
            "--flatten",
          ],
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "address",
        },
        {
          name: "contract",
        },
      ]
    },
    {
      name: ["verify-check", "vc"],
      description: "Check verification status on Etherscan",
      options: [
        {
          name: "--retries",
          description: "Number of attempts for retrying verification",
          isRepeatable: true,
          args: {
            name: "retries",
            isOptional: true,
          },
        },
        {
          name: "--delay",
          description: "Optional delay to apply inbetween verification attempts, in seconds",
          isRepeatable: true,
          args: {
            name: "delay",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--verifier",
          description: "The contract verification provider to use",
          isRepeatable: true,
          args: {
            name: "verifier",
            isOptional: true,
            suggestions: [
              "etherscan",
              "sourcify",
              "blockscout",
            ],
          },
        },
        {
          name: "--verifier-url",
          description: "The verifier URL, if using a custom provider",
          isRepeatable: true,
          args: {
            name: "verifier_url",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: ["create", "c"],
      description: "Deploy a smart contract",
      options: [
        {
          name: "--constructor-args",
          description: "The constructor arguments",
          exclusiveOn: [
            "--constructor-args-path",
          ],
          isRepeatable: true,
          args: {
            name: "constructor_args",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--constructor-args-path",
          description: "The path to a file containing the constructor arguments",
          isRepeatable: true,
          args: {
            name: "constructor_args_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--verifier",
          description: "The contract verification provider to use",
          isRepeatable: true,
          args: {
            name: "verifier",
            isOptional: true,
            suggestions: [
              "etherscan",
              "sourcify",
              "blockscout",
            ],
          },
        },
        {
          name: "--verifier-url",
          description: "The verifier URL, if using a custom provider",
          isRepeatable: true,
          args: {
            name: "verifier_url",
            isOptional: true,
          },
        },
        {
          name: "--retries",
          description: "Number of attempts for retrying verification",
          isRepeatable: true,
          args: {
            name: "retries",
            isOptional: true,
          },
        },
        {
          name: "--delay",
          description: "Optional delay to apply inbetween verification attempts, in seconds",
          isRepeatable: true,
          args: {
            name: "delay",
            isOptional: true,
          },
        },
        {
          name: "--json",
          description: "Print the deployment information as JSON",
        },
        {
          name: "--verify",
          description: "Verify contract after creation",
        },
        {
          name: "--unlocked",
          description: "Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender",
        },
        {
          name: "--show-standard-json-input",
          description: "Prints the standard json compiler input if `--verify` is provided",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (https://rpc.flashbots.net/fast). This shares the transaction privately with all registered builders. https://docs.flashbots.net/flashbots-protect/quick-start#faster-transactions",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "contract",
      },
    },
    {
      name: "init",
      description: "Create a new Forge project",
      options: [
        {
          name: ["-t", "--template"],
          description: "The template to start from",
          isRepeatable: true,
          args: {
            name: "template",
            isOptional: true,
          },
        },
        {
          name: ["-b", "--branch"],
          description: "Branch argument that can only be used with template option. If not specified, the default branch is used",
          isRepeatable: true,
          args: {
            name: "branch",
            isOptional: true,
          },
        },
        {
          name: ["--offline", "--no-deps"],
          description: "Do not install dependencies from the network",
          exclusiveOn: [
            "-t",
            "--template",
          ],
        },
        {
          name: "--force",
          description: "Create the project even if the specified root directory is not empty",
          exclusiveOn: [
            "-t",
            "--template",
          ],
        },
        {
          name: "--vscode",
          description: "Create a .vscode/settings.json file with Solidity settings, and generate a remappings.txt file",
          exclusiveOn: [
            "-t",
            "--template",
          ],
        },
        {
          name: "--shallow",
          description: "Perform shallow clones instead of deep ones",
        },
        {
          name: "--no-git",
          description: "Install without adding the dependency as a submodule",
        },
        {
          name: "--no-commit",
          description: "Do not create a commit",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "root",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: ["completions", "com"],
      description: "Generate shell completions script",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "shell",
        suggestions: [
          "bash",
          "elvish",
          "fish",
          "powershell",
          "zsh",
        ],
      },
    },
    {
      name: ["generate-fig-spec", "fig"],
      description: "Generate Fig autocompletion spec",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["clean", "cl"],
      description: "Remove the build artifacts and cache directories",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: "cache",
      description: "Manage the Foundry cache",
      subcommands: [
        {
          name: "clean",
          description: "Cleans cached data from the global foundry directory",
          options: [
            {
              name: ["-b", "--blocks"],
              description: "The blocks to clean the cache for",
              isRepeatable: true,
              args: {
                name: "blocks",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "--etherscan",
              description: "Whether to clean the Etherscan cache",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "chains",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "ls",
          description: "Shows cached data from the global foundry directory",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "chains",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "clean",
              description: "Cleans cached data from the global foundry directory",
            },
            {
              name: "ls",
              description: "Shows cached data from the global foundry directory",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["snapshot", "s"],
      description: "Create a snapshot of each test's gas usage",
      options: [
        {
          name: "--diff",
          description: "Output a diff against a pre-existing snapshot",
          exclusiveOn: [
            "--snap",
          ],
          isRepeatable: true,
          args: {
            name: "diff",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--check",
          description: "Compare against a pre-existing snapshot, exiting with code 1 if they do not match",
          exclusiveOn: [
            "--diff",
          ],
          isRepeatable: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--format",
          description: "How to format the output",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "format",
            isOptional: true,
          },
        },
        {
          name: "--snap",
          description: "Output file for the snapshot",
          isRepeatable: true,
          args: {
            name: "snap",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--tolerance",
          description: "Tolerates gas deviations up to the specified percentage",
          isRepeatable: true,
          args: {
            name: "tolerance",
            isOptional: true,
          },
        },
        {
          name: "--debug",
          description: "Run a test in the debugger",
          isRepeatable: true,
          args: {
            name: "debug",
            isOptional: true,
          },
        },
        {
          name: "--etherscan-api-key",
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "etherscan_api_key",
            isOptional: true,
          },
        },
        {
          name: "--fuzz-seed",
          description: "Set seed used to generate randomness during your fuzz runs",
          isRepeatable: true,
          args: {
            name: "fuzz_seed",
            isOptional: true,
          },
        },
        {
          name: "--fuzz-runs",
          isRepeatable: true,
          args: {
            name: "fuzz_runs",
            isOptional: true,
          },
        },
        {
          name: ["--match-test", "--mt"],
          description: "Only run test functions matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-test", "--nmt"],
          description: "Only run test functions that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "test_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-contract", "--mc"],
          description: "Only run tests in contracts matching the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-contract", "--nmc"],
          description: "Only run tests in contracts that do not match the specified regex pattern",
          isRepeatable: true,
          args: {
            name: "contract_pattern_inverse",
            isOptional: true,
          },
        },
        {
          name: ["--match-path", "--mp"],
          description: "Only run tests in source files matching the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "path_pattern",
            isOptional: true,
          },
        },
        {
          name: ["--no-match-path", "--nmp"],
          description: "Only run tests in source files that do not match the specified glob pattern",
          isRepeatable: true,
          args: {
            name: "no-match-path",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the given files or directories for changes",
          isRepeatable: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--watch-delay",
          description: "File update debounce delay",
          isRepeatable: true,
          args: {
            name: "watch_delay",
            isOptional: true,
          },
        },
        {
          name: "--min",
          description: "Only include tests that used more gas that the given amount",
          isRepeatable: true,
          args: {
            name: "min",
            isOptional: true,
          },
        },
        {
          name: "--max",
          description: "Only include tests that used less gas that the given amount",
          isRepeatable: true,
          args: {
            name: "max",
            isOptional: true,
          },
        },
        {
          name: "--gas-report",
          description: "Print a gas report",
        },
        {
          name: "--allow-failure",
          description: "Exit with code 0 even if a test fails",
        },
        {
          name: ["-j", "--json"],
          description: "Output test results in JSON format",
        },
        {
          name: "--fail-fast",
          description: "Stop running tests after the first failure",
        },
        {
          name: ["-l", "--list"],
          description: "List tests instead of running them",
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-restart",
          description: "Do not restart the command while it's still running",
        },
        {
          name: "--run-all",
          description: "Explicitly re-run all tests when a change is made",
        },
        {
          name: "--summary",
          description: "Print test summary table",
        },
        {
          name: "--detailed",
          description: "Print detailed test summary table",
        },
        {
          name: "--asc",
          description: "Sort results by gas used (ascending)",
        },
        {
          name: "--desc",
          description: "Sort results by gas used (descending)",
          exclusiveOn: [
            "--asc",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["config", "co"],
      description: "Display the current config",
      options: [
        {
          name: "--skip",
          description: "Skip building files whose names contain the given filter",
          isRepeatable: true,
          args: {
            name: "skip",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the given files or directories for changes",
          isRepeatable: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--watch-delay",
          description: "File update debounce delay",
          isRepeatable: true,
          args: {
            name: "watch_delay",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--fork-url", "--rpc-url"],
          description: "Fetch state over a remote endpoint instead of starting from an empty state",
          isRepeatable: true,
          args: {
            name: "fork_url",
            isOptional: true,
          },
        },
        {
          name: "--fork-block-number",
          description: "Fetch state from a specific block number over a remote endpoint",
          isRepeatable: true,
          args: {
            name: "fork_block_number",
            isOptional: true,
          },
        },
        {
          name: "--fork-retries",
          description: "Number of retries",
          isRepeatable: true,
          args: {
            name: "fork_retries",
            isOptional: true,
          },
        },
        {
          name: "--fork-retry-backoff",
          description: "Initial retry backoff on encountering errors",
          isRepeatable: true,
          args: {
            name: "fork_retry_backoff",
            isOptional: true,
          },
        },
        {
          name: "--initial-balance",
          description: "The initial balance of deployed test contracts",
          isRepeatable: true,
          args: {
            name: "initial_balance",
            isOptional: true,
          },
        },
        {
          name: "--sender",
          description: "The address which will be executing tests",
          isRepeatable: true,
          args: {
            name: "sender",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--code-size-limit",
          description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. By default, it is 0x6000 (~25kb)",
          isRepeatable: true,
          args: {
            name: "code_size_limit",
            isOptional: true,
          },
        },
        {
          name: ["--chain", "--chain-id"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "The gas price",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: ["--block-base-fee-per-gas", "--base-fee"],
          description: "The base fee in a block",
          isRepeatable: true,
          args: {
            name: "block_base_fee_per_gas",
            isOptional: true,
          },
        },
        {
          name: "--tx-origin",
          description: "The transaction origin",
          isRepeatable: true,
          args: {
            name: "tx_origin",
            isOptional: true,
          },
        },
        {
          name: "--block-coinbase",
          description: "The coinbase of the block",
          isRepeatable: true,
          args: {
            name: "block_coinbase",
            isOptional: true,
          },
        },
        {
          name: "--block-timestamp",
          description: "The timestamp of the block",
          isRepeatable: true,
          args: {
            name: "block_timestamp",
            isOptional: true,
          },
        },
        {
          name: "--block-number",
          description: "The block number",
          isRepeatable: true,
          args: {
            name: "block_number",
            isOptional: true,
          },
        },
        {
          name: "--block-difficulty",
          description: "The block difficulty",
          isRepeatable: true,
          args: {
            name: "block_difficulty",
            isOptional: true,
          },
        },
        {
          name: "--block-prevrandao",
          description: "The block prevrandao value. NOTE: Before merge this field was mix_hash",
          isRepeatable: true,
          args: {
            name: "block_prevrandao",
            isOptional: true,
          },
        },
        {
          name: "--block-gas-limit",
          description: "The block gas limit",
          isRepeatable: true,
          args: {
            name: "block_gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--memory-limit",
          description: "The memory limit per EVM execution in bytes. If this limit is exceeded, a `MemoryLimitOOG` result is thrown",
          isRepeatable: true,
          args: {
            name: "memory_limit",
            isOptional: true,
          },
        },
        {
          name: "--basic",
          description: "Print only a basic set of the currently set config values",
        },
        {
          name: "--json",
          description: "Print currently set config values as JSON",
        },
        {
          name: "--fix",
          description: "Attempt to fix any configuration warnings",
        },
        {
          name: "--names",
          description: "Print compiled contract names",
        },
        {
          name: "--sizes",
          description: "Print compiled contract sizes",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: "--no-restart",
          description: "Do not restart the command while it's still running",
        },
        {
          name: "--run-all",
          description: "Explicitly re-run all tests when a change is made",
        },
        {
          name: "--format-json",
          description: "Output the compilation errors in the json format. This is useful when you want to use the output in other tools",
          exclusiveOn: [
            "--silent",
          ],
        },
        {
          name: "--no-storage-caching",
          description: "Explicitly disables the use of RPC caching",
        },
        {
          name: "--ffi",
          description: "Enable the FFI cheatcode",
        },
        {
          name: "--always-use-create-2-factory",
          description: "Use the create 2 factory in all cases including tests and non-broadcasting scripts",
        },
        {
          name: ["-v", "--verbosity"],
          description: "Verbosity of the EVM.",
          isRepeatable: true,
        },
        {
          name: ["--no-rpc-rate-limit", "--no-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--isolate",
          description: "Whether to enable isolation of calls. In isolation mode all top-level calls are executed as a separate transaction in a separate EVM context, enabling more precise gas accounting and transaction state changes",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["flatten", "f"],
      description: "Flatten a source file and all of its imports into one file",
      options: [
        {
          name: ["-o", "--output"],
          description: "The path to output the flattened contract",
          isRepeatable: true,
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "target_path",
        template: "filepaths",
      },
    },
    {
      name: "fmt",
      description: "Format Solidity source files",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--check",
          description: "Run in 'check' mode",
        },
        {
          name: ["-r", "--raw"],
          description: "In 'check' and stdin modes, outputs raw formatted code instead of the diff",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["inspect", "in"],
      description: "Get specialized information about a smart contract",
      options: [
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of optimizer runs",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--pretty",
          description: "Pretty print the selected field, if supported",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "contract",
        },
        {
          name: "field",
          suggestions: [
            "abi",
            "bytecode",
            "deployedBytecode",
            "assembly",
            "assemblyOptimized",
            "methodIdentifiers",
            "gasEstimates",
            "storageLayout",
            "devdoc",
            "ir",
            "irOptimized",
            "metadata",
            "userdoc",
            "ewasm",
            "errors",
            "events",
          ],
        },
      ]
    },
    {
      name: ["tree", "tr"],
      description: "Display a tree visualization of the project's dependency graph",
      options: [
        {
          name: "--charset",
          description: "Character set to use in output",
          isRepeatable: true,
          args: {
            name: "charset",
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-dedupe",
          description: "Do not de-duplicate (repeats all shared dependencies)",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: "geiger",
      description: "Detects usage of unsafe cheat codes in a project and its dependencies",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--ignore",
          description: "Globs to ignore",
          isRepeatable: true,
          args: {
            name: "ignore",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--check",
          description: "Run in \"check\" mode",
        },
        {
          name: "--full",
          description: "Print a report of all files, even if no unsafe functions are found",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "doc",
      description: "Generate documentation for the project",
      options: [
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-o", "--out"],
          description: "The doc's output path",
          isRepeatable: true,
          args: {
            name: "out",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--hostname",
          description: "Hostname for serving documentation",
          isRepeatable: true,
          args: {
            name: "hostname",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--port"],
          description: "Port for serving documentation",
          isRepeatable: true,
          args: {
            name: "port",
            isOptional: true,
          },
        },
        {
          name: "--deployments",
          description: "The relative path to the `hardhat-deploy` or `forge-deploy` artifact directory. Leave blank for default",
          isRepeatable: true,
          args: {
            name: "deployments",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-b", "--build"],
          description: "Build the `mdbook` from generated files",
        },
        {
          name: ["-s", "--serve"],
          description: "Serve the documentation",
        },
        {
          name: "--open",
          description: "Open the documentation in a browser after serving",
        },
        {
          name: ["-i", "--include-libraries"],
          description: "Whether to create docs for external libraries",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["selectors", "se"],
      description: "Function selector utilities",
      subcommands: [
        {
          name: ["collision", "co"],
          description: "Check for selector collisions between contracts",
          options: [
            {
              name: "--libraries",
              description: "Set pre-linked libraries",
              isRepeatable: true,
              args: {
                name: "libraries",
                isOptional: true,
              },
            },
            {
              name: "--ignored-error-codes",
              description: "Ignore solc warnings by error code",
              isRepeatable: true,
              args: {
                name: "ignored_error_codes",
                isOptional: true,
              },
            },
            {
              name: "--use",
              description: "Specify the solc version, or a path to a local solc, to build with",
              isRepeatable: true,
              args: {
                name: "use_solc",
                isOptional: true,
              },
            },
            {
              name: ["-o", "--out"],
              description: "The path to the contract artifacts folder",
              isRepeatable: true,
              args: {
                name: "out_path",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--revert-strings",
              description: "Revert string configuration",
              isRepeatable: true,
              args: {
                name: "revert_strings",
                isOptional: true,
              },
            },
            {
              name: "--build-info-path",
              description: "Output path to directory that build info files will be written to",
              isRepeatable: true,
              args: {
                name: "build_info_path",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--evm-version",
              description: "The target EVM version",
              isRepeatable: true,
              args: {
                name: "evm_version",
                isOptional: true,
              },
            },
            {
              name: "--optimizer-runs",
              description: "The number of optimizer runs",
              isRepeatable: true,
              args: {
                name: "optimizer_runs",
                isOptional: true,
              },
            },
            {
              name: "--extra-output",
              description: "Extra output to include in the contract's artifact",
              isRepeatable: true,
              args: {
                name: "extra_output",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "--extra-output-files",
              description: "Extra output to write to separate files",
              isRepeatable: true,
              args: {
                name: "extra_output_files",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "--root",
              description: "The project's root path",
              isRepeatable: true,
              args: {
                name: "root",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-C", "--contracts"],
              description: "The contracts source directory",
              isRepeatable: true,
              args: {
                name: "contracts",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-R", "--remappings"],
              description: "The project's remappings",
              isRepeatable: true,
              args: {
                name: "remappings",
                isOptional: true,
              },
            },
            {
              name: "--remappings-env",
              description: "The project's remappings from the environment",
              isRepeatable: true,
              args: {
                name: "remappings_env",
                isOptional: true,
              },
            },
            {
              name: "--cache-path",
              description: "The path to the compiler cache",
              isRepeatable: true,
              args: {
                name: "cache_path",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--lib-paths",
              description: "The path to the library folder",
              isRepeatable: true,
              args: {
                name: "lib_paths",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--config-path",
              description: "Path to the config file",
              isRepeatable: true,
              args: {
                name: "config_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--force",
              description: "Clear the cache and artifacts folder and recompile",
            },
            {
              name: "--no-cache",
              description: "Disable the cache",
            },
            {
              name: "--deny-warnings",
              description: "Warnings will trigger a compiler error",
            },
            {
              name: "--no-auto-detect",
              description: "Do not auto-detect the `solc` version",
            },
            {
              name: "--offline",
              description: "Do not access the network",
            },
            {
              name: "--via-ir",
              description: "Use the Yul intermediate representation compilation pipeline",
            },
            {
              name: "--silent",
              description: "Don't print anything on startup",
            },
            {
              name: "--build-info",
              description: "Generate build info files",
            },
            {
              name: "--ast",
              description: "Includes the AST as JSON in the compiler output",
            },
            {
              name: "--optimize",
              description: "Activate the Solidity optimizer",
            },
            {
              name: ["--hardhat", "--hh"],
              description: "Use the Hardhat-style project layout",
              exclusiveOn: [
                "-C",
                "--contracts",
              ],
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: [
            {
              name: "first_contract",
            },
            {
              name: "second_contract",
            },
          ]
        },
        {
          name: ["upload", "up"],
          description: "Upload selectors to registry",
          options: [
            {
              name: "--root",
              description: "The project's root path",
              isRepeatable: true,
              args: {
                name: "root",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-C", "--contracts"],
              description: "The contracts source directory",
              isRepeatable: true,
              args: {
                name: "contracts",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-R", "--remappings"],
              description: "The project's remappings",
              isRepeatable: true,
              args: {
                name: "remappings",
                isOptional: true,
              },
            },
            {
              name: "--remappings-env",
              description: "The project's remappings from the environment",
              isRepeatable: true,
              args: {
                name: "remappings_env",
                isOptional: true,
              },
            },
            {
              name: "--cache-path",
              description: "The path to the compiler cache",
              isRepeatable: true,
              args: {
                name: "cache_path",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--lib-paths",
              description: "The path to the library folder",
              isRepeatable: true,
              args: {
                name: "lib_paths",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--config-path",
              description: "Path to the config file",
              isRepeatable: true,
              args: {
                name: "config_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all",
              description: "Upload selectors for all contracts in the project",
            },
            {
              name: ["--hardhat", "--hh"],
              description: "Use the Hardhat-style project layout",
              exclusiveOn: [
                "-C",
                "--contracts",
              ],
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "contract",
            isOptional: true,
          },
        },
        {
          name: ["list", "ls"],
          description: "List selectors from current workspace",
          options: [
            {
              name: "--root",
              description: "The project's root path",
              isRepeatable: true,
              args: {
                name: "root",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-C", "--contracts"],
              description: "The contracts source directory",
              isRepeatable: true,
              args: {
                name: "contracts",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: ["-R", "--remappings"],
              description: "The project's remappings",
              isRepeatable: true,
              args: {
                name: "remappings",
                isOptional: true,
              },
            },
            {
              name: "--remappings-env",
              description: "The project's remappings from the environment",
              isRepeatable: true,
              args: {
                name: "remappings_env",
                isOptional: true,
              },
            },
            {
              name: "--cache-path",
              description: "The path to the compiler cache",
              isRepeatable: true,
              args: {
                name: "cache_path",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--lib-paths",
              description: "The path to the library folder",
              isRepeatable: true,
              args: {
                name: "lib_paths",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--config-path",
              description: "Path to the config file",
              isRepeatable: true,
              args: {
                name: "config_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["--hardhat", "--hh"],
              description: "Use the Hardhat-style project layout",
              exclusiveOn: [
                "-C",
                "--contracts",
              ],
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "contract",
            isOptional: true,
          },
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "collision",
              description: "Check for selector collisions between contracts",
            },
            {
              name: "upload",
              description: "Upload selectors to registry",
            },
            {
              name: "list",
              description: "List selectors from current workspace",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "generate",
      description: "Generate scaffold files",
      subcommands: [
        {
          name: "test",
          description: "Scaffolds test file for given contract",
          options: [
            {
              name: ["-c", "--contract-name"],
              description: "Contract name for test generation",
              isRepeatable: true,
              args: {
                name: "contract_name",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "test",
              description: "Scaffolds test file for given contract",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "test",
          description: "Run the project's tests",
        },
        {
          name: "script",
          description: "Run a smart contract as a script, building transactions that can be sent onchain",
        },
        {
          name: "coverage",
          description: "Generate coverage reports",
        },
        {
          name: "bind",
          description: "Generate Rust bindings for smart contracts",
        },
        {
          name: "build",
          description: "Build the project's smart contracts",
        },
        {
          name: "debug",
          description: "Debugs a single smart contract as a script",
        },
        {
          name: "update",
          description: "Update one or multiple dependencies",
        },
        {
          name: "install",
          description: "Install one or multiple dependencies",
        },
        {
          name: "remove",
          description: "Remove one or multiple dependencies",
        },
        {
          name: "remappings",
          description: "Get the automatically inferred remappings for the project",
        },
        {
          name: "verify-contract",
          description: "Verify smart contracts on Etherscan",
        },
        {
          name: "verify-check",
          description: "Check verification status on Etherscan",
        },
        {
          name: "create",
          description: "Deploy a smart contract",
        },
        {
          name: "init",
          description: "Create a new Forge project",
        },
        {
          name: "completions",
          description: "Generate shell completions script",
        },
        {
          name: "generate-fig-spec",
          description: "Generate Fig autocompletion spec",
        },
        {
          name: "clean",
          description: "Remove the build artifacts and cache directories",
        },
        {
          name: "cache",
          description: "Manage the Foundry cache",
          subcommands: [
            {
              name: "clean",
              description: "Cleans cached data from the global foundry directory",
            },
            {
              name: "ls",
              description: "Shows cached data from the global foundry directory",
            },
          ],
        },
        {
          name: "snapshot",
          description: "Create a snapshot of each test's gas usage",
        },
        {
          name: "config",
          description: "Display the current config",
        },
        {
          name: "flatten",
          description: "Flatten a source file and all of its imports into one file",
        },
        {
          name: "fmt",
          description: "Format Solidity source files",
        },
        {
          name: "inspect",
          description: "Get specialized information about a smart contract",
        },
        {
          name: "tree",
          description: "Display a tree visualization of the project's dependency graph",
        },
        {
          name: "geiger",
          description: "Detects usage of unsafe cheat codes in a project and its dependencies",
        },
        {
          name: "doc",
          description: "Generate documentation for the project",
        },
        {
          name: "selectors",
          description: "Function selector utilities",
          subcommands: [
            {
              name: "collision",
              description: "Check for selector collisions between contracts",
            },
            {
              name: "upload",
              description: "Upload selectors to registry",
            },
            {
              name: "list",
              description: "List selectors from current workspace",
            },
          ],
        },
        {
          name: "generate",
          description: "Generate scaffold files",
          subcommands: [
            {
              name: "test",
              description: "Scaffolds test file for given contract",
            },
          ],
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
