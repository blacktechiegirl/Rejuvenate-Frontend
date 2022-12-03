import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import InputField from "../../UI/InputField/inputfield";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {LightCircularProgress} from "../../UI/CircularProgress/circularprogress";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userpool from "../Userpool/userpool";


const ForgotPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(1);
  const [code, setCode] = useState("");
  const [passToggle, setPassToggle] = useState(false);
  
  const toggleBtn = () => {
    setPassToggle((prevState) => !prevState);
  };

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userpool,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (password == confirmPassword) {
      cognitoUser.confirmPassword(code, password, {
        onSuccess: function (data) {
          // toast.success("Password Reset Successfully", {
          //   position: toast.POSITION.TOP_CENTER,
          // });
          navigate("/");
          setEmail("");
          setConfirmPassword("");
          setPassword("");
        },
        onFailure: function (err) {
          // toast.error("Invalid verification code", {
          //   position: toast.POSITION.TOP_CENTER,
          // });
          setLoading(false);
          setEmail("");
          setConfirmPassword("");
          setPassword("");
        },
      });
    } else {
      // toast.error("Password does not match", {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      setLoading(false);
      setEmail("");
      setConfirmPassword("");
      setPassword("");
    }
  };

  const sendCode = (event) => {
    setLoading(true);
    event.preventDefault();
    cognitoUser.forgotPassword({
      onSuccess: function (data) {
        // successfully initiated reset password request
      },
      onFailure: function (err) {
        // toast.error(err.message, {
        //   position: toast.POSITION.TOP_CENTER,
        // });
        setLoading(false);
        setEmail("");
      },
      //Optional automatic callback
      inputVerificationCode: function (data) {
        setLoading(false);
        setStage(2);

  
      },
    });
  };

  
  
  
  return (
    <div className="bg-[#f6f5f3] h-[100vh]">
      <Navbar />
      <div className="flex justify-center items-center pt-32  font-smalltech">
        {stage === 1 ? (
          <form className="w-[90%] max-w-[400px] shadow-2xl p-10 bg-white">
            <p className="text-center text-2xl mb-4">Reset Password</p>
            <p className=" text-lg text-center mb-8">
              Forgot your password ? Enter your email to quickly recover your
              password
            </p>

            <InputField
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              font={HiOutlineEnvelope}
              label="Email"
            />

            {loading ? (
              <div className="bg-[#353bc1] relative p-2 text-center text-white rounded-lg mt-14 mb-8">
                <button type="submit">
                  <LightCircularProgress />{" "}
                </button>
              </div>
            ) : (
              <div className="bg-black p-2 text-center text-white  mt-14 mb-8">
                <button type="submit"> Send Verification Code</button>
              </div>
            )}
          </form>
        ) : (
          <form className="w-[90%] max-w-[400px] shadow-2xl p-10">
            <h4 className="text-center text-2xl mb-6">Reset Password</h4>
            <InputField
              name="vercode"
              placeholder="Enter your verification code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              font={HiOutlineEnvelope}
              label="Verification Code"
            />

            <InputField
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
            />
            <InputField
              name="password"
              placeholder="Enter your Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              label="Confirm Password"
            />
            {loading ? (
              <div className="bg-[#353bc1] relative p-2 text-center text-white rounded-lg mt-14 mb-8">
                <button type="submit">
                  <LightCircularProgress />{" "}
                </button>
              </div>
            ) : (
              <div className="bg-black p-2 text-center text-white mt-14 mb-8">
                <button type="submit"> Reset Password</button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
