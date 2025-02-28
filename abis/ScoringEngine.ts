export const SCORINGENGINEABI = [
  {
    type: "impl",
    name: "ScoringEngine",
    interface_name: "galax0_contracts::scoring_engine::IScoringEngine",
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
    name: "galax0_contracts::scoring_engine::IScoringEngine",
    items: [
      {
        type: "function",
        name: "calculate_credit_score",
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
        outputs: [{ type: "galax0_contracts::data_structures::CreditScore" }],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_score_factors",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [{ type: "galax0_contracts::data_structures::ScoreFactors" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "update_score_weights",
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
        name: "set_minimum_requirements",
        inputs: [
          { name: "min_age", type: "core::integer::u64" },
          { name: "min_tx", type: "core::integer::u256" },
          { name: "min_defi", type: "core::integer::u256" },
        ],
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
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::scoring_engine::ScoringEngine::ScoreCalculated",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "score", type: "core::integer::u256", kind: "data" },
      { name: "confidence", type: "core::integer::u8", kind: "data" },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::scoring_engine::ScoringEngine::WeightsUpdated",
    kind: "struct",
    members: [
      {
        name: "old_weights",
        type: "galax0_contracts::data_structures::ScoreFactors",
        kind: "data",
      },
      {
        name: "new_weights",
        type: "galax0_contracts::data_structures::ScoreFactors",
        kind: "data",
      },
      {
        name: "updated_by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::scoring_engine::ScoringEngine::RequirementsUpdated",
    kind: "struct",
    members: [
      { name: "min_age", type: "core::integer::u64", kind: "data" },
      { name: "min_tx", type: "core::integer::u256", kind: "data" },
      { name: "min_defi", type: "core::integer::u256", kind: "data" },
      {
        name: "updated_by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::scoring_engine::ScoringEngine::Event",
    kind: "enum",
    variants: [
      {
        name: "ScoreCalculated",
        type: "galax0_contracts::scoring_engine::ScoringEngine::ScoreCalculated",
        kind: "nested",
      },
      {
        name: "WeightsUpdated",
        type: "galax0_contracts::scoring_engine::ScoringEngine::WeightsUpdated",
        kind: "nested",
      },
      {
        name: "RequirementsUpdated",
        type: "galax0_contracts::scoring_engine::ScoringEngine::RequirementsUpdated",
        kind: "nested",
      },
    ],
  },
];
