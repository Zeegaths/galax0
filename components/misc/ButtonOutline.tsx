import React, { ReactNode } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
  onClick?: () => void; // Add optional onClick prop
  addClass?: string; // Optional additional class for flexibility
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ 
  children, 
  onClick,
  addClass = "" 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`font-medium tracking-wide py-2 px-5 sm:px-8 border border-customOrange text-customOrange bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-customOrange hover:text-[#171031] transition-all hover:shadow-orange ${addClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;