import axios from "axios";

export const instance = axios.create({
  // baseURL: "https://jark-drf.herokuapp.com/",
  baseURL: "http://165.22.93.182/",
});

export default instance;
