// components/Layout/Layout.tsx
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TradingMatrixBackground from "../TradingMatrixBackground";
import WagmiClientProvider from "../WagmiClientProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <WagmiClientProvider>
      <TradingMatrixBackground />
      <div className="relative z-10">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </WagmiClientProvider>
  );
};

export default Layout;