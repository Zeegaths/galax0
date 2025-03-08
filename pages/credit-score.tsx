// pages/credit-score.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic import with client-side rendering only
const Home = dynamic(() => import("../components/comps/CreditScore"), {
  ssr: false
});

const CreditScorePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Credit Score | Crypto Dashboard</title>
      </Head>
      <Home />
    </>
  );
};

export default CreditScorePage;