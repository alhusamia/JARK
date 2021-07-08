import instance from "./instance";

import { getAllProducts } from "./allproducts";

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await instance.post(`create/`, product);
    const productnew = res.data;
    // instead of dispatching the action below,
    // just add the new product to the reducer directly.
    // to avoid making many requests to the backend.
    dispatch(getAllProducts());
  } catch (err) {
    console.error("Error while Creating", err);
  }
};
