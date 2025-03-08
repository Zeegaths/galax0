"use client";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            {[
              { id: "about", label: "About" },
              { id: "feature", label: "Feature" },
              { id: "pricing", label: "Pricing" },
              { id: "testimoni", label: "Testimonial" },
            ].map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy
                smooth
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                  activeLink === item.id
                    ? "text-customOrange animation-active"
                    : "text-black-500 hover:text-customOrange"
                }`}
              >
                {item.label}
              </LinkScroll>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center relative">
            <ConnectButton />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        {/* Keep your existing mobile navigation code here */}
      </nav>
    </>
  );
};

export default Header;