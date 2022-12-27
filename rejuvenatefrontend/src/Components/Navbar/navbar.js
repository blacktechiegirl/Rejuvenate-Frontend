import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import { VscMenu, VscWand } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import AccountService from "../../axios/AuthService";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const accountpath = new AccountService();


  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (!token) {
      navigate("/login");
    } else {
      async function fetchProducts() {
        try {
          const response = await accountpath.getAllCartItems();
          console.log(response);
          if (response) {
            if (parseInt(response.status) === 200) {        
              localStorage.setItem("totalQuantity",response.data.totalQuantity)
            }
          }
        } catch (err) {
          alert(err);
        }
      }

      fetchProducts();
    }
  }, []);

  return (
    <div className="fixed top-0 w-full border-b py-4 border-[#efebe8] font-smalltech bg-white z-[999] ">
      <div
        className={
          showMenu
            ? "  translate-x-0 duration-500 ease-out"
            : "  -translate-x-52"
        }
      >
        {showMenu ? (
          <div
            className={`absolute h-[100vh] top-[52px]  w-full md:w-[400px] bg-white font-smalltech  `}
          >
            <p
              className="font-bigtech absolute right-5 top-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
             <AiOutlineClose />
            </p>
            <ul className="p-10">
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/cleansers")}}
              >
                Cleansers
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/moisturizers")}}
              >
                Moisturizers
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/sunscreen")}}
              >
                Sunscreen
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/eye")}}
              >
                Eye Care
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/lip")}}
              >
                Lip Care
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/body")}}
              >
                Bath & Body
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/exfoliators")}}
              >
                Exfoliators
              </li>
              <hr></hr>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/dermatologist")}}
              >
                Contact a Dermatologist
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/dermatologist")}}
              >
                Schedule a Facial
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/face cleansers")}}
              >
                Contact Us
              </li>
              <li
                className="py-4 px-5 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/about us")}}
              >
                About Us
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className=" max-w-[90%] 2xl:max-w-[80%] mx-auto grid grid-cols-10">
        <div className="flex  col-span-3 ">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <VscMenu className="mr-2 " />
            <h1 className="md: hidden lg:block">Menu</h1>
          </div>
          <div className="flex ml-5 items-center cursor-pointer">
            <CiSearch className="mr-2" />
            <input
              className="focus:outline-none hidden lg:block border border-gray p-1 px-4 rounded-[5%] text-md w-[200px]"
              placeholder="Search Product"
            />
          </div>
        </div>

        <p
          className="font-bigtech text-3xl cursor-pointer col-span-4 text-center"
          onClick={() => navigate("/")}
        >
          Rejuvenate
        </p>
        <div className="flex justify-end  col-span-3">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/wishlist")}
          >
            <VscWand className="mr-1" />
            <h1 className="md: hidden lg:block">Wishlist</h1>
          </div>
          <div
            className="flex ml-5  items-center cursor-pointer relative"
            onClick={() => navigate("/cart")}
          >
            <div className="bg-[black]  rounded-full absolute right-[-5px] lg:right-6 top-0 text-center text-white text-[9px] font-bold w-4 h-4">{localStorage.getItem('totalQuantity')}</div>
            <AiOutlineShoppingCart className="mr-2" />
            <h1 className="md: hidden lg:block">   Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
