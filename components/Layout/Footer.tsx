import React from "react";
import Image from "next/image";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        {/* Left Section */}
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
        <Image
            src={LogoVPN}
            alt="Galax0 Logo"
            className="h-8 w-auto mb-6"
          />
          <p className="mb-4">
            <strong className="font-medium">Galax0</strong> is your ultimate tool for managing crypto assets, NFTs, and DeFi portfolios, while ensuring privacy with zkCreditScore technology.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image
            src={Facebook}
            alt="Galax0 Logo"
            className="h-8 w-auto mb-6"
          />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image
            src={Twitter}
            alt="Galax0 Logo"
            className="h-8 w-auto mb-6"
          />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image
            src={Instagram}
            alt="Galax0 Logo"
            className="h-8 w-auto mb-6"
          />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Galax0
          </p>
        </div>

        {/* Product Section */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Dashboard
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Analytics
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Portfolio
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Asset Tracking
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              zkCreditScore
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Blog
            </li>
          </ul>
        </div>

        {/* Engage Section */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Why Galax0?
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Tutorials
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              About Us
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Privacy Policy
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Earn Money Section */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Affiliates
            </li>
            <li className="my-2 hover:text-customOrange cursor-pointer transition-all">
              Become a Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
