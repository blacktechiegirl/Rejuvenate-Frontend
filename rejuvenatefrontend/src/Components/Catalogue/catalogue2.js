import React from "react";
import Navbar from "../Navbar/navbar";
import Proto1 from "../../assets/photo1.jpg";
import Proto2 from "../../assets/photo2.avif";
import Proto3 from "../../assets/photo3.avif";
import Proto4 from "../../assets/photo4.avif";
import Proto5 from "../../assets/photo5.avif";
import Proto6 from "../../assets/acwell2.jpg";
import Proto7 from "../../assets/acwell1.jpg";
import Proto8 from "../../assets/cerave1.webp";
import ProductCarousel from "../Landing copy/Carousel";

const Catalogue = () => {
  const Product = [
    {
      url1: Proto6,
      url2: Proto7,
      url3: Proto5,
      name: " Glucose Face Cleanser",
      price: 899,
    },
    {
      url1: Proto3,
      url2: Proto2,
      url3: Proto1,
      name: "Attono Face Toner",
      price: 400,
    },
    {
      url1: Proto2,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
  
    {
      url1: Proto4,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
    {
      url1: Proto6,
      url2: Proto7,
      url3: Proto5,
      name: " Glucose Face Cleanser",
      price: 899,
    },
    {
      url1: Proto3,
      url2: Proto2,
      url3: Proto1,
      name: "Attono Face Toner",
      price: 400,
    },
    {
      url1: Proto4,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
  
    {
      url1: Proto8,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
    {
      url1: Proto7,
      url2: Proto2,
      url3: Proto1,
      name: "Attono Face Toner",
      price: 400,
    },
    {
      url1: Proto6,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
  
    {
      url1: Proto8,
      url2: Proto1,
      url3: Proto3,
      name: "Avocado Face oil",
      price: 325,
    },
    // {
    //   url: Proto4,
    //   name: "Face Cleanser",
    //   price: 299,
    // },
    // {
    //   url: Proto5,
    //   name: "Face Cleanser",
    //   price: 899,
    // },
    // {
    //   url: Proto1,
    //   name: " Glucose Face Cleanser",
    //   price: 700,
    // },
    // {
    //   url: Proto2,
    //   name: "Attono Face Toner",
    //   price: 300,
    // },
    // {
    //   url: Proto3,
    //   name: "Avocado Face oil",
    //   price: 1200,
    // },
    // {
    //   url: Proto4,
    //   name: "Face Cleanser",
    //   price: 300,
    // },
    // {
    //   url: Proto5,
    //   name: "Face Cleanser",
    //   price: 899,
    // }, {
    //   url: Proto1,
    //   name: " Glucose Face Cleanser",
    //   price: 825,
    // },
    // {
    //   url: Proto2,
    //   name: "Attono Face Toner",
    //   price: 275,
    // },
    // {
    //   url: Proto3,
    //   name: "Avocado Face oil",
    //   price: 130,
    // },
    // {
    //   url: Proto4,
    //   name: "Face Cleanser",
    //   price: 899,
    // },
    // {
    //   url: Proto5,
    //   name: "Face Cleanser",
    //   price: 300,
    // }, {
    //   url: Proto1,
    //   name: " Glucose Face Cleanser",
    //   price: 300,
    // },
    // {
    //   url: Proto2,
    //   name: "Attono Face Toner",
    //   price: 300,
    // },
    // {
    //   url: Proto3,
    //   name: "Avocado Face oil",
    //   price: 300,
    // },
    // {
    //   url: Proto4,
    //   name: "Face Cleanser",
    //   price: 300,
    // },
    // {
    //   url: Proto5,
    //   name: "Face Cleanser",
    //   price: 300,
    // }, {
    //   url: Proto1,
    //   name: " Glucose Face Cleanser",
    //   price: 300,
    // },
    // {
    //   url: Proto2,
    //   name: "Attono Face Toner",
    //   price: 300,
    // },
    // {
    //   url: Proto3,
    //   name: "Avocado Face oil",
    //   price: 300,
    // },
    // {
    //   url: Proto4,
    //   name: "Face Cleanser",
    //   price: 300,
    // },
    // {
    //   url: Proto5,
    //   name: "Face Cleanser",
    //   price: 300,
    // },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="mt-24 text-3xl md:text-6xl font-lvreg border-y p-2 text-center">
        Product Catalogue
      </h1>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[90%] lg:max-w-[80%] mx-auto duration-700 ease-in">
        {Product.map((item)=> {
          return(
            <div>
            <ProductCarousel image1={item.url1} image2={item.url2} image3={item.url1}/>
            <div className="my-3">
            <p className="font-smalltech text-2xl">{item.name}</p>
            <p className="font-bigltech text-2xl">${item.price}</p>
            </div>
          </div>
          )
        })}
     
        </div>
    </div>
  );
};

export default Catalogue;
