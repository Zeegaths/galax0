import React, { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  addClass?: string;
  onClick?: () => void; // Add optional onClick prop
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ 
  children, 
  addClass = "", 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 lg:py-4 px-12 lg:px-16 text-[#171031] font-semibold rounded-lg bg-customOrange hover:shadow-customOrange transition-all outline-none ${addClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;