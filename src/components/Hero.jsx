import React from "react";
import Apartments from "../assets/apartments.png";

const Hero = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center m-8 justify-center">Skinny V</h1>
      <img src={Apartments} className='w-full h-full object-cover' alt="Apartments" />
      
      <div className="max-w-[800px] w-full h-screen text-center justify-center mx-auto flex mt-5"></div>
    </div>
  );
};

export default Hero;
