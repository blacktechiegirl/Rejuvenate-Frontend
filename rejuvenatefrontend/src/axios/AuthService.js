import axios from "axios";

export default class AccountService {
  constructor() {
    this.usertoken = localStorage.getItem("usertoken");
    this.userid = localStorage.getItem("userId");
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

  getAllCartItems() {
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/cart/items/${this.userid}`,
    );
  }

  getAllWishlistItems() {
    return axios.get(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/wishlist/${this.userid}`,
    );
  }

  createCartItem(userData) {
    return axios.post(
        `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/cart`,
      userData,
    );
  }

  createWishlistItem(userData) {
    return axios.post(
        `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/wishlist/add`,
      userData,
    );
  }

  deleteCartItem(productId) {
    return axios.delete(
        `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/cart/${productId}`
    );
  }

  updateCartItem(userData) {
    return axios.put(
      `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/cart`,
    userData,
  );
  }

  deleteWishlistItem(productId) {
    return axios.delete(
        `https://dzykro8nza.execute-api.us-east-1.amazonaws.com/dev/wishlist/delete/${productId}`
    );
  }
 
 
}