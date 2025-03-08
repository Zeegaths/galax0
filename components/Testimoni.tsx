"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Testimoni = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Viezh Robert",
      image: "/assets/testimony-1.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "The score calculation is very accurate and transparent. I can see how my activities impact my score!",
    },
    {
      name: "Yessica Christy",
      image: "/assets/testimony-2.png",
      city: "Shanxi",
      country: "China",
      rating: "4.5",
      testimoni:
        "I was skeptical at first, but the DeFi opportunities I&apos;ve unlocked with my score have been game-changing.",
    },
    {
      name: "Kim Young Jou",
      image: "/assets/people-2.png",
      city: "Seoul",
      country: "South Korea",
      rating: "4.5",
      testimoni:
      "This is unbelievably good. I've improved my score by 150 points in just 3 months by following the recommendations!",
    },
    {
      name: "Alex Morgan",
      image: "/assets/people-2.png",
      city: "New York",
      country: "United States",
      rating: "4.5",
      testimoni:
        "The multi-chain analysis gives a complete picture of my crypto behavior. Very comprehensive!",
    },
    {
      name: "Sophia Chen",
      image: "/assets/people-2.png",
      city: "Singapore",
      country: "Singapore",
      rating: "4.5",
      testimoni:
        "I managed to get preferential rates on a DeFi loan because of my excellent credit score. Worth every penny!",
    },
  ];

  return (
    <>
      <Slider
        ref={setSliderRef}
        {...settings}
        arrows={false}
        className="flex items-stretch justify-items-stretch"
      >
        {testimonials.map((testimoni, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={testimoni.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {testimoni.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {testimoni.city}, {testimoni.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{testimoni.rating}</p>
                  <span className="flex ml-4">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">&quot;{testimoni.testimoni}&quot;</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;