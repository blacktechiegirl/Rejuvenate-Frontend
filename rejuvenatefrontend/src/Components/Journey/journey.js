import React, { useState } from "react";
import Proto1 from "../../assets/proto3.jpg";
import Proto2 from "../../assets/photo15.webp";
import Proto3 from "../../assets/proto15.png";
import Proto4 from "../../assets/photo14.jpg";
import Proto5 from "../../assets/proto11.jpg";
import Proto6 from "../../assets/photo11.jpg";
import { useNavigate } from "react-router-dom";

const Journey = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const dataObj = [
    {
      imgUrl: Proto6,
      name: "Cleanse",
      heading: "Face Cleanser",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
    {
      imgUrl: Proto5,
      name: "Hydrate",
      heading: "Hydration",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
    {
      imgUrl: Proto4,
      name: "Moisturize",
      heading: "Face Moisturizer",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
    {
      imgUrl: Proto3,
      name: "Tone",
      heading: "Face Toner",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
    {
      imgUrl: Proto2,
      name: "Sunscreen",
      heading: "Sunscreen",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
    {
      imgUrl: Proto1,
      name: "Eye&Lip",
      heading: "Eye & Lip Care",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Conten there, content here', making it look like readable English.",
    },
  ];

  return (
    <div>
      <>
        <h1 className=" border-y text-xl lg:text-4xl text-center my-8 sm:my-16 py-4 font-smalltech">
          START YOUR SKINCARE JOURNEY
        </h1>
        <div className="flex justify-between max-w-[95%] 2xl:max-w-[80%] mx-auto  font-serif sm:text-xl my-5 overflow-x-auto scrollbar-hide">
          {dataObj.map((item, index) => {
            return (
              <p
                className={activeIndex === index ?"border-b-2 border-[#d6a419] p-1 mr-5 cursor-pointer": "p-1 mr-5 cursor-pointer"}
                onClick = {()=> setActiveIndex(index)}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        {dataObj.map((item, index) => {
          return activeIndex === index ? (
            <div className="grid lg:grid-cols-2 max-w-[90%] 2xl:max-w-[80%] mx-auto rounded-full sm:my-20 ">
              <div>
                <img
                  src={item.imgUrl}
                  alt="skincare"
                  className="h-[300px] xl:h-[400px] xl:w-[400px] w-[300px] rounded-full  object-cover object-center border-2 p-1 border-[#d6a419] mx-auto duration-500 ease-in"
                />
              </div>
              <div className=" flex-col flex justify-center text-center sm:text-left ">
                <p className="text-3xl font-smalltech mb-5  mt-4">
                  {item.heading.toUpperCase()}
                </p>
                <p className=" text-xl sm:text-2xl font-smalltech sm:leading-[40px] ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          ) : null;
        })}
        <div className="text-center">
          <button
            className=" py-4 hover:text-3xl text-2xl font-bigtech border-2 mt-14 my-8 w-[300px] hover:border-[#d6a419]  duration-300 ease-in "
            onClick={() => navigate("/catalogue")}
          >
            SHOP NOW
          </button>
        </div>
      </>
    </div>
  );
};

export default Journey;
