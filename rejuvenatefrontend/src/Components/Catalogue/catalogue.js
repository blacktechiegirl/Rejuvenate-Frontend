import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import { TfiHeart } from "react-icons/tfi";
import { BsSuitHeartFill } from "react-icons/bs";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import AccountService from "../../axios/AuthService";
import Skeleton from "../UI/skeleton/circularprogress";
import {CircularProgress} from "../UI/CircularProgress/circularprogress";

const Catalogue = () => {
  const accountpath = new AccountService();
  const navigate = useNavigate();
  const [mywish, setMyWish] = useState(true);
  const [allProducts, setAllProducts] = useState();
  const [buttonLoad, setButtonLoad] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);


  const isUserLoggedIn =async (id)=> {
    const token = localStorage.getItem('userId')
    if (token){
      const userData = {
        userId: token,
        productId: id,
        quantity: 1

      }
      try {
        const response = await accountpath.createCartItem(userData);
        if (response) {
          if (parseInt(response.status) === 200) {
            alert('Successfully saved item to cart')
          }
        }
      } catch (err) {
         alert(err);
         console.log(err)
      }
      
    }else{
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await accountpath.getAllProducts();
        if (response) {
          if (parseInt(response.status) === 200) {
            setAllProducts(response.data.products);

          }
        }
      } catch (err) {
        // ToastError(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="mt-24 text-3xl md:text-4xl font-lvreg border-y p-2 text-center">
        Product Catalogue
      </h1>
      {allProducts ? (
        <div class="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90%] 2xl:max-w-[80%] mx-auto duration-700 ease-in">
          {allProducts.map((item, index) => {
            return (
              <div className="">
                <img
                  onClick={() => navigate(`/details/${item.productId}`)}
                  src={item.imageURL}
                  className=" block w-full  ease-linear  min-w-[150px] h-[200px] md:h-[400px]   object-cover object-top"
                  alt="..."
                />{" "}
                <div className="my-3">
                  <p className="font-smalltech text-lg truncate">{item.productName}</p>
                  <div className="flex justify-between">
                    <p className="text-xl">${item.price}</p>
                    {mywish ? (
                      <BsSuitHeartFill
                        className="text-red-500 md:text-xl"
                        onClick={() => setMyWish(!mywish)}
                      />
                    ) : (
                      <TfiHeart
                        className=" md:text-xl"
                        onClick={() => setMyWish(!mywish)}
                      />
                    )}
                  </div>

                  <div className=" font-lvreg flex lg:justify-center">
                    {buttonLoad && index === activeIndex ? (
                      <button
                        onClick={() => {
                          setActiveIndex(index);
                          setButtonLoad(true);
                        }}
                        type="submit"
                        className="border border-[#d6a419] text-[#d6a419] py-4 text-center mt-2 relative w-full"
                      >
                        <CircularProgress />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveIndex(index);
                          setButtonLoad(true);
                          isUserLoggedIn(item.productId)
                        }}
                        className="mt-2 w-full  border border-[#d6a419] p-1 hover:bg-[#d6a419] hover:text-white duration-300 ease-out px-2"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Skeleton />
      )}
      <Footer />
    </div>
  );
};

export default Catalogue;
