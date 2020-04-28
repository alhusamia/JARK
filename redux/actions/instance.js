import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jark-drf.herokuapp.com/",
  // baseURL: "64.225.110.71/",
});

export default instance;
