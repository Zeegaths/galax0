'use client'; 
import React from "react";
import 'tailwindcss/tailwind.css';

const CreditScore: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#171031] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171031]">
        <div className="p-4 text-lg font-bold text-[#01F3F4]">Coin Portfolio</div>
        <nav className="mt-4 space-y-2">
          <a
            href="/"
            className="block py-2 px-4  text-white rounded hover:bg-[#FE664F]"
          >
            Logout
          </a>
          <a href="/home" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </a>
          <a href="/credit-score" className="block py-2 px-4 hover:bg-gray-700">
            Credit Score
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Asset Allocation Chart
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Discover
          </a>
         
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Docs
          </a>
        
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-[#120D24]">
        {/* Header */}
        <div className="flex justify-between items-center mt-20">
          <h1 className="text-3xl font-bold text-[#01F3F4] ">AI Credit Analysis</h1>
          <button className="bg-[#FE664F] text-white px-6 py-2 rounded hover:bg-[#d9434f] mb-5">
            Verification Complete
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="col-span-4 p-4 rounded-lg bg-[#171031]">
            <h2 className="text-lg font-bold text-[#01F3F4] mb-4">Chain Report</h2>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-white">Base Sepolia</span>
                  <span className="text-[#01F3F4]">Trusted</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-white">Ethereum Sepolia</span>
                  <span className="text-[#01F3F4]">Trusted</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-white">Linea Testnet</span>
                  <span className="text-[#FE664F]">Risky</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-span-8 bg-[#171031] p-6 rounded-lg">
            {/* Credit Score and Breakdown */}
            <div className="flex space-x-8">
              {/* Credit Score Chart */}
              <div className="relative w-40 h-40">
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    fill="none"
                    stroke="#292a3a"
                    strokeWidth="10"
                  />
                </svg>
                <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    fill="none"
                    stroke="#FE664F"
                    strokeWidth="10"
                    strokeDasharray="377"
                    strokeDashoffset="113"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="text-3xl font-bold text-[#FE664F]">595</h2>
                  <p className="text-sm text-gray-400">Fair</p>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="flex-1 mt-5">
                <h3 className="text-lg font-bold text-[#01F3F4]">Score Breakdown</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-400">Transaction History</span>
                    <span className="text-white">220</span>
                    <div className="w-1/2 bg-[#292a3a] h-2 rounded-lg overflow-hidden ml-4">
                      <div className="bg-[#FE664F] h-full w-[70%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-400">Asset Management</span>
                    <span className="text-white">175</span>
                    <div className="w-1/2 bg-[#292a3a] h-2 rounded-lg overflow-hidden ml-4">
                      <div className="bg-[#FE664F] h-full w-[50%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-400">DeFi Behavior</span>
                    <span className="text-white">85</span>
                    <div className="w-1/2 bg-[#292a3a] h-2 rounded-lg overflow-hidden ml-4">
                      <div className="bg-[#FE664F] h-full w-[30%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-400">Network Effect</span>
                    <span className="text-white">115</span>
                    <div className="w-1/2 bg-[#292a3a] h-2 rounded-lg overflow-hidden ml-4">
                      <div className="bg-[#FE664F] h-full w-[40%]"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Positive Factors and Areas for Improvement */}
            <div className="flex mt-8 space-x-8">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-[#01F3F4]">Positive Factors</h4>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-400">✔ Regular transaction frequency across both chains indicates active wallet use.</li>
                  <li className="text-gray-400">✔ Engagement with multiple chains shows adaptability and understanding of the blockchain ecosystem.</li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-[#FE664F]">Areas for Improvement</h4>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-400">⚠ Limited unique contacts and links indicate a narrow scope of interaction and diversification.</li>
                  <li className="text-gray-400">⚠ Low average transaction value and high total gas used suggest inefficiency in gas usage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreditScore;
