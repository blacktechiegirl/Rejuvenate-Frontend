import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Proto1 from "../../assets/photo2.avif";
import Proto4 from "../../assets/photo4.avif";
import Proto2 from "../../assets/acwell2.jpg";
import Proto6 from "../../assets/acwell2.jpg";
import Proto7 from "../../assets/acwell1.jpg";
import Proto8 from "../../assets/cerave1.webp";
import Proto3 from "../../assets/photo3.avif";
import Proto5 from "../../assets/photo5.avif";
import { TfiHeart } from "react-icons/tfi";
import { BsSuitHeartFill } from "react-icons/bs";
import ProductCarousel from "../Landing copy/Carousel";
import AccountService from "../../axios/AuthService";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../Footer/footer";
import Skeleton from "../UI/skeleton/circularprogress";

const ProductDetails = () => {
  const [mywish, setMyWish] = useState(false);
  const [productDetail, setProductDetail] = useState()
  const {id} = useParams()

  const accountpath = new AccountService();
  const Product = [
    {
      url1: Proto6,
      url2: Proto7,
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

  useEffect(() => {
    async function fetchProducts (){
      try {
        const response = await accountpath.getProductById(id);
        if (response) {
          if (parseInt(response.status) === 200) {
            setProductDetail(response.data.ProductDetails)

          }
        }
      } catch (err) {
        // ToastError(err);
      }
    }
   
  fetchProducts()

  }, [])

  return (
    <div>
      <Navbar />
      {productDetail? 
      <div>
      <div className="grid lg:grid-cols-2 w-full  ">
        <div className=" justify-center items-center bg-[#f6f5f3] pt-[100px] ">
          <img
            src={productDetail.imageURL}
            alt="avocado face oil"
            className="h-[500px] 2xl:h-[500px]  mx-auto mb-12 object-cover object-center cursor-pointer "
          />
        </div>
        <div className="w-[90%] sm:w-[80%] mx-auto bg-[#fff] flex flex-col justify-center  pt-[50px]">
          <div className="flex justify-end">
            {mywish ? (
              <BsSuitHeartFill
                className="text-red-500 md:text-2xl mb-[50px]"
                onClick={() => setMyWish(!mywish)}
              />
            ) : (
              <TfiHeart
                className=" md:text-2xl mb-[50px]"
                onClick={() => setMyWish(!mywish)}
              />
            )}
          </div>
          <p className=" text-3xl text-black font-bigtech mb-8">
            {productDetail.productName}
          </p>

          <p className="font-smalltech text-xl sm:w-[90%]">
            {productDetail.description}
            {/* Acwell Licorice pH Balancing Cleansing Toner has a pH level of 5.5
            to effectively balance your skin.Deep clean and brighten your skin
            with this specially-formulated toner that’s perfect for all skin
            types! */}
          </p>
          <div className="">
            <p className=" text-3xl text-black font-bigtech my-3">${productDetail.price}</p>
            <div class="quantity flex w-[20%] justify-between items-center">
              <p className="font-smalltech text-xl">Quantity:</p>
              {/* <input type="button" value="-" class="text-3xl font-lvreg" /> */}
              <input
                type="text"
                value="1"
                className="border w-10  text-center ml-2"
              />
              {/* <input type="button" value="+" class="text-3xl font-lvreg" /> */}
            </div>
          </div>

          <button
            type="submit"
            className="border border-[#d6a41] p-2 text-center font-smalltech mt-8 relative w-full sm:w-[90%] flex justify-center hover:font-bold hover:border-none hover:bg-[#f6f5f3]"
          >
            <AiOutlineShoppingCart className="text-black  mt-[6px] mr-2" />
            Add To Cart{" "}
          </button>

          <button
            type="submit"
            className="bg-black p-2 text-center font-smalltech text-white mt-5 relative w-full sm:w-[90%] hover:font-bold"
          >
            Buy Now{" "}
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-16">
        <div className="my-10">
        

          <div className="border-y py-5">
          <p className="   pb-1 ">DESCRIPTION</p>
            <p className="font-smalltech text-xl">
              Deep clean and brighten your skin with this specially-formulated
              toner that’s perfect for all skin types!<br></br>
              Acwell Licorice pH Balancing Cleansing Toner has a pH level of 5.5
              to effectively balance your skin. Peony extract and a high
              concentration of licorice water – both natural brighteners – seep
              into skin to add an extra dose of luminosity to your complexion.
              Green tea extract also helps calm and reduce pigmentation,
              including acne scars and dark spots.
            </p>
          </div>
        </div>

        <div className="my-10">
          <div className="border-y py-5">
          <p className="  ">ADDITIONAL INFORMATION</p>

            <ul className="font-smalltech text-lg leading-8">
            {productDetail.benefits}
            </ul>
          </div>
        </div>

        <div className="my-10">

          <div className="border-y py-5">
          <p className=" pb-1 ">REVIEWS</p>

            
<div class="flex items-center mb-3 font-smalltech">
    <svg aria-hidden="true" class="w-5 h-5 text-stone-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-stone-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-stone-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-stone-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
</div>
<p class="text-sm font-medium text-gray-500 dark:text-gray-400 font-smalltech">1,745 global ratings</p>
<div class="flex items-center mt-4">
    <span class="text-sm ">5 star</span>
    <div class="w-3/4 md:w-2/4 h-2 mx-4 bg-[#f6f5f3] rounded dark:bg-gray-400">
        <div class="h-2 bg-stone-800 rounded w-[70%]" ></div>
    </div>
    <span class="text-sm ">70%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm ">4 star</span>
    <div class="w-3/4 md:w-2/4 h-2 mx-4 bg-[#f6f5f3] rounded dark:bg-gray-400">
        <div class="h-2 bg-stone-800 rounded w-[50%]" ></div>
    </div>
    <span class="text-sm ">50%</span>
</div>

<div class="flex items-center mt-4">
    <span class="text-sm ">3 star</span>
    <div class="w-3/4 md:w-2/4 h-2 mx-4 bg-[#f6f5f3] rounded dark:bg-gray-400">
        <div class="h-2 bg-stone-800 rounded w-[40%]" ></div>
    </div>
    <span class="text-sm ">40%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm ">2 star</span>
    <div class="w-3/4 md:w-2/4 h-2 mx-4 bg-[#f6f5f3] rounded dark:bg-gray-400">
        <div class="h-2 bg-stone-800 rounded w-[20%]" ></div>
    </div>
    <span class="text-sm ">20%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm ">1 star</span>
    <div class="w-3/4 md:w-2/4 h-2 mx-4 bg-[#f6f5f3] rounded dark:bg-gray-400">
        <div class="h-2 bg-stone-800 rounded w-[10%]" ></div>
    </div>
    <span class="text-sm ">10%</span>
</div>


          </div>
        </div>
      </div>
      <div>
        <p className=" w-[90%] mx-auto text-xl  pb-1 ">RELATED PRODUCTS</p>

        <div class="mt-10 flex overflow-x-auto scrollbar-hide md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90%] 2xl:max-w-[80%] mx-auto duration-700 ease-in ">
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
      </div>:
      <Skeleton/>}
      <Footer />
    </div>
  );
};

export default ProductDetails;
