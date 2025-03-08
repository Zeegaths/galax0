import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic import with client-side rendering only
const Home = dynamic(() => import("../components/comps/Home"), {
  ssr: false
});

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;