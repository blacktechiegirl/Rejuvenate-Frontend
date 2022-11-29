import React, {useState} from "react";
import Navbar from "../../Navbar/navbar";
import InputField from "../../UI/InputField/inputfield";
import { useNavigate } from "react-router-dom";
import {LightCircularProgress} from "../../UI/CircularProgress/circularprogress";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);




  return (
    <div className="bg-[#f6f5f3] h-[100vh]">
      <Navbar />
      <div className=" flex justify-center items-center mt-16 sm:pt-[40px]  ">
      <form className="w-[90%] max-w-[400px] shadow-2xl p-10 mt-12 font-smalltech bg-white">
            <h4 className=" font-bigtech sm:font-smalltech text-center text-2xl sm:text-2xl px-[50px] py-5 sm:p-0">
              Welcome Back
            </h4>
            <p className="text-center mb-5">
              New to Rejuvenate?{" "}
              <b
                className=" cursor-pointer"
              >
                Create an account
              </b>{" "}
            </p>

            <InputField
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              label="Email"
            />

            <InputField
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
            />

            {/* Forgot Password */}
            <div
              className="flex justify-end mt-3 text-['#949393'] cursor-pointer text-['13px']"
              onClick={() => {
                navigate("/reset/password");
              }}
            >
              <i>
                <p style={{ margin: 0 }}>forgot password?</p>
              </i>
            </div>

            {/* Login Button */}
            {loading ? (
              <div>
                <button
                  type="submit"
                  className="bg-black p-2 py-6 text-center text-white mt-12 relative w-full"
                >
                  <LightCircularProgress />
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="bg-black p-2 text-center text-white mt-12 relative w-full"
                >
                  Login
                </button>
              </div>
            )}
          </form>
        </div>
      
    </div>
  );
};

export default Login;
