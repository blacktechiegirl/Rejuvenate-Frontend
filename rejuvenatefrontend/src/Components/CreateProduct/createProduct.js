import React, { useState } from "react";
import AccountService from "../../axios/AuthService";
import Navbar from "../Navbar/navbar";
import InputField from "../UI/InputField/inputfield";
import Select from "react-select";

function CreateProduct() {
  const accountpath = new AccountService();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [fileUploaded, setFileUploaded] = useState("");
  const [selectedOption, setSelectedOption] = useState([]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ratings, setRatings] = useState("");
  const [description, setDescription] = useState("");
  const [benefits, setBenefits] = useState("");
  const [filled, setFilled] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    setIsFilePicked(true);
  };

  const createProduct = async () => {
    if (selectedOption.length === 0) {
      setFilled(false);
    } else {
      setFilled(true);
      selectedOption.map((item) => category.push(item.value));
    }
    const userData = {
      productName,
      price,
      category,
      quantity,
      imageURL,
      ratings,
      description,
      benefits,
    };
    const response = await accountpath.createProduct(userData);
    console.log(response);
  };

  const options = [
    { value: "cleansers", label: "Face Clensers" },
    { value: "moisturizers", label: "Moisturizers" },
    { value: "sunscreen", label: "Sunscreen" },
    { value: "eye", label: "Eye Care" },
    { value: "lip", label: "Lip Care" },
    { value: "body", label: "Bath & Body" },
    { value: "exfoliators", label: "Exfoilators" },
    { value: "toners", label: "Toner" },
    { value: "acne", label: "Acne Products" },
  ];

  const handleSubmission = async () => {
    const imageName = selectedFile.name;
    const response = await accountpath.getUploadUrl(imageName);
    const url = response.data.uploadURL;
    const data = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      body: selectedFile,
    });
    const imageUrl = url.split("?")[0];
    setFileUploaded(imageUrl);
    setImageURL(imageUrl);
  };

  return (
    <div>
      <Navbar />
      <div className="p-32 max-w-[50%] flex flex-col">
        <p>Upload Image</p>
        <input type="file" name="file" onChange={changeHandler} />
        <div>
          <button onClick={handleSubmission}>Submit Uploaded Image</button>
        </div>
        {fileUploaded ? <img src={fileUploaded} alt="uploaded" /> : null}

        <InputField
          name="email"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          label="Product Name"
        />

        <input
          type="number"
          name="price"
          placeholder="Enter price "
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          label="Price"
        />
        <label>Category</label>
        <Select
          options={options}
          isSearchable={true}
          isMulti={true}
          value={selectedOption}
          onChange={setSelectedOption}
          className={
            filled === true
              ? null
              : filled === false
              ? "border border-red-600"
              : null
          }
        />

        <input
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          label="Quantity"
        />

        <input
          type="number"
          name="ratings"
          placeholder="Enter Ratings"
          value={ratings}
          onChange={(event) => setRatings(event.target.value)}
          label="Ratings"
        />

        <InputField
          name="description"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          label="Description"
        />

        <InputField
          name="benefits"
          placeholder="Enter Benefits"
          value={benefits}
          onChange={(event) => setBenefits(event.target.value)}
          label="Benefits"
        />

        <button className="p-5 bg-[gray]" onClick={() => createProduct()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateProduct;
