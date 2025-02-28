"use client";
import React, { useRef } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  image: string;
  city: string;
  country: string;
  rating: string;
  testimoni: string;
}

const Testimoni = ({
  listTestimoni = [
    {
      name: "Sarah Johnson",
      image: "/assets/people-3.png",
      city: "New York",
      country: "USA",
      rating: "4.7",
      testimoni: "Galax0 has transformed the way I manage my crypto portfolio. The zkCreditScore feature is a game-changer for secure lending.",
    },
    {
      name: "David Kim",
      image: "/assets/people-2.png",
      city: "Singapore",
      country: "Singapore",
      rating: "4.9",
      testimoni: "I can track my NFT collections and DeFi positions seamlessly. Galax0 is perfect for advanced analytics.",
    },
    {
      name: "Emma Brown",
      image: "/assets/people-1.png",
      city: "Berlin",
      country: "Germany",
      rating: "4.8",
      testimoni: "The integration with multiple wallets and private data encryption makes Galax0 my top choice for asset tracking.",
    },
  ],
}: {
  listTestimoni?: Testimonial[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjusted for responsiveness
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjusted for responsiveness
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {listTestimoni.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 sm:w-80 bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-6 scroll-snap-align-start"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-base sm:text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.city}, {testimonial.country}
                </p>
              </div>
              <div className="text-yellow-500 text-sm sm:text-base">
                {testimonial.rating} ★
              </div>
            </div>
            <p className="italic text-gray-600 text-sm sm:text-base">
              "{testimonial.testimoni}"
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on small screens */}
      <button
        onClick={scrollLeft}
        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={scrollRight}
        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Testimoni;
