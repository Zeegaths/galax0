"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Define proper types for your component
interface Transaction {
  id: string;
  asset: string;
  action: string;
  date: string;
  amount: string;
  status: string;
}

interface ConnectedWallet {
  id: number;
  address: string;
  name: string;
  icon: string;
  chainId: number;
}

interface PortfolioCoin {
  name: string;
  symbol: string;
  amount: string;
  usdValue: number;
  percentChange: number;
}

interface TradingCategoryCoin {
  symbol: string;
  name: string;
  price: string;
  change: string;
}

interface TradingCategory {
  title: string;
  riskLevel: string;
  description: string;
  coins: TradingCategoryCoin[];
}

// Define the Home component properly with function keyword and export
export default function Home(): React.ReactElement {
  // Transaction state
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "5001",
      asset: "BTC",
      action: "Buy",
      date: "2024-12-05",
      amount: "$12,000",
      status: "Completed",
    },
    {
      id: "5002",
      asset: "ETH",
      action: "Stake",
      date: "2024-12-06",
      amount: "5 ETH",
      status: "In Progress",
    },
  ]);
  
  // Wallet management state
  const [showWalletForm, setShowWalletForm] = useState<boolean>(false);
  const [newWallet, setNewWallet] = useState<string>("");
  const [newWalletBalance, setNewWalletBalance] = useState<string>("");
  
  // Connected wallets state (from RainbowKit)
  const [connectedWallets, setConnectedWallets] = useState<ConnectedWallet[]>([]);
  
  // Wallet balances
  const [walletBalances, setWalletBalances] = useState<Record<string, string>>({
    "0x1234...5678": "$12,450.32",
    "0x8765...4321": "$8,750.65",
    "0x5432...8765": "$9,500.98",
  });

  // Portfolio coin holdings
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[]>([
    { name: "Bitcoin", symbol: "BTC", amount: "0.42", usdValue: 30289.76, percentChange: 2.3 },
    { name: "Ethereum", symbol: "ETH", amount: "5.8", usdValue: 23093.69, percentChange: 1.8 },
    { name: "Solana", symbol: "SOL", amount: "62.5", usdValue: 10778.13, percentChange: 4.2 },
    { name: "Polygon", symbol: "MATIC", amount: "1200", usdValue: 948.00, percentChange: -0.5 },
    { name: "Cardano", symbol: "ADA", amount: "3500", usdValue: 1715.00, percentChange: -1.2 },
    { name: "Avalanche", symbol: "AVAX", amount: "32", usdValue: 1255.68, percentChange: 5.7 },
  ]);

  // Trading categories data
  const tradingCategories: TradingCategory[] = [
    {
      title: "DCA / Long Term",
      riskLevel: "Low Risk",
      description: "Dollar-cost averaging strategy for long-term investment",
      coins: [
        { symbol: "BTC", name: "Bitcoin", price: "$72,145.21", change: "+2.3%" },
        { symbol: "ETH", name: "Ethereum", price: "$3,981.67", change: "+1.8%" },
        { symbol: "SOL", name: "Solana", price: "$172.45", change: "+4.2%" },
        { symbol: "MATIC", name: "Polygon", price: "$0.79", change: "-0.5%" },
        { symbol: "DOT", name: "Polkadot", price: "$7.82", change: "+1.2%" },
      ]
    },
    {
      title: "Spot Trading",
      riskLevel: "Medium Risk",
      description: "Short to medium-term positions with moderate risk",
      coins: [
        { symbol: "XRP", name: "Ripple", price: "$0.58", change: "+3.1%" },
        { symbol: "ADA", name: "Cardano", price: "$0.49", change: "-1.2%" },
        { symbol: "AVAX", name: "Avalanche", price: "$39.24", change: "+5.7%" },
        { symbol: "LINK", name: "Chainlink", price: "$14.92", change: "+2.4%" },
        { symbol: "ATOM", name: "Cosmos", price: "$9.31", change: "-0.8%" },
      ]
    },
    {
      title: "Futures / Margin",
      riskLevel: "High Risk",
      description: "Leveraged trading with high risk and high reward potential",
      coins: [
        { symbol: "DOGE", name: "Dogecoin", price: "$0.15", change: "+8.3%" },
        { symbol: "SHIB", name: "Shiba Inu", price: "$0.00002791", change: "+12.4%" },
        { symbol: "ARB", name: "Arbitrum", price: "$1.31", change: "+7.2%" },
        { symbol: "SUI", name: "Sui", price: "$1.67", change: "-3.5%" },
        { symbol: "IMX", name: "Immutable X", price: "$3.12", change: "+9.7%" },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<number>(0);

  // Simulate RainbowKit wallet connection updates
  useEffect(() => {
    // This is a mock for demonstration purposes
    const mockWallets: ConnectedWallet[] = [
      { 
        id: 1, 
        address: "0x1234...5678", 
        name: "MetaMask", 
        icon: "yellow",
        chainId: 1 // Ethereum
      },
      { 
        id: 2, 
        address: "0x8765...4321", 
        name: "Coinbase Wallet", 
        icon: "blue",
        chainId: 1 // Ethereum
      },
      { 
        id: 3, 
        address: "0x5432...8765", 
        name: "WalletConnect", 
        icon: "red",
        chainId: 137 // Polygon
      }
    ];
    
    setConnectedWallets(mockWallets);
  }, []);

  // Function to connect additional wallets
  const connectAdditionalWallet = () => {
    // In a real implementation, this would trigger the RainbowKit modal
    alert("Connect wallet functionality would open the RainbowKit wallet selection modal");
    
    // Simulate adding a new wallet after connection
    const newWalletAddress = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 10)}`;
    const randomBalance = `$${(Math.random() * 10000).toFixed(2)}`;
    
    // Update balances
    setWalletBalances(prev => ({
      ...prev,
      [newWalletAddress]: randomBalance
    }));
    
    // Add to connected wallets
    const walletProviders = ["Rainbow", "Trust Wallet", "Ledger", "Phantom", "Argent"];
    const randomProvider = walletProviders[Math.floor(Math.random() * walletProviders.length)];
    const iconColors = ["green", "purple", "teal", "orange", "pink"];
    const randomIcon = iconColors[Math.floor(Math.random() * iconColors.length)];
    
    setConnectedWallets(prev => [
      ...prev,
      { 
        id: prev.length + 1, 
        address: newWalletAddress, 
        name: randomProvider, 
        icon: randomIcon,
        chainId: Math.random() > 0.5 ? 1 : 137
      }
    ]);
  };

  // Function to add a custom wallet
  const handleAddWallet = () => {
    if (newWallet.trim() === '') return;
    
    // Here you would handle adding a new wallet
    // This is just a placeholder since the original code didn't fully implement this
    setNewWallet('');
    setNewWalletBalance('');
    setShowWalletForm(false);
  };

  // Chart data
  const data = [
    { name: "Jan", PNL: 100 },
    { name: "Feb", PNL: 200 },
    { name: "Mar", PNL: 150 },
    { name: "Apr", PNL: 300 },
    { name: "May", PNL: 250 },
    { name: "Jun", PNL: 400 },
    { name: "Jul", PNL: 350 },
    { name: "Aug", PNL: 450 },
    { name: "Sep", PNL: 400 },
    { name: "Oct", PNL: 500 },
    { name: "Nov", PNL: 450 },
    { name: "Dec", PNL: 550 },
  ];

  const loadMoreTransactions = () => {
    setTransactions([
      ...transactions,
      {
        id: "5003",
        asset: "USDT",
        action: "Transfer",
        date: "2024-12-07",
        amount: "$1,000",
        status: "Completed",
      },
      {
        id: "5004",
        asset: "SOL",
        action: "Swap",
        date: "2024-12-08",
        amount: "10 SOL",
        status: "Completed",
      },
    ]);
  };

  // Calculate total wallet balance
  const totalWalletBalance = Object.values(walletBalances).reduce((total, balance) => {
    const balanceValue = parseFloat(balance.replace('$', '').replace(',', '')) || 0;
    return total + balanceValue;
  }, 0);

  // Calculate total portfolio value from coins
  const totalPortfolioValue = portfolioCoins.reduce((total, coin) => total + coin.usdValue, 0);

  // Format number to USD
  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  // Get chain name from chainId
  const getChainName = (chainId: number) => {
    const chains: Record<number, string> = {
      1: "Ethereum",
      137: "Polygon",
      56: "BSC",
      10: "Optimism",
      42161: "Arbitrum"
    };
    return chains[chainId] || "Unknown";
  };

  // Format wallet address for display
  const formatAddress = (address: string) => {
    return address;
  };

  // Data for portfolio allocation pie chart
  const portfolioAllocationData = portfolioCoins.map(coin => ({
    name: coin.symbol,
    value: coin.usdValue,
  }));

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a569bd', '#5dade2'];

  return (
    <div className="flex h-screen bg-[#171031] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171031] flex flex-col">
        <div className="p-4 text-lg font-bold text-[#01F3F4]">
          Coin Portfolio
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2 px-4">
          <a
            href="/"
            className="block py-2 px-4 text-white rounded hover:bg-[#FE664F]"
          >
            Dashboard
          </a>
          <a
            href="/portfolio"
            className="block py-2 px-4 rounded hover:bg-[#FE664F]"
          >
            Portfolio
          </a>
          <a
            href="/credit-score"
            className="block py-2 px-4 rounded hover:bg-[#FE664F]"
          >
            Credit Score
          </a>
          <a href="/allocation" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Asset Allocation
          </a>
          <a href="/actions" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Quick Actions
          </a>
          <a href="/discover" className="block py-2 px-4 hover:bg-[#FE664F]">
            Discover
          </a>
          <a href="/docs" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Docs
          </a>
        </nav>

        {/* Trading Categories Section */}
        <div className="mt-6" id="trading-options">
          <h2 className="text-xl font-bold mb-4 px-4 text-[#01F3F4]">Trading Options</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap px-4 space-x-2 mb-4">
            {tradingCategories.map((category, index) => (
              <button 
                key={index}
                className={`px-3 py-1 rounded-t-lg font-medium text-xs ${
                  activeCategory === index 
                    ? 'bg-[#171031] text-[#01F3F4] border-b-2 border-[#01F3F4]' 
                    : 'bg-[#120D24] text-gray-400 hover:bg-[#171031]'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {/* Preview of selected category */}
          <div className="px-4">
            <div className="p-3 rounded-lg bg-[#120D24] border border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm">{tradingCategories[activeCategory].title}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === 0 ? 'bg-green-900 text-green-300' : 
                  activeCategory === 1 ? 'bg-yellow-900 text-yellow-300' : 
                  'bg-red-900 text-red-300'
                }`}>
                  {tradingCategories[activeCategory].riskLevel}
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{tradingCategories[activeCategory].description}</p>
              <div className="text-xs">
                <span className="text-gray-400">Top coins: </span>
                {tradingCategories[activeCategory].coins.slice(0, 3).map((coin, i) => (
                  <span key={i} className="mr-1">
                    {coin.symbol}
                    {i < 2 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wallets Section */}
        <div className="mt-8 px-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-[#01F3F4]">
              Your Wallets
            </h2>
            <span className="text-xs text-green-400">
              Total: {formatUSD(totalWalletBalance)}
            </span>
          </div>
          
          {/* Wallet list */}
          <ul className="space-y-2 max-h-48 overflow-y-auto pr-1 mb-3">
            {connectedWallets.map((wallet) => (
              <li key={wallet.id} className="flex items-center justify-between p-2 rounded bg-[#1A1339] hover:bg-[#231A45]">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-gray-500 flex-shrink-0"></span>
                  <div className="flex flex-col">
                    <span className="text-sm">{wallet.name}</span>
                    <span className="text-xs text-gray-400">{formatAddress(wallet.address)}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-green-300">
                    {walletBalances[wallet.address] || "$0.00"}
                  </span>
                  <span className="text-xs text-gray-400">{getChainName(wallet.chainId)}</span>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Add Wallet Button/Form */}
          {!showWalletForm ? (
            <button
              onClick={() => setShowWalletForm(true)}
              className="w-full bg-[#FE664F] text-white px-3 py-1 rounded text-sm hover:bg-[#d9434f] flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Wallet
            </button>
          ) : (
            <div className="bg-[#1A1339] p-3 rounded">
              <input
                type="text"
                value={newWallet}
                onChange={(e) => setNewWallet(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-[#120D24] text-gray-200 text-sm"
                placeholder="Wallet name"
              />
              <input
                type="text"
                value={newWalletBalance}
                onChange={(e) => setNewWalletBalance(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-[#120D24] text-gray-200 text-sm"
                placeholder="Balance (e.g. $1000)"
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleAddWallet}
                  className="flex-1 bg-[#01F3F4] text-[#171031] px-2 py-1 rounded text-sm hover:bg-[#00D1D2]"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowWalletForm(false)}
                  className="flex-1 bg-gray-600 text-white px-2 py-1 rounded text-sm hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-[#120D24]">
        {/* Header with Total Portfolio Value */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#01F3F4]">Dashboard</h1>
            <p className="text-sm text-gray-400">Main Account</p>
          </div>
          
          {/* Total Portfolio Value */}
          <div className="mt-3 sm:mt-0 bg-[#171031] p-3 rounded-lg flex items-center">
            <div className="flex flex-col items-center mr-4">
              <span className="text-xs text-gray-400">Total Portfolio Value</span>
              <span className="font-bold text-green-400 text-xl">{formatUSD(totalPortfolioValue)}</span>
            </div>
            <ConnectButton showBalance={false} />
          </div>
        </div>
        
        {/* Performance Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">
              Cryptocurrency Holdings
            </h2>
            <p className="text-lg font-bold text-white">{formatUSD(totalPortfolioValue)}</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">
              NFT Collections
            </h2>
            <p className="text-lg font-bold text-white">12 NFTs</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">
              DeFi Positions
            </h2>
            <p className="text-lg font-bold text-white">Lending, Staking</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">
              Historical Performance
            </h2>
            <p className="text-lg font-bold text-green-400">+23.45%</p>
          </div>
        </div>
        
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Portfolio Distribution Chart */}
          <div className="bg-[#171031] p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4 text-[#01F3F4]">Portfolio Allocation</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioAllocationData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {portfolioAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatUSD(value as number)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Portfolio Balance By Coin */}
          <div className="lg:col-span-2 bg-[#171031] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#01F3F4]">Coin Balances</h2>
              <button className="text-sm bg-[#FE664F] text-white px-3 py-1 rounded hover:bg-[#d9434f]">
                Add Coins
              </button>
            </div>
            <div className="overflow-x-auto max-h-64">
              <table className="w-full">
                <thead className="text-xs text-gray-400 uppercase bg-[#1A1339]">
                  <tr>
                    <th className="py-2 px-4 text-left">Coin</th>
                    <th className="py-2 px-4 text-right">Balance</th>
                    <th className="py-2 px-4 text-right">Value</th>
                    <th className="py-2 px-4 text-right">24h</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {portfolioCoins.map((coin, index) => (
                    <tr key={index} className="hover:bg-[#1A1339]">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2 text-xs font-bold">
                            {coin.symbol}
                          </div>
                          <div>
                            <div className="font-medium">{coin.name}</div>
                            <div className="text-xs text-gray-400">{coin.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="font-medium">{coin.amount}</div>
                        <div className="text-xs text-gray-400">{coin.symbol}</div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="font-medium">{formatUSD(coin.usdValue)}</div>
                        <div className="text-xs text-gray-400">{((coin.usdValue / totalPortfolioValue) * 100).toFixed(1)}% of portfolio</div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={coin.percentChange >= 0 ? "text-green-400" : "text-red-400"}>
                          {coin.percentChange >= 0 ? "+" : ""}{coin.percentChange}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center space-x-2">
                          <button className="text-xs bg-[#01F3F4] text-[#171031] px-2 py-1 rounded hover:bg-[#00D1D2]">
                            Buy
                          </button>
                          <button className="text-xs bg-[#FE664F] text-white px-2 py-1 rounded hover:bg-[#d9434f]">
                            Sell
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-[#171031] p-6 rounded mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Portfolio Analytics</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-[#01F3F4] text-[#171031] px-4 py-2 rounded">
                Allocation
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div
                    className="bg-[#01F3F4] h-3 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">65%</p>
              </div>
              <button className="bg-[#171031] text-gray-400 px-4 py-2 rounded">
                PNL
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div
                    className="bg-green-400 h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">75%</p>
              </div>
              <button className="bg-[#171031] text-gray-400 px-4 py-2 rounded">
                Risk
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">40%</p>
              </div>
            </div>
          </div>
          {/* Placeholder for a graph */}
          <div className="h-48 bg-[#171031] rounded">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  stroke="#fff"
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#434351" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1f2b",
                    borderRadius: "10px",
                    color: "#FFFFFF",
                  }}
                  labelStyle={{ color: "#FFFFFF" }}
                />
                <Legend />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="5%" stopColor="#0694A2" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0694A2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Line
                  type="monotone"
                  dataKey="PNL"
                  stroke="#0694A2"
                  fill="url(#colorUv)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-[#171031] p-6 rounded mt-6">
          <h2 className="text-lg font-medium mb-4">Transaction History</h2>
          <table className="w-full text-sm text-gray-400">
            <thead>
              <tr>
                <th className="text-left py-2">ID</th>
                <th className="text-left py-2">Asset</th>
                <th className="text-left py-2">Action</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td className="py-2">{tx.id}</td>
                  <td className="py-2 text-white">{tx.asset}</td>
                  <td className="py-2">{tx.action}</td>
                  <td className="py-2">{tx.date}</td>
                  <td className="py-2">{tx.amount}</td>
                  <td
                    className={`py-2 ${
                      tx.status === "Completed"
                        ? "text-green-400"
                        : "text-blue-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={loadMoreTransactions}
            className="mt-4 bg-[#FE664F] text-white px-4 py-2 rounded hover:bg-[#d9434f]"
          >
            Load More
          </button>
        </div>

        {/* Trading Categories Section */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4 text-[#01F3F4]">Trading Options</h2>
          
          {/* Category Tabs */}
          <div className="flex space-x-4 mb-4">
            {tradingCategories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-t-lg font-medium ${
                  activeCategory === index 
                    ? 'bg-[#171031] text-[#01F3F4] border-b-2 border-[#01F3F4]' 
                    : 'bg-[#150D28] text-gray-400 hover:bg-[#171031]'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.title}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  index === 0 ? 'bg-green-900 text-green-300' : 
                  index === 1 ? 'bg-yellow-900 text-yellow-300' : 
                  'bg-red-900 text-red-300'
                }`}>
                  {category.riskLevel}
                </span>
              </button>
            ))}
          </div>
          
          {/* Active Category Content */}
          <div className="bg-[#171031] p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-[#01F3F4]">{tradingCategories[activeCategory].title}</h3>
                <p className="text-gray-400">{tradingCategories[activeCategory].description}</p>
              </div>
              
              {/* Risk indicator */}
              <div className="flex items-center">
                <span className="text-sm mr-2">Risk Level:</span>
                <div className="w-32 bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      activeCategory === 0 ? 'bg-green-400 w-1/4' : 
                      activeCategory === 1 ? 'bg-yellow-400 w-1/2' : 
                      'bg-red-400 w-3/4'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Trading strategy tips */}
            <div className="mb-6 bg-[#150D28] p-4 rounded-lg">
              <h4 className="font-medium mb-2">Strategy Tips</h4>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                {activeCategory === 0 && (
                  <>
                    <li>Set a fixed amount to invest on a regular schedule</li>
                    <li>Focus on established coins with strong fundamentals</li>
                    <li>Aim for a minimum 3-5 year holding period</li>
                    <li>Rebalance portfolio quarterly</li>
                    <li>Consider staking for additional passive income</li>
                  </>
                )}
                {activeCategory === 1 && (
                  <>
                    <li>Monitor market trends closely</li>
                    <li>Set stop losses to protect capital</li>
                    <li>Look for support/resistance levels before entry</li>
                    <li>Consider taking partial profits on significant rallies</li>
                    <li>Diversify across market sectors</li>
                  </>
                )}
                {activeCategory === 2 && (
                  <>
                    <li>Only use capital you can afford to lose</li>
                    <li>Start with lower leverage (2-5x)</li>
                    <li>Strict risk management (1-2% per trade)</li>
                    <li>Always use stop losses</li>
                    <li>Be aware of liquidation levels</li>
                  </>
                )}
              </ul>
            </div>
            
            {/* Scrollable coins list */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Available Assets</h4>
              <div className="overflow-x-auto max-h-60 rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-[#150D28] text-gray-300">
                    <tr>
                      <th className="py-2 px-4 text-left sticky top-0 bg-[#150D28]">Symbol</th>
                      <th className="py-2 px-4 text-left sticky top-0 bg-[#150D28]">Name</th>
                      <th className="py-2 px-4 text-right sticky top-0 bg-[#150D28]">Price</th>
                      <th className="py-2 px-4 text-right sticky top-0 bg-[#150D28]">24h Change</th>
                      <th className="py-2 px-4 text-center sticky top-0 bg-[#150D28]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {tradingCategories[activeCategory].coins.map((coin, index) => (
                      <tr key={index} className="hover:bg-[#1A1339]">
                        <td className="py-3 px-4 font-medium">{coin.symbol}</td>
                        <td className="py-3 px-4 text-gray-300">{coin.name}</td>
                        <td className="py-3 px-4 text-right">{coin.price}</td>
                        <td className={`py-3 px-4 text-right ${
                          coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {coin.change}
                        </td>
                        <td className="py-3 px-4 flex justify-center space-x-2">
                          <button className="bg-[#01F3F4] text-[#171031] px-3 py-1 rounded text-xs font-medium hover:bg-[#00D1D2]">
                            Buy
                          </button>
                          {activeCategory >= 1 && (
                            <button className="bg-[#FE664F] text-white px-3 py-1 rounded text-xs font-medium hover:bg-[#d9434f]">
                              Sell
                            </button>
                          )}
                          {activeCategory === 2 && (
                            <button className="bg-[#8B5CF6] text-white px-3 py-1 rounded text-xs font-medium hover:bg-[#7C3AED]">
                              Leverage
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Trading Method Selection */}
            <div className="mb-6 mt-8 border border-gray-700 rounded-lg">
              <div className="p-4 border-b border-gray-700">
                <h4 className="font-medium text-[#01F3F4]">Choose Trading Method</h4>
                <p className="text-sm text-gray-400 mt-1">Select how you want to execute your trades</p>
              </div>
              
              <div className="flex flex-col md:flex-row">
                {/* Manual Trading Option */}
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-700">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#01F3F4] flex items-center justify-center text-[#171031] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium">Manual Trading</h5>
                      <p className="text-sm text-gray-400 mt-1">Take full control of your trading strategy with manual execution</p>
                      <ul className="text-xs text-gray-300 mt-2 space-y-1">
                        <li>• Full control over entry and exit points</li>
                        <li>• Set your own stop losses and take profits</li>
                        <li>• Real-time market data and analysis</li>
                      </ul>
                      <button className="mt-4 bg-[#01F3F4] text-[#171031] px-4 py-2 rounded text-sm font-medium hover:bg-[#00D1D2]">
                        Trade Manually
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* AI Agent Trading Option */}
                <div className="flex-1 p-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#FE664F] flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium">AI Trading Agent</h5>
                      <p className="text-sm text-gray-400 mt-1">Let our AI algorithms execute trades based on market analysis</p>
                      <ul className="text-xs text-gray-300 mt-2 space-y-1">
                        <li>• 24/7 market monitoring and execution</li>
                        <li>• Optimized entry and exit based on AI analysis</li>
                        <li>• Risk management tailored to your preferences</li>
                      </ul>
                      <button className="mt-4 bg-[#FE664F] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#d9434f]">
                        Activate AI Agent
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-between">
              <button className="bg-[#01F3F4] text-[#171031] px-6 py-2 rounded font-medium hover:bg-[#00D1D2]">
                View All {activeCategory === 0 ? 'Long Term' : activeCategory === 1 ? 'Spot' : 'Margin'} Assets
              </button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded font-medium hover:bg-gray-600">
                Learn About {tradingCategories[activeCategory].title} Trading
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}