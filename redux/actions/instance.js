import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jark-drf.herokuapp.com/",
});

export default instance;
