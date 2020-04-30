import instance from "./instance";

import { RENT } from "./types";

export const Rent = (productID) => async (dispatch) => {
  try {
    console.log(productID);
    const res = await instance.post(`rent/`, productID);
    const product = res.data;
    console.log(product);
    dispatch({
      type: RENT,
      payload: product,
    });
  } catch (err) {
    console.error("Error while Renting", err);
  }
};
