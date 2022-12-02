import axios from "axios";

export default class AccountService {
  constructor() {
    this.idToken = localStorage.getItem("idToken");
  }

  getUploadUrl(imageName){
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/s3url/${imageName}`,
    );
  }

  createProduct(userData) {
    return axios.post(
        `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/product`,
      userData,
    );
  }

  getAllProducts() {
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/product`,
    );
  }

  getProductById(id) {
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/product/${id}`,
    );
  }

  getProductByCategory(category) {
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/product/category/${category}`,
    );
  }
 
}