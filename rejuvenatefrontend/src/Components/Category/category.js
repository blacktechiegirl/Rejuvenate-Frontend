import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Proto6 from "../../assets/acwell2.jpg";
import Proto7 from "../../assets/acwell1.jpg";
import Proto8 from "../../assets/cerave1.webp";
import Proto1 from "../../assets/photo1.jpg";
import Proto2 from "../../assets/photo2.avif";
import Proto3 from "../../assets/photo3.avif";
import Proto4 from "../../assets/photo4.avif";
import Proto5 from "../../assets/photo5.avif";
import ProductCarousel from "../Landing copy/Carousel";
import { useParams } from "react-router-dom";
import Footer from "../Footer/footer";
import AccountService from "../../axios/AuthService";
import Skeleton from "../UI/skeleton/circularprogress";
import { TfiHeart } from "react-icons/tfi";
import { BsSuitHeartFill } from "react-icons/bs";
import { CircularProgress } from "../UI/CircularProgress/circularprogress";
import NoContent from "../Error/NoContent";

const Category = () => {
  const { id } = useParams();
  const accountpath = new AccountService();
  const [allProducts, setAllProducts] = useState();
  const [mywish, setMyWish] = useState(true);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

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
      url1: Proto4,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },

    {
      url1: Proto8,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
    {
      url1: Proto7,
      url2: Proto2,
      url3: Proto1,
      name: "Attono Face Toner",
      price: 400,
    },
    {
      url1: Proto6,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },

    {
      url1: Proto8,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
  ];

  useEffect(() => {
    console.log(id)
    async function fetchProducts() {
      try {
        const response = await accountpath.getProductByCategory(id);
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
  }, [id]);
  console.log(allProducts);
  return (
    <div>
      <Navbar />
      <h1 className="mt-24 text-xl md:text-2xl font-lvreg border-y p-2 text-center">
        {id.toUpperCase()}
      </h1>
      {allProducts ? (
        allProducts.length === 0 ? (
          <NoContent />
        ) : (
          <div class="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90%] 2xl:max-w-[80%] mx-auto duration-700 ease-in">
            {allProducts.map((item, index) => {
              return (
                <div className="">
                  <ProductCarousel
                    image1={item.imageURL}
                    image2={item.imageURL}
                    image3={item.imageURL}
                  />
                  <div className="my-3">
                    <p className="font-smalltech text-lg">{item.productName}</p>
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
                        }}
                        className="mt-2 w-full  border border-[#d6a419] p-1 hover:bg-[#d6a419] hover:text-white duration-300 ease-out px-2"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <Skeleton />
      )}
      <Footer />
    </div>
  );
};

export default Category;
