import React from "react";

const Footer = () => {
  return (
    <div>
    <div className="  border-t pt-16 border-[#efebe8] font-smalltech backgrounD-[#f5f5f5] md:grid md:grid-cols-10 w-[90%] 2xl:w-[80%] mx-auto mt-36">  
      <div className="col-span-4">
        <p className="font-bigtech text-3xl mb-3">Redefine</p>
        <p className="leading-7">
          Redefine is the number one beauty ecommerce store<br></br> and an
          official stocklist of over 50 leading beauty brands.
        </p>
        <p className="leading-7">Your one stop shop to all your beauty needs.</p>
        <p className="leading-7">Let's help you redefine, You deserve a flawless skin.</p>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>INFORMATION</b></li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>MY ACCOUNT</b></li>
          <li>Account</li>
          <li>My Cart</li>
          <li>My Wishlist</li>
          <li>Checkout</li>
          <li>Returns and Refunds</li>
        </ul>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>CONTACT</b></li>
          <li>Newsletter</li>
          <li>Stores</li>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
    </div>
   
    <p className="font-smalltech text-center my-10">Redefine© 2022. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
