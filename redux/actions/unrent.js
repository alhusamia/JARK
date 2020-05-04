import instance from "./instance";

import { UNRENT } from "./types";

export const UNRent = (productID) => async (dispatch) => {
  try {
    console.log(productID);
    
    const res = await instance.put(`return/${productID}/`);

    const product = res.data;
    // dispatch({
    //   type: RENT,
    //   payload: product,
    // });
  } catch (err) {
    console.error("Error while UnRenting", err);
  }
};
