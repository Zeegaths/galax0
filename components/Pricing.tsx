'use client';
import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
import Maps from "../public/assets/porrt.png";
import Netflix from "../public/assets/binan.png";
import Reddit from "../public/assets/okx.png";
import Discord from "../public/assets/coinbase2.png";
import Spotify from "../public/assets/rabby2.png";
import Amazon from "../public/assets/meta.png";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

interface PricingProps {
  plans?: {
    name: string;
    price: string | number;
    features: string[];
    image: string;
    alt: string;
  }[];
}

const Pricing: React.FC<PricingProps> = ({
  plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Basic portfolio dashboard",
        "Track up to 3 assets",
        "Limited analytics",
        "Access to zkCreditScore (Basic)",
      ],
      image: "/assets/Free.png",
      alt: "Free Plan",
    },
    {
      name: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Comprehensive portfolio dashboard",
        "Track up to 50 assets",
        "Advanced analytics",
        "Access to zkCreditScore (Standard)",
        "DeFi positions tracking",
      ],
      image: "/assets/Standard.png",
      alt: "Standard Plan",
    },
    {
      name: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited portfolio tracking",
        "Full analytics suite",
        "Access to zkCreditScore (Premium)",
        "Integration with DeFi protocols and NFT marketplaces",
        "Priority support",
      ],
      image: "/assets/Premium.png",
      alt: "Premium Plan",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose the Plan that Fits Your Goals
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              From tracking assets to advanced zkCreditScore analysis, pick a plan that empowers your portfolio.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {plans.map((plan, index) => (
              <ScrollAnimationWrapper className="flex justify-center" key={index}>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image src={plan.image} width={145} height={165} alt={plan.alt} />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    {plan.name}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li className="relative check custom-list my-2" key={featureIndex}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4">{plan.price}</p>
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* Global Network Section */}
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Advanced Tracking Across Your Portfolio
            </motion.h3>
            <motion.p
              className="leading-normal mx-auto my-0 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Galax0's global integrations bring your entire portfolio to one dashboard for seamless management.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-0" variants={scrollAnimation}>
              <Image
                src={Maps}
                alt="Global Network Illustration"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              <Image src={Amazon} alt="Amazon Logo" className="h-14 w-auto mt-4 lg:mt-2" />
              <Image src={Netflix} alt="Netflix Logo" className="h-14 w-auto mt-2 lg:mt-0" />
              <Image src={Reddit} alt="Reddit Logo" className="h-12 w-auto mt-2 lg:mt-0" />
              <Image src={Discord} alt="Discord Logo" className="h-14 w-auto mt-2 lg:mt-0" />
              <Image src={Spotify} alt="Spotify Logo" className="h-12 w-auto mt-2 lg:mt-0" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Empowering Thousands of Portfolio Managers
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Here's what our users say about Galax0's powerful tools and analytics for asset tracking and zkCreditScore.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
