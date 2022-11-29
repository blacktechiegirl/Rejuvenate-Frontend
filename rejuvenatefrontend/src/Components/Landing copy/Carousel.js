import React, { useEffect, useState } from "react";
import Proto from "../../assets/proto1.avif";
import Proto2 from "../../assets/proto2.avif";
import Proto3 from "../../assets/proto3.jpg";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

function ProductCarousel({ image1, image2, image3 }) {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

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

  const imageObj = [
    {
      url: image1,
      heading: "HOLIDAY SEASON WITH REJUVENATE",
    },
    {
      url: image2,
      heading: "START YOUR SKINCARE JOURNEY ",
    },
    {
      url: image3,
      heading: "CONSULT A DERMATOLOGIST TODAY",
    },
  ];
  console.log(image1);
  return (
    <div id="default-carousel" className="relative" data-carousel="static">
      <div className="   " {...handlers}>
        {imageObj.map((item, index) => {
          return (
            <div
              className={
                imageIndex === index
                  ? " opacity-1 translate-x-0 duration-300 ease-linear"
                  : "  absolute opacity-0 translate-x-52"
              }
            >
              {imageIndex === index && imageIndex === 2 ? (
                <div className="p-4 font-smalltech border h-[200px]   lg:h-[400px]">
                  <p className="text-">Glucose Face Cleanser</p>
                  <p>
                    This face cleanser is very soothing and very comfortable for
                    dry and oily skin.
                   </p>
                </div>
              ) : imageIndex === index ? (
                <div>
                  <img
                  onClick={()=> navigate('/details/1')}
                    src={item.url}
                    className=" block w-full  ease-linear  min-w-[150px] h-[200px] md:h-[400px]   object-cover object-top"
                    alt="..."
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {/* <!-- Slider controls --> */}
      <div className="flex justify-center">
        <div
          onClick={() => setImageIndex(0)}
          className={
            imageIndex === 0
              ? "rounded-full bg-[gray] w-4 h-1 m-2"
              : "rounded-full border  border-slate-400 w-4 h-1 m-2"
          }
        ></div>
        <div
          onClick={() => setImageIndex(1)}
          className={
            imageIndex === 1
              ? "rounded-full bg-[gray] w-4 h-1 m-2"
              : "rounded-full border  border-slate-400 w-4 h-1 m-2"
          }
        ></div>
        <div
          onClick={() => setImageIndex(2)}
          className={
            imageIndex === 2
              ? "rounded-full bg-[gray] w-4 h-1 m-2"
              : "rounded-full border  border-slate-400 w-4 h-1 m-2"
          }
        ></div>
      </div>
    </div>
  );
}

export default ProductCarousel;
