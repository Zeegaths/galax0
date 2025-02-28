export const DATAPROVIDERABI =[
  {
    type: "impl",
    name: "DataProvider",
    interface_name: "galax0_contracts::data_provider::IDataProvider",
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
    type: "enum",
    name: "core::bool",
    variants: [
      { name: "False", type: "()" },
      { name: "True", type: "()" },
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
    name: "galax0_contracts::data_structures::VerificationData",
    members: [
      { name: "data_hash", type: "core::felt252" },
      { name: "verification_time", type: "core::integer::u64" },
      {
        name: "verifier",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "interface",
    name: "galax0_contracts::data_provider::IDataProvider",
    items: [
      {
        type: "function",
        name: "submit_wallet_data",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "data",
            type: "galax0_contracts::data_structures::WalletData",
          },
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "submit_defi_data",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "data", type: "galax0_contracts::data_structures::DefiData" },
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "submit_exchange_data",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "data",
            type: "galax0_contracts::data_structures::ExchangeData",
          },
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "verify_data_submission",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          { type: "galax0_contracts::data_structures::VerificationData" },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_verification_status",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [{ type: "core::integer::u8" }],
        state_mutability: "view",
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
    name: "galax0_contracts::data_provider::DataProvider::DataSubmitted",
    kind: "struct",
    members: [
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "data_type", type: "core::felt252", kind: "data" },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::data_provider::DataProvider::ProviderAuthorized",
    kind: "struct",
    members: [
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "name", type: "core::felt252", kind: "data" },
      {
        name: "authorized_by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::data_provider::DataProvider::ProviderRevoked",
    kind: "struct",
    members: [
      {
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "revoked_by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::data_provider::DataProvider::DataVerified",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "data_type", type: "core::felt252", kind: "data" },
      {
        name: "verified_by",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "timestamp", type: "core::integer::u64", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "galax0_contracts::data_provider::DataProvider::Event",
    kind: "enum",
    variants: [
      {
        name: "DataSubmitted",
        type: "galax0_contracts::data_provider::DataProvider::DataSubmitted",
        kind: "nested",
      },
      {
        name: "ProviderAuthorized",
        type: "galax0_contracts::data_provider::DataProvider::ProviderAuthorized",
        kind: "nested",
      },
      {
        name: "ProviderRevoked",
        type: "galax0_contracts::data_provider::DataProvider::ProviderRevoked",
        kind: "nested",
      },
      {
        name: "DataVerified",
        type: "galax0_contracts::data_provider::DataProvider::DataVerified",
        kind: "nested",
      },
    ],
  },
];
