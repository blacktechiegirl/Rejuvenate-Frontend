import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full  py-4 border-[#efebe8] font-smalltech bg-white">
      <div className="max-w-[90%] mx-auto flex justify-between">
        <div className="flex justify-between ">
          <div className="flex items-center cursor-pointer">
            <VscMenu className="mr-2 " />
            <h1 className="md: hidden lg:block">Menu</h1>
          </div>
          <div className="flex ml-5 items-center cursor-pointer">
            <CiSearch className="mr-2" />
            <h1 className="md: hidden lg:block">Search</h1>
          </div>
        </div>

        <p className="font-bigtech text-3xl cursor-pointer">
          Rejuvenate
        </p>
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer">
            <h1>Wishlist</h1>
          </div>
          <div className="flex ml-5 items-center cursor-pointer">
            <AiOutlineShoppingCart className="mr-1" />
            <h1 className="md: hidden lg:block">Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
