import React, {useState} from "react";
import Navbar from "../../Navbar/navbar";
import InputField from "../../UI/InputField/inputfield";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "../../UI/CircularProgress/circularprogress";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-[#f6f5f3] h-[100vh]">
      <Navbar />
      <div className="flex justify-center items-center pt-[100px]">
      <div className="relative bg-white  p-[40px] w-[90%] max-w-[400px] font-smalltech shadow-xl">
          <i>
            <p
              className="cursor-pointer  absolute bottom-3 right-10 text-[#949393] text-sm hover:text-[#363062] "
              onClick={() => navigate("/login")}
            >
              <u>Return to Login</u>
            </p>
          </i>
          <form>
            <h3 className="mb-3 text-center text-3xl">Sign Up</h3>
    

            <InputField
              name="fullname"
              placeholder="Enter  full name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              label="Fullname"
            />
            <InputField
              name="email"
              placeholder="Enter  Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              label="Email"
            />

            <InputField
              name="password"
              placeholder="Enter  Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
            />
            <InputField
              name="password"
              placeholder="Confirm  Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              label="Confirm Password"
            />

            {/* Login Button */}
            {loading ? (
              <div>
                <button
                  type="submit"
                  className="bg-black p-2 py-6 text-center text-white  mt-12 relative w-full"
                >
                  <CircularProgress />
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="bg-black p-2 text-center text-white  mt-4 relative w-full"
                >
                  Signup
                </button>
              </div>
            )}
          </form>
        </div>
        </div>
    </div>
  );
};

export default Signup;
