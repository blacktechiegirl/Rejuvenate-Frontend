import React from "react";
import Navbar from "../Navbar/navbar";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsChatLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Error500 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f5f3]">
      <Navbar />
      <div className="flex justify-center items-center pt-20 md:pt-[100px] 2xl:pt-0  font-smalltech">
        <div className="bg-white w-[90%] max-w-[500px] sm:w-[80%] p-6 py-12 mb-5 text-center">
          <h4 className="text-5xl my-5 md:text-[100px] font-lvbold">500</h4>
          <b>
            <p className="mb-4 text-2xl">Internal Server Error</p>
          </b>

          <p className="font-smalltech text-lg sm:text-xl mb-8">
            You do not currently have access to the page you are trying to
            access.Please check the URL or navigate to another Page.<br></br>We
            apologize for the inconvenience{" "}
          </p>

          <div>
            <hr></hr>
            <b>
              <p className="mt-5">Can we help you ?</p>
            </b>
            <button
              type="submit"
              className="border  p-2 text-center font-smalltech mt-8 relative w-full flex justify-center"
            >
              <HiOutlineEnvelope className="text-[#acaaaa] text-lg mt-[3px] mr-2" />
              Email Us
            </button>
            <button
              type="submit"
              className="border  p-2 text-center font-smalltech mt-8 relative w-full flex justify-center"
            >
              <BsChatLeft className="text-[#acaaaa]  mt-[6px] mr-2" />
              Chat with us
            </button>

            <button
              type="submit"
              className="bg-black p-2 text-center font-smalltech text-white mt-14 relative w-full"
              onClick={() => navigate("/")}
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error500;
