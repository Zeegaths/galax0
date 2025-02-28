export const CREDITSCOREMAINABI = [
  {
    type: "impl",
    name: "CreditScoreMain",
    interface_name: "galax0_contracts::main::ICreditScoreMain",
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      { name: "low", type: "core::integer::u128" },
      { name: "high", type: "core::integer::u128" },
    ],
  },
  {
    type: "struct",
    name: "galax0_contracts::data_structures::WalletData",
    members: [
      { name: "balance", type: "core::integer::u256" },
      { name: "transaction_count", type: "core::integer::u256" },
      { name: "first_transaction_time", type: "core::integer::u64" },
      { name: "last_transaction_time", type: "core::integer::u64" },
    ],
  },
  {
    type: "struct",
    name: "galax0_contracts::data_structures::DefiData",
    members: [
      { name: "total_value_locked", type: "core::integer::u256" },
      { name: "protocol_interactions", type: "core::integer::u256" },
      { name: "unique_protocols", type: "core::integer::u256" },
      { name: "first_interaction", type: "core::integer::u64" },
      { name: "last_interaction", type: "core::integer::u64" },
    ],
  },
  {
    type: "struct",
    name: "galax0_contracts::data_structures::ExchangeData",
    members: [
      { name: "trading_volume", type: "core::integer::u256" },
      { name: "successful_trades", type: "core::integer::u256" },
      { name: "failed_trades", type: "core::integer::u256" },
      { name: "liquidations", type: "core::integer::u256" },
      { name: "first_trade", type: "core::integer::u64" },
      { name: "last_trade", type: "core::integer::u64" },
    ],
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      { name: "False", type: "()" },
      { name: "True", type: "()" },
    ],
  },
  {
    type: "struct",
    name: "galax0_contracts::data_structures::CreditScore",
    members: [
      { name: "score", type: "core::integer::u256" },
      { name: "last_update", type: "core::integer::u64" },
      { name: "confidence_level", type: "core::integer::u8" },
      { name: "data_completeness", type: "core::integer::u8" },
    ],
  },
  {
    type: "struct",
    name: "galax0_contracts::data_structures::ScoreFactors",
    members: [
      { name: "wallet_weight", type: "core::integer::u8" },
      { name: "defi_weight", type: "core::integer::u8" },
      { name: "exchange_weight", type: "core::integer::u8" },
      { name: "longevity_weight", type: "core::integer::u8" },
      { name: "stability_weight", type: "core::integer::u8" },
    ],
  },
  {
    type: "interface",
    name: "galax0_contracts::main::ICreditScoreMain",
    items: [
      {
        type: "function",
        name: "submit_data",
        inputs: [
          {
            name: "wallet_data",
            type: "galax0_contracts::data_structures::WalletData",
          },
          {
            name: "defi_data",
            type: "galax0_contracts::data_structures::DefiData",
          },
          {
            name: "exchange_data",
            type: "galax0_contracts::data_structures::ExchangeData",
          },
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_credit_score",
        inputs: [],
        outputs: [{ type: "galax0_contracts::data_structures::CreditScore" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "grant_score_access",
        inputs: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "permission_type", type: "core::integer::u8" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "revoke_score_access",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "register_data_provider",
        inputs: [
          {
            name: "provider",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "name", type: "core::felt252" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "remove_data_provider",
        inputs: [
          {
            name: "provider",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "set_scoring_parameters",
        inputs: [
          {
            name: "new_weights",
            type: "galax0_contracts::data_structures::ScoreFactors",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "pause",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "unpause",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "admin_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "scoring_engine",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "data_provider",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::DataSubmitted",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::ScoreUpdated",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "new_score", type: "core::integer::u256", kind: "data" },
      { name: "confidence", type: "core::integer::u8", kind: "data" },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::AccessGranted",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "permission_type", type: "core::integer::u8", kind: "data" },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::AccessRevoked",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::ProviderRegistered",
    kind: "struct",
    members: [
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "name", type: "core::felt252", kind: "data" },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::ProviderRemoved",
    kind: "struct",
    members: [
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::SystemPaused",
    kind: "struct",
    members: [
      {
        name: "by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::SystemUnpaused",
    kind: "struct",
    members: [
      {
        name: "by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::main::CreditScoreMain::Event",
    kind: "enum",
    variants: [
      {
        name: "DataSubmitted",
        type: "galax0_contracts::main::CreditScoreMain::DataSubmitted",
        kind: "nested",
      },
      {
        name: "ScoreUpdated",
        type: "galax0_contracts::main::CreditScoreMain::ScoreUpdated",
        kind: "nested",
      },
      {
        name: "AccessGranted",
        type: "galax0_contracts::main::CreditScoreMain::AccessGranted",
        kind: "nested",
      },
      {
        name: "AccessRevoked",
        type: "galax0_contracts::main::CreditScoreMain::AccessRevoked",
        kind: "nested",
      },
      {
        name: "ProviderRegistered",
        type: "galax0_contracts::main::CreditScoreMain::ProviderRegistered",
        kind: "nested",
      },
      {
        name: "ProviderRemoved",
        type: "galax0_contracts::main::CreditScoreMain::ProviderRemoved",
        kind: "nested",
      },
      {
        name: "SystemPaused",
        type: "galax0_contracts::main::CreditScoreMain::SystemPaused",
        kind: "nested",
      },
      {
        name: "SystemUnpaused",
        type: "galax0_contracts::main::CreditScoreMain::SystemUnpaused",
        kind: "nested",
      },
    ],
  },
];
