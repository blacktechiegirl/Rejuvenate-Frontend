import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate()

  return (
    <div className=" absolute h-[100vh] top-[69px]  w-full md:w-[400px] bg-white font-smalltech duration-500 ease-in ">
      <p className="font-bigtech absolute right-5 top-2 cursor-pointer">X</p>
      <ul className="p-10">
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/face cleansers')}>ME</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/moisturizers')}>Moisturizers</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/sunscreen')}>Sunscreen</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/eye care')}>Eye Care</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/lip care')}>Lip Care</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/Bath & Body')}>Bath & Body</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/face exfoliators')}>Exfoliators</li>
        <hr></hr>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/dermatologist')}>Contact a Dermatologist</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/dermatologist')}>Schedule a Facial</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/category/face cleansers')}>Contact Us</li>
        <li className="py-4 px-5 hover:bg-slate-100 cursor-pointer" onClick={() => navigate('/about us')}>About Us</li>
      </ul>
    </div>
  );
};

export default Menu;
