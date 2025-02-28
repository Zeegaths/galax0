"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [transactions, setTransactions] = useState([
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
  const [wallets, setWallets] = useState([
    "Binance Wallet",
    "Photon Wallet",
    "Bitmex Wallet",
  ]);
  const [newWallet, setNewWallet] = useState("");

  // Trading categories data
  const tradingCategories = [
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

  const [activeCategory, setActiveCategory] = useState(0);

  const handleAddWallet = () => {
    if (newWallet.trim() !== "") {
      setWallets([...wallets, newWallet.trim()]);
      setNewWallet("");
    }
  };

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

  return (
    <div className="flex h-screen bg-[#171031] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171031] flex flex-col">
        <div className="p-4 text-lg font-bold text-[#01F3F4]">
          Coin Portfolio
        </div>

        <nav className="mt-4 space-y-2 px-4">
          <a
            href="/"
            className="block py-2 px-4 text-white rounded hover:bg-[#FE664F]"
          >
            Logout
          </a>
          <a
            href="/home"
            className="block py-2 px-4 rounded hover:bg-[#FE664F]"
          >
            Home
          </a>
          <a
            href="/credit-score"
            className="block py-2 px-4 rounded hover:bg-[#FE664F]"
          >
            Credit Score
          </a>

          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Asset Allocation Chart
          </a>

          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Quick Actions
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Discover
          </a>

          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Docs
          </a>
        </nav>

        {/* Exchanges Section */}
        <div className="mt-8 px-4">
          <h2 className="text-sm font-medium mb-2 text-[#01F3F4]">
            Your Exchanges
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
              <span>Binance</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-500"></span>
              <span>Photon</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
              <span>Bitmex</span>
            </li>
          </ul>
        </div>

        {/* Wallets Section */}
        <div className="mt-8 px-4">
          <h2 className="text-sm font-medium mb-2 text-[#01F3F4]">
            Your Wallets
          </h2>
          <ul className="space-y-2">
            {wallets.map((wallet, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-gray-500"></span>
                <span>{wallet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Wallet Input */}
        <div className="px-5 mt-4">
          <input
            type="text"
            value={newWallet}
            onChange={(e) => setNewWallet(e.target.value)}
            className="w-full p-2 rounded bg-[#1e1f2b] text-gray-200"
            placeholder="Add new wallet"
          />
          <button
            onClick={handleAddWallet}
            className="mt-2 bg-[#FE664F] text-white px-4 py-2 rounded hover:bg-[#d9434f] w-full"
          >
            Add Wallet
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-[#120D24]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#01F3F4]">Dashboard</h1>
            <p className="text-sm text-gray-400">Main Account - Bybit</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>$30,701.95</span>
            <span>0.84253 BTC</span>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">
              Cryptocurrency Holdings
            </h2>
            <p className="text-lg font-bold text-white">$15,000</p>
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