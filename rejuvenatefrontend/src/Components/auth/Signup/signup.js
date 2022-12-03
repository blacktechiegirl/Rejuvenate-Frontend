import React, {useState} from "react";
import Navbar from "../../Navbar/navbar";
import InputField from "../../UI/InputField/inputfield";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "../../UI/CircularProgress/circularprogress";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import userpool from "../Userpool/userpool";


const Signup = () => {
  const attributeList = [];
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = emailRegex.test(email);
  const validPassword = password;

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      username == "" ||
      email == "" ||
      password == "" ||
      confirmPassword === ""
    ) {
      // ToastError("Please Enter all  fields");
    } else if (validEmail === false) {
      // ToastError("Please Enter a valid email address !");
    } else if (validPassword === false) {
      // ToastError(
      //   "Please enter a password with at least 8 characters, 1 uppercase, 1 number and 1 symbol"
      // );
    } else {
      setLoading(true);
      try {
        if (password === confirmPassword) {
          userpool.signUp(
            email,
            password,
            attributeList,
            null,
            (err, result) => {
              console.log(err)
              console.log(result)
              if (result) {
                setLoading(false);
                setEmail("");
                setConfirmPassword("");
                setPassword("");
                // ToastSuccess(
                //   "You have signed up successfully. Kindly Verify your Email and sign in again"
                // );
              }
            }
          );
        } else {
          // ToastError("Password does not match");
          setLoading(false);
          setConfirmPassword("");
          setPassword("");
        }
      } catch (err) {
        setEmail("");
        setConfirmPassword("");
        setPassword("");
        setLoading(false);
        // ToastError(err.message);
        console.log(err)
      }
    }
  };


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
          <form onSubmit={onSubmit}>
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
