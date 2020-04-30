import instance from "./instance";

import { RENT } from "./types";

export const Rent = (productData) => async (dispatch) => {
  try {
    const res = await instance.post(`rent/`, productData);
    const product = res.data;
    dispatch({
      type: RENT,
      payload: product,
    });
  } catch (err) {
    console.error("Error while Renting", err);
  }
};
