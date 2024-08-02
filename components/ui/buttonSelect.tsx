"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ name, description, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      onClick={handleClick}
      className="relative bg-highlight p-6 rounded-lg text-black m-2 transition-transform duration-300 transform hover:scale-105 hover:bg-primary hover:text-white cursor-pointer w-full max-w-xs text-left overflow-hidden shadow-lg hover:shadow-xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-50"></div>

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-cover bg-no-repeat mix-blend-overlay opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl mb-2">{name}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default Button;
