import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.js";
import Cart from "./Components/Cart/cart.js";
import AboutUs from "./Components/AboutUs/aboutus.js";
import ShoppingCategory from "./Components/Category/category.js";
import Catalogue from "./Components/Catalogue/catalogue.js";
import Wishlist from "./Components/Wishlist/wishlist.js";
import Dermatologist from "./Components/Dermatologist/dermatologist.js";
import ForgotPass from "./Components/auth/ForgPass/forgpass.js";
import Login from "./Components/auth/Login/login.js";
import Signup from "./Components/auth/Signup/signup.js";
import Error404 from "./Components/Error/Error404.js";
import Error500 from "./Components/Error/Error500..js";
import AccessDenied from "./Components/Error/AccessDenied.js";
import ProductDetails from "./Components/ProductDetail/navbar.js";
import CreateProduct from "./Components/CreateProduct/createProduct.js";
import Checkout from "./Components/CheckOut/checkout.js";

const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/category/:id" exact element={<ShoppingCategory />} />
        <Route path="/catalogue" exact element={<Catalogue />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/dermatologist" exact element={<Dermatologist />} />
        <Route path="/reset/password" exact element={<ForgotPass />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/500" exact element={<Error500 />} />
        <Route path="/access/denied" exact element={<AccessDenied />} />
        <Route path="/details/:id" exact element={<ProductDetails />} />
        <Route path="/new/product" exact element={<CreateProduct />} />
        <Route path="*" exact element={<Error404 />} />
        <Route path="/checkout" exact element={<Checkout />} />


      </Routes>
    </Router>
  );
};

export default PageRoute;
