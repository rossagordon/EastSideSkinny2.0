import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 m-w-[1240px] mx-auto px-4 bg-[#dcdcdd]">
      <h1 className="w-full text-3xl font-bold">Skinny V</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden"> 
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r bg-[#dcdcdd] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">Skinny V</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
