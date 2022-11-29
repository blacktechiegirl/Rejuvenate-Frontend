import React from "react";
import Navbar from "../Navbar/navbar";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsChatLeft} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NoContent = () => {
  const navigate = useNavigate();

  return (
    <div>

      <div className="flex justify-center items-center mt-20 md:pt-[100px] 2xl:pt-0  font-smalltech shadow-2xl w-[90%] 2xl:w-[70%] mx-auto">
        <div className="bg-white w-[90%]  sm:w-[80%] p-6 mb-5 text-center flex justify-center items-center flex-col">
          <h4 className="text-3xl my-5 md:text-5xl font-lvbold">Items are not Available</h4>
          <b><p className="mb-4 text-2xl">Please Check back later</p></b>

          <p className="font-smalltech text-lg sm:text-lg mb-8">
            The items you are trying to view are currently not available<br></br>We
            apologize for the inconvenience{" "}
          </p>
          
          <div>
            <hr></hr>
            <b>
              <p className="mt-5">Can we help you ?</p>
            </b>
            <button
              type="submit"
              className="border  p-2 text-center font-smalltech mt-8 relative w-full flex justify-center max-w-[250px]"
            >
              <HiOutlineEnvelope className="text-[#acaaaa] text-lg mt-[3px] mr-2" />
              Email Us
            </button>
            <button
              type="submit"
              className="border  p-2 text-center font-smalltech mt-8 relative w-full flex justify-center min-w-[250px]"
            >
              <BsChatLeft className="text-[#acaaaa]  mt-[6px] mr-2" />
              Chat with us
            </button>
            <button
              type="submit"
              className="bg-black p-2 text-center font-smalltech text-white mt-14 relative w-full max-w-[250px]"
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

export default NoContent;
