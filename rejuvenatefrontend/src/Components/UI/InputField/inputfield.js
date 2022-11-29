import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";

const InputField = ({ label, placeholder, value, name, onChange, font, type }) => {
  const [passToggle, setPassToggle] = useState(false);

  const toggleBtn = () => {
    setPassToggle((prevState) => !prevState);
  };
  return (
    <div>
      <label className="my-5">{label}</label>
      <div className="relative">
        <input
          className="d-flex border p-2 w-full focus:outline-none focus:border-[gray] my-4 "
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          type={name === 'password'?passToggle ? "text" : "password":'text'}
        ></input>

        {name === "password" ? (
          <span
            onClick={toggleBtn}
            className="absolute right-2 bottom-6 text-black "
          >
            {passToggle ? (
              <AiFillEye/>
            ) : (
              <AiFillEyeInvisible />
            )}
          </span>
        ) : (
          <span className="absolute right-2 bottom-6 text-black ">
            <HiOutlineEnvelope />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;