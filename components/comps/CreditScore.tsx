'use client'; 
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const CreditScore: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [score, setScore] = useState<number>(0);
  const [scoreCategory, setScoreCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scoreFactors, setScoreFactors] = useState({
    transactionHistory: { score: 0, percentage: 0 },
    assetManagement: { score: 0, percentage: 0 },
    defiBehavior: { score: 0, percentage: 0 },
    networkEffect: { score: 0, percentage: 0 }
  });
  const [chainReport, setChainReport] = useState([
    { chain: "Base Sepolia", status: "Trusted", riskLevel: "low" },
    { chain: "Ethereum Sepolia", status: "Trusted", riskLevel: "low" },
    { chain: "Linea Testnet", status: "Risky", riskLevel: "high" },
    { chain: "Sonic", status: "Analyzing", riskLevel: "medium" }
  ]);
  const [positiveFactors, setPositiveFactors] = useState<string[]>([]);
  const [improvementAreas, setImprovementAreas] = useState<string[]>([]);
  const [aiRecommendation, setAiRecommendation] = useState<string>("");

  // Simulate AI credit score calculation
  useEffect(() => {
    if (isConnected) {
      setIsLoading(true);
      
      // Simulate API call to AI credit scoring service
      setTimeout(() => {
        // Calculate simulated scores based on wallet
        const calculatedScore = Math.floor(Math.random() * (850 - 300) + 300);
        const transactionScore = Math.floor(calculatedScore * 0.35);
        const assetScore = Math.floor(calculatedScore * 0.30);
        const defiScore = Math.floor(calculatedScore * 0.20);
        const networkScore = Math.floor(calculatedScore * 0.15);
        
        // Set score category based on calculated score
        let category;
        if (calculatedScore >= 750) category = "Excellent";
        else if (calculatedScore >= 680) category = "Good";
        else if (calculatedScore >= 580) category = "Fair";
        else if (calculatedScore >= 500) category = "Poor";
        else category = "Very Poor";

        // Set scores
        setScore(calculatedScore);
        setScoreCategory(category);
        setScoreFactors({
          transactionHistory: { 
            score: transactionScore, 
            percentage: Math.min(100, Math.floor((transactionScore / 300) * 100)) 
          },
          assetManagement: { 
            score: assetScore, 
            percentage: Math.min(100, Math.floor((assetScore / 255) * 100)) 
          },
          defiBehavior: { 
            score: defiScore, 
            percentage: Math.min(100, Math.floor((defiScore / 170) * 100)) 
          },
          networkEffect: { 
            score: networkScore, 
            percentage: Math.min(100, Math.floor((networkScore / 125) * 100)) 
          }
        });

        // Set positive factors based on score
        const positives = [];
        if (transactionScore > 200) 
          positives.push("Regular transaction frequency across multiple chains indicates active wallet use.");
        if (assetScore > 180) 
          positives.push("Strong asset diversification reduces risk exposure and demonstrates portfolio management skills.");
        if (defiScore > 120) 
          positives.push("Engagement with multiple DeFi protocols shows advanced ecosystem understanding.");
        if (networkScore > 90) 
          positives.push("Healthy network of contacts and interactions builds strong on-chain reputation.");
        setPositiveFactors(positives.length ? positives : ["No significant positive factors identified yet."]);

        // Set improvement areas
        const improvements = [];
        if (transactionScore < 200) 
          improvements.push("Increase regular transaction activity to establish a consistent on-chain presence.");
        if (assetScore < 180) 
          improvements.push("Diversify asset holdings across different token types to improve risk distribution.");
        if (defiScore < 120) 
          improvements.push("Explore sustainable DeFi opportunities like staking or liquidity provision to improve yield metrics.");
        if (networkScore < 90) 
          improvements.push("Expand your network by interacting with more reputable contracts and services.");
        setImprovementAreas(improvements.length ? improvements : ["Keep maintaining your current activity patterns."]);

        // Set AI recommendation
        if (calculatedScore >= 750) {
          setAiRecommendation("Your excellent crypto credit score qualifies you for premium lending rates and high-tier DeFi opportunities. Consider leveraging your score for advanced yield strategies.");
        } else if (calculatedScore >= 680) {
          setAiRecommendation("With your good score, focus on maintaining consistent activity and exploring more complex DeFi protocols to further improve your position.");
        } else if (calculatedScore >= 580) {
          setAiRecommendation("Your fair score indicates potential. Increase regular participation in key DeFi protocols and diversify your asset holdings to boost your credit position.");
        } else if (calculatedScore >= 500) {
          setAiRecommendation("To improve your score, establish a regular transaction pattern and reduce interaction with high-risk protocols. Consider staking on reputable platforms.");
        } else {
          setAiRecommendation("Focus on building basic on-chain history with consistent small transactions. Avoid high-risk activities and prioritize interactions with established protocols.");
        }

        setIsLoading(false);
      }, 2000); // Simulate 2-second API delay
    }
  }, [isConnected, address]);

  // Calculate stroke dashoffset for credit score circle
  const calculateDashOffset = () => {
    const circumference = 2 * Math.PI * 60;
    return circumference - (score / 850) * circumference;
  };

  // Determine score color based on category
  const getScoreColor = () => {
    if (scoreCategory === "Excellent") return "#00B894";
    if (scoreCategory === "Good") return "#00CEFF"; 
    if (scoreCategory === "Fair") return "#FE664F";
    if (scoreCategory === "Poor") return "#E17055";
    return "#D63031";
  };

  return (
    <div className="flex h-screen bg-[#171031] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171031] flex flex-col">
        <div className="p-4 text-lg font-bold text-[#01F3F4]">Coin Portfolio</div>
        <nav className="mt-4 space-y-2 px-4">
          <a
            href="/"
            className="block py-2 px-4 text-white rounded hover:bg-[#FE664F]"
          >
            Dashboard
          </a>
          <a href="/home" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Home
          </a>
          <a href="/credit-score" className="block py-2 px-4 bg-[#FE664F] text-white rounded">
            Credit Score
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Asset Allocation
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Discover
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Docs
          </a>
        </nav>

        <div className="mt-auto p-4">
          <ConnectButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-[#120D24] overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#01F3F4]">AI Credit Analysis</h1>
            <p className="text-gray-400 mt-1">On-chain reputation scoring powered by machine learning</p>
          </div>
          
          {!isConnected ? (
            <div className="mt-4 sm:mt-0 p-4 bg-[#171031] rounded-lg">
              <p className="text-gray-300 mb-2">Connect your wallet to view your credit score</p>
              <ConnectButton />
            </div>
          ) : isLoading ? (
            <div className="mt-4 sm:mt-0 bg-[#171031] p-4 rounded-lg flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-[#01F3F4] mr-3"></div>
              <span>Analyzing on-chain data...</span>
            </div>
          ) : (
            <div className="mt-4 sm:mt-0 bg-[#171031] p-3 px-5 rounded-lg flex items-center">
              <div className="mr-3 w-3 h-3 rounded-full bg-green-500"></div>
              <span>Analysis Complete</span>
            </div>
          )}
        </div>

        {!isConnected ? (
          <div className="bg-[#171031] p-8 rounded-lg text-center">
            <svg className="w-24 h-24 mx-auto mb-4 text-[#01F3F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
            <p className="text-gray-400 mb-6">Connect your wallet to view your personalized AI credit analysis</p>
            <ConnectButton />
          </div>
        ) : isLoading ? (
          <div className="bg-[#171031] p-8 rounded-lg flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#01F3F4] mb-4"></div>
            <h2 className="text-xl font-bold mb-2">Analyzing Your On-Chain Activity</h2>
            <p className="text-gray-400">Our AI is processing data from multiple blockchains to calculate your score</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Section - Chain Report */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-lg bg-[#171031]">
                <h2 className="text-lg font-bold text-[#01F3F4] mb-4">Chain Report</h2>
                <ul className="space-y-4">
                  {chainReport.map((chain, index) => (
                    <li key={index} className="p-3 rounded-lg bg-[#1A1339] hover:bg-[#231A45] transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            chain.riskLevel === "low" ? "bg-green-500" : 
                            chain.riskLevel === "medium" ? "bg-yellow-500" : "bg-red-500"
                          } mr-3`}></div>
                          <span>{chain.chain}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          chain.status === "Trusted" ? "bg-green-900 text-green-300" : 
                          chain.status === "Analyzing" ? "bg-yellow-900 text-yellow-300" : 
                          "bg-red-900 text-red-300"
                        }`}>
                          {chain.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-[#171031]">
                <h2 className="text-lg font-bold text-[#01F3F4] mb-4">AI Recommendation</h2>
                <div className="p-4 rounded-lg bg-[#1A1339] border-l-4 border-[#01F3F4]">
                  <p className="text-gray-300">{aiRecommendation}</p>
                </div>
              </div>
            </div>

            {/* Right Section - Credit Score */}
            <div className="lg:col-span-8 bg-[#171031] p-6 rounded-lg">
              {/* Credit Score and Breakdown */}
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Credit Score Chart */}
                <div className="relative w-40 h-40 mx-auto md:mx-0 mb-6 md:mb-0">
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
                      stroke={getScoreColor()}
                      strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={calculateDashOffset()}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl font-bold" style={{ color: getScoreColor() }}>{score}</h2>
                    <p className="text-sm text-gray-400">{scoreCategory}</p>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#01F3F4] mb-4">Score Breakdown</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">Transaction History</span>
                        <span className="text-white">{scoreFactors.transactionHistory.score}</span>
                      </div>
                      <div className="bg-[#292a3a] h-2 rounded-lg overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${scoreFactors.transactionHistory.percentage}%`, 
                            backgroundColor: getScoreColor() 
                          }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">Asset Management</span>
                        <span className="text-white">{scoreFactors.assetManagement.score}</span>
                      </div>
                      <div className="bg-[#292a3a] h-2 rounded-lg overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${scoreFactors.assetManagement.percentage}%`, 
                            backgroundColor: getScoreColor() 
                          }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">DeFi Behavior</span>
                        <span className="text-white">{scoreFactors.defiBehavior.score}</span>
                      </div>
                      <div className="bg-[#292a3a] h-2 rounded-lg overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${scoreFactors.defiBehavior.percentage}%`, 
                            backgroundColor: getScoreColor() 
                          }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">Network Effect</span>
                        <span className="text-white">{scoreFactors.networkEffect.score}</span>
                      </div>
                      <div className="bg-[#292a3a] h-2 rounded-lg overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${scoreFactors.networkEffect.percentage}%`, 
                            backgroundColor: getScoreColor() 
                          }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Positive Factors and Areas for Improvement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1A1339] p-4 rounded-lg border-t-2 border-green-500">
                  <h4 className="text-lg font-bold text-green-400 mb-3">Positive Factors</h4>
                  <ul className="space-y-3">
                    {positiveFactors.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                        <span className="text-gray-300">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1A1339] p-4 rounded-lg border-t-2 border-[#FE664F]">
                  <h4 className="text-lg font-bold text-[#FE664F] mb-3">Areas for Improvement</h4>
                  <ul className="space-y-3">
                    {improvementAreas.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#FE664F] mr-2 flex-shrink-0">⚠</span>
                        <span className="text-gray-300">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreditScore;