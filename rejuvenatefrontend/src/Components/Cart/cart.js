import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Proto1 from "../../assets/photo1.jpg";
import Proto2 from "../../assets/photo2.avif";
import Proto3 from "../../assets/photo3.avif";
import Proto4 from "../../assets/photo4.avif";
import Proto5 from "../../assets/photo5.avif";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import AccountService from "../../axios/AuthService";
import Skeleton from "../UI/skeleton/circularprogress";
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  const navigate = useNavigate();
  const accountpath = new AccountService();
  const [cartItems, setCartItems] = useState([]);

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
              setCartItems(response.data.cartitems);
            }
          }
        } catch (err) {
          alert(err);
        }
      }

      fetchProducts();
    }
  }, []);

  const CartItems = [
    {
      url: Proto1,
      name: "Face Cleanser",
    },
    {
      url: Proto2,
      name: "Face Cleanser",
    },
    {
      url: Proto3,
      name: "Face Cleanser",
    },
    {
      url: Proto4,
      name: "Face Cleanser",
    },
    {
      url: Proto5,
      name: "Face Cleanser",
    },
  ];
  console.log(cartItems);
  return (
    <div className="">
      <Navbar />
      <div className=" max-w-[90%] 2xl:max-w-[80%] mx-auto mt-28">
        <h1 className="mb-8 border-y p-2 text-3xl font-smalltech text-center">
          My Shopping Cart
        </h1>
        {cartItems ? (
          <div className="w-full">
            {cartItems.map((item) => {
              return (
                <div className="grid grid-cols-10 gap-4 lg:gap-x-16 my-5 ">
                  <div className="col-span-3 sm:col-span-3">
                    <img
                      src={item.imageURL}
                      alt="item"
                      className=" h-[150px] w-[100px] md:h-[200px] md:w-full object-cover  "
                    />
                  </div>
                  <div className="col-span-6 text-xl ">
                    <p className="sm:text-3xl font-smalltech my-2">
                      {item.name}
                    </p>
                    <p className="text-md sm:text-2xl font-smalltech font-bold">
                      {item.productName}
                    </p>
                    
                    <div className="">
                    
                      <div className="flex my-3 md:max-w-[600px] flex-wrap truncate">
                      <p className=" mr-2 font-smalltech text-sm uppercase font-bold ">Category:</p>
                      {item.category.map((cat)=> {
                        return(
                          <p className=" uppercase font-smalltech text-sm mr-2">{cat}, </p>

                        )
                      })}
                      </div>
                      
                      <div class="quantity flex w-[20%] justify-between items-center">
                        <p className="font-smalltech text-xl">Quantity:</p>
                        {/* <input type="button" value="-" class="text-3xl font-lvreg" /> */}
                        <input
                          type="text"
                          value={item.quantity}
                          className="border w-8 text-sm  text-center ml-2"
                        />
                        {/* <input type="button" value="+" class="text-3xl font-lvreg" /> */}
                      </div>
                      <p className="text-xl sm:text-3xl text-black font-bigtech my-3">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="hidden md:block bg-black p-2 text-center font-smalltech text-white relative w-full hover:font-bold h-10">
                      {" "}
                      Remove Item
                    </button>
                    <AiFillDelete className="text-black md:hidden text-2xl"/>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
