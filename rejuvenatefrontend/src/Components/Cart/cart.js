import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Proto1 from "../../assets/photo1.jpg";
import Proto2 from "../../assets/photo2.avif";
import Proto3 from "../../assets/photo3.avif";
import Proto4 from "../../assets/photo4.avif";
import Proto5 from "../../assets/photo5.avif";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('usertoken')
    if(!token){
      navigate('/login')
    }
  }, [])


  const CartItems = [
    {
      url: Proto1,
      name: 'Face Cleanser'
    },
    {
      url: Proto2,
      name: 'Face Cleanser'
    },
    {
      url: Proto3,
      name: 'Face Cleanser'
    },
    {
      url: Proto4,
      name: 'Face Cleanser'
    },
    {
      url: Proto5,
      name: 'Face Cleanser'
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className=" max-w-[90%] 2xl:max-w-[80%] mx-auto mt-28">
      <h1 className="mb-8 border-y p-2 text-3xl font-smalltech text-center">
        My Shopping Cart
      </h1>
      <div className="w-full">
        {CartItems.map((item) => {
          return (
            <div className="grid grid-cols-10 gap-4 lg:gap-x-16 my-5 font-smalltech">
              <div className="col-span-3 sm:col-span-3">
                <img src={item.url} alt="item"  className=" h-[100px] w-[100px] md:h-[300px] md:w-full object-cover  " />
              </div>
              <div className="col-span-5 text-xl ">
                <p className="sm:text-3xl font-smalltech my-2">{item.name}</p>
                <p className="text-sm sm:text-xl">
                  MAJESTIC PURE Arnica Sore Muscle Massage Oil for Body.....
                </p>
                <p className="text-sm sm:text-xl">Quantity: 200</p>
              </div>
              <div className="col-span-2 flex justify-end">
                <p>Price: $120.000</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
