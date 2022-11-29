import React, { useEffect, useRef, useState } from "react";
import HomeCarousel from "./Components/Landing/Carousel";
import Navbar from "./Components/Navbar/navbar";
import Proto1 from "./assets/acwell2.jpg";
import Proto2 from "./assets/photo2.avif";
import Proto3 from "./assets/photo3.avif";
import Proto4 from "./assets/photo4.avif";
import Proto5 from "./assets/photo5.avif";
import Proto6 from "./assets/photo11.jpg";
import Footer from "./Components/Footer/footer";
import { useNavigate } from "react-router-dom";
import Journey from "./Components/Journey/journey";

function App() {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const productRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "-100px",
  };


  useEffect(() => {
    localStorage.setItem("showMenu", "false");
    const sectionObserver = new IntersectionObserver(function (
      entries,
      sectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
        }
      });
    },
    options);
    if (textRef.current) {
      sectionObserver.observe(textRef.current);
      sectionObserver.observe(productRef.current);
    }
  }, [textRef.current, productRef.current]);

  const categoryObj = [
    {
      imgUrl: Proto1,
      url: "/category/cleansers",
      text: "CLEANSERS",
    },
    {
      imgUrl: Proto2,
      url: "/category/toners",
      text: "TONERS",
    },
    {
      imgUrl: Proto3,
      url: "/category/moisturizers",
      text: "MOISTURIZERS",
    },
    {
      imgUrl: Proto4,
      url: "/category/exfoilators",
      text: "EXFOILATORS",
    },
    {
      imgUrl: Proto5,
      url: "/category/sunscreen",
      text: "SUNSCREEN",
    },
    {
      imgUrl: Proto2,
      url: "/category/eye",
      text: "EYE CARE",
    },
  ];

  return (
    <div>
      <div className=" mx-auto fullbody ">
        {/* NAVBAR */}
        <Navbar />

        {/* section 1 header Carousel */}
        <HomeCarousel />

        {/* section 2 header text */}
        <div
          ref={textRef}
          className="mb-8  md:mb-0 opacity-0 flex justify-center items-center  lg:h-[700px] py-4 duration-700 ease-in"
        >
          <p className="font-bigtech text-[40px] md:text-[65px] lg:text-[115px]   lg:leading-[150px]">
            Let's help you redefine<br></br>
            You do deserve,<br></br>a flawless skin.
          </p>
        </div>

        {/* section 3 skincare category */}
        <>
          <h1 className="border-y text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
            SHOP YOUR FAVOURITE SKINCARE PRODUCTS
          </h1>
          <div
            ref={productRef}
            class="opacity-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90%] 2xl:max-w-[80%] mx-auto duration-700 ease-in"
          >
            {categoryObj.map((item, index) => {
              return (
                <div className="relative">
                  <img
                    src={item.imgUrl}
                    alt="product "
                    className="h-[400px] 2xl:h-[600px] w-full object-cover object-top cursor-pointer "
                    onClick={() => navigate(item.url)}
                  />
                  <div className=" top-[50%] w-full flex justify-center">
                    <button
                      onClick={() => navigate(item.url)}
                      className="font-smalltech hover:font-bigtech text-lg  hover:border-[#d6a419] text-gray my-6 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-white  duration-300 ease-in w-[50%] mx-auto"
                    >
                      {item.text}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
        

        {/* section 4 skincare steps */}
       <Journey />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
