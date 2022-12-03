import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import InputField from "../../UI/InputField/inputfield";
import { useNavigate } from "react-router-dom";
import { LightCircularProgress } from "../../UI/CircularProgress/circularprogress";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userpool from "../Userpool/userpool";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = emailRegex.test(email);
  const validPassword = passRegex.test(password);


  const user = new CognitoUser({
    Username: email,
    Pool: userpool,
  });

  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const loginUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        setLoading(false);
        localStorage.setItem("usertoken", data.getAccessToken().getJwtToken());
        navigate("/");
        user.getUserAttributes(function (err, result) {
          if (err) {
            // ToastError(err.message);
            return;
          }
          for (let i = 0; i < result.length; i++) {
            localStorage.setItem("userId", result[0].getValue());
            localStorage.setItem("userName", result[2].getValue());
          }
        });
        // ToastSuccess("You have signed up successfully");
      },
      onFailure: (err) => {
        setLoading(false);
        console.log(err)
        // ToastError(err.message);
      },
    });
  };



  return (
    <div className="bg-[#f6f5f3] h-[100vh]">
      <Navbar />
      <div className=" flex justify-center items-center mt-16 sm:pt-[40px]  ">
        <form 
        onSubmit={loginUser}
        className="w-[90%] max-w-[400px] shadow-2xl p-10 mt-12 font-smalltech bg-white">
          <h4 className=" font-bigtech sm:font-smalltech text-center text-2xl sm:text-2xl px-[50px] py-5 sm:p-0">
            Welcome Back
          </h4>
          <p className="text-center mb-5">
            New to Rejuvenate?{" "}
            <b className=" cursor-pointer"
            onClick={()=> navigate('/signup')}
            >Create an account</b>{" "}
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
