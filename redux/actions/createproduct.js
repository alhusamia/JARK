import instance from "./instance";

// import { RENT } from "./types";
import { getAllProducts } from "./allproducts";

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await instance.post(`create/`, product);
    const productnew = res.data;
    dispatch(getAllProducts());
  } catch (err) {
    console.error("Error while Creating", err);
  }
};
