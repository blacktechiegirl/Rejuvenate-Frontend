import axios from "axios";

export default class AccountService {
  constructor() {
    this.idToken = localStorage.getItem("idToken");
  }

  getUploadUrl(imageName){
    return axios.get(
      `http://localhost:3000/dev/s3url/${imageName}`,
    );
  }

  createProduct(userData) {
    return axios.post(
        `http://localhost:3000/dev/product`,
      userData,
    );
  }

  getAllProducts() {
    return axios.get(
      `http://localhost:3000/dev/product`,
    );
  }

  getProductById(id) {
    return axios.get(
      `http://localhost:3000/dev/product/${id}`,
    );
  }

  getProductByCategory(category) {
    return axios.get(
      `http://localhost:3000/dev/product/category/${category}`,
    );
  }
 
}