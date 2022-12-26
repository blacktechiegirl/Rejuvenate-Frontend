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
import { AiFillDelete, AiFillMinusSquare } from "react-icons/ai";
import { BsFillFileMinusFill, BsFillPlusSquareFill } from "react-icons/bs";

const Cart = () => {
  const navigate = useNavigate();
  const accountpath = new AccountService();
  const [cartItems, setCartItems] = useState([]);

  const deleteProductFromCart = async (cartId) => {
    try {
      const response = await accountpath.deleteCartItem(cartId);
      if (response) {
        if (parseInt(response.status) === 200) {
          console.log(response.data.message);
          alert("Successfully removed item from cart");
        }
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const changeQuantity = async (cartId, newQuantity) => {
    
    const userData = {
      cartId,
      newQuantity,
    };
    console.log(userData)
    try {
      const response = await accountpath.updateCartItem(userData);
      if (response) {
        if (parseInt(response.status) === 200) {
          console.log(response.data.message);
          alert(response.data.message);
        }
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };



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
            <div className="flex font-bigtech text-3xl justify-between my-4">
              <p>Total:</p>
              <p className="text-2xl border px-5 py-2">$2089</p></div>
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
                  <div className="col-span-6 md:col-span-5 text-xl ">
                    <p className="text-md sm:text-2xl font-smalltech font-bold truncate">
                      {item.productName}
                    </p>

                    <div className="">
                      <div className="flex my-3 md:max-w-[500px] truncate">
                        <p className=" mr-2 font-smalltech text-sm uppercase font-bold ">
                          Category:
                        </p>
                        {item.category.map((cat) => {
                          return (
                            <p className=" uppercase font-smalltech text-sm mr-2">
                              {cat},{" "}
                            </p>
                          );
                        })}
                      </div>

                      <div class="quantity flex   items-center">
                        <p className="font-smalltech text-xl mr-4">Quantity:</p>
                        {/* <input type="button" value="-" class="text-3xl font-lvreg" /> */}
                        <div className="flex gap-6">
                          <BsFillPlusSquareFill
                            onClick={() =>
                              changeQuantity(item.cartId, item.quantity + 1)
                            }
                            className="text-[gray]"
                          />
                          <input
                            type="text"
                            value={item.quantity}
                            className="border w-8 text-sm  text-center"
                          />
                          <BsFillFileMinusFill
                            onClick={() =>
                              changeQuantity(item.cartId, item.quantity - 1)
                            }
                            className="text-[gray]"
                          />
                        </div>
                        {/* <input type="button" value="+" class="text-3xl font-lvreg" /> */}
                      </div>
                      <p className="text-xl sm:text-3xl text-black font-bigtech my-3">
                        ${parseInt(item.price) * parseInt(item.quantity)}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-end cursor-pointer">
                    <button
                      onClick={() => deleteProductFromCart(item.cartId)}
                      className="hidden md:block bg-black p-2 text-center font-smalltech text-white relative w-full hover:font-bold h-10"
                    >
                      {" "}
                      Remove Item
                    </button>
                    <AiFillDelete
                      onClick={() => deleteProductFromCart(item.cartId)}
                      className="text-black md:hidden text-2xl"
                    />
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
