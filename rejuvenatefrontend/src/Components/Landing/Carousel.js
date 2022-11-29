import React, { useEffect, useState } from "react";
import Proto from "../../assets/proto1.avif";
import Proto2 from "../../assets/proto2.avif";
import Proto3 from "../../assets/proto3.jpg";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";


function HomeCarousel() {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  let slideInterval;
  let internalTime = 5000;

  const updateIndex = (value) =>{
    if(imageIndex === 2){
      setImageIndex(0)
    }else{
      setImageIndex(value)
    }
  }

  const reduceIndex = (value) =>{
    if(imageIndex === 0){
      setImageIndex(0)
    }else{
      setImageIndex(value)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(imageIndex + 1),
    onSwipedRight: () => reduceIndex(imageIndex - 1),
  });
  const auto = () => {
    if (imageIndex < 2) {
      slideInterval = setInterval(
        () => setImageIndex((prev) => prev + 1),
        internalTime
      );
    } else {
      slideInterval = setInterval(() => setImageIndex(0), internalTime);
    }
  };

  useEffect(() => {
    auto();
    return () => clearInterval(slideInterval);
  }, [imageIndex]);

  const imageObj = [
    {
      url: Proto,
      heading: 'HOLIDAY SEASON WITH REJUVENATE'
    },
    {
      url: Proto2,
      heading: 'START YOUR SKINCARE JOURNEY '
    },
    {
      url: Proto3,
      heading: 'CONSULT A DERMATOLOGIST TODAY'
    },
  ];

  return (
    <div id="default-carousel" className="relative" data-carousel="static">
      <div className="   " {...handlers}>
        {imageObj.map((item, index) => {
          return (
            <div
              className={
                imageIndex === index
                  ? " opacity-1 translate-x-0 duration-1000"
                  : "  absolute opacity-0 -translate-x-52"
              }
            >
              {imageIndex === index ? (
                <div className="mt-16 relative h-[350px] md:h-[600px] lg:h-[800px]  xl:h-[750px] 2xl:h-[1000px] 3xl:h-[1200px]">
                  <img
                    src={item.url}
                    className=" block w-full duration-[10000ms] ease-linear brightness-75  h-[350px] md:h-[600px] lg:h-[800px]  xl:h-[750px] 2xl:h-[1000px] 3xl:h-[1200px] object-cover object-top"
                    alt="..."
                  />
                  <div className=" absolute top-[60%] md:top-[70%]  text-xl md:text-2xl xl:text-3xl font-bigtech text-white z-999 flex justify-center flex-col text-center bg-gray w-full">
                    <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bigtech text-white z-999 mb-5 lg:mb-10">
                      {item.heading}
                    </h1>
                    <button
                      onClick={() => navigate("/catalogue")}
                      className="min-w-[250px] border-2 p-2 md:p-4 hover:bg-white hover:text-gray-400 duration-500 ease-in w-[20%] mx-auto"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              ) : null}
              ;
            </div>
          );
        })}
      </div>
      {/* <!-- Slider controls --> */}
      {imageIndex > 0 ? (
        <button
          onClick={() => setImageIndex(imageIndex - 1)}
          type="button"
          className="hidden sm:block absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10   group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      ) : null}

      {imageIndex < 2 ? (
        <button
          onClick={() => setImageIndex(imageIndex + 1)}
          type="button"
          className="hidden sm:block absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-white  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      ) : null}
    </div>
  );
}

export default HomeCarousel;
