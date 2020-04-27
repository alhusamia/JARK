import instance from "./instance";

import { SET_All_PRODUCTS } from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await instance.get(`products/`);
    const products = res.data;
    dispatch({
      type: SET_All_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    console.error("Error while fetching allproducts", err);
  }
};
