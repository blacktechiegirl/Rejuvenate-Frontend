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
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { BsFillFileMinusFill, BsFillPlusSquareFill } from "react-icons/bs";
import ProductCarousel from "../Landing copy/Carousel";

const Cart = () => {
  const navigate = useNavigate();
  const accountpath = new AccountService();
  const [cartItems, setCartItems] = useState([]);
  const [mytotal, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const Product = [
    {
      url1: Proto4,
      url2: Proto5,
      url3: Proto5,
      name: " Glucose Face Cleanser",
      price: 899,
    },
    {
      url1: Proto3,
      url2: Proto2,
      url3: Proto1,
      name: "Attono Face Toner",
      price: 400,
    },
    {
      url1: Proto2,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },

    {
      url1: Proto4,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
  ];


  const deleteProductFromCart = async (cartId) => {
    try {
      const response = await accountpath.deleteCartItem(cartId);
      if (response) {
        if (parseInt(response.status) === 200) {
          console.log(response.data.product);
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
              setTotal(response.data.totalCost)
              setTotalQuantity(response.data.totalQuantity)
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
            <div className="flex font-bigtech text-xl md:text-2xl justify-between my-4 mb-8">
              <button className="text-[16px] font-smalltech border border-[#d6a419] hover:bg-[#d6a419] hover:text-white hover:py-1 ease-in transition-all py-1 px-4">Proceed to Checkout</button>
              <p className=" ">Total : ${mytotal}</p></div>
            {cartItems.map((item) => {
              return (
                <div className="grid grid-cols-10 gap-6 lg:gap-x-16 my-10 ">
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

                      <div class="quantity flex mb-1   items-center">
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
                      <p className="font-smalltech">price: ${item.price}</p>
                      <div>
                        <p className="mt-2">Subtotal:</p>
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2  cursor-pointer">
                    {/* <button
                      onClick={() => deleteProductFromCart(item.cartId)}
                      className="hidden bg-black p-2 text-center font-smalltech text-white relative w-full hover:font-bold h-10"
                    >
                      {" "}
                      Remove Item
                    </button> */}
                    <div className="flex justify-end">
                    <AiOutlineDelete
                      onClick={() => deleteProductFromCart(item.cartId)}
                      className="text-[#6b6a6a] text-2xl"
                    />
                    </div>
                    <div className="flex justify-end">
                     <p className="text-xl text-black font-bigtech  mt-[110px]  text-center">
                        ${parseInt(item.price) * parseInt(item.quantity)}
                      </p>
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Skeleton />
        )}
         <div className="mb-8 border-y p-2  font-smalltech ">
          <div>
            <p className="font-bigtech">CART SUMMARY</p>
            <div className="flex justify-between my-3">
              <p>Total Items in Cart</p>
              <p>{totalQuantity}</p>
            </div>
           
            <div className="flex justify-between my-3">
              <p>Discount</p>
              <p>0%</p>
            </div>
            <div className="flex justify-between my-3 ">
              <p>Total Value of Cart</p>
              <p className="font-bigtech text-2xl">${mytotal}</p>
            </div>
            <div className="flex justify-end mt-8 mb-4">
              
              <button className="bg-[#d6a419] text-white px-5 py-2 text-center h-10 text-[16px]">Proceed to Checkout</button> 
            </div>
          </div>
        </div>
        <div>
        <p className="  mx-auto text-xl  pb-1 ">RELATED PRODUCTS</p>

        <div class="mt-10 flex overflow-x-auto scrollbar-hide md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto duration-700 ease-in ">
          {Product.map((item) => {
            return (
              <div className="">
                <ProductCarousel
                  image1={item.url1}
                  image2={item.url2}
                  image3={item.url3}
                />
                <div className="my-3">
                  <p className="font-smalltech text-lg">{item.name}</p>
                  <p className="font-bigltech text-xl">${item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
