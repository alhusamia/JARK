import instance from "./instance";
import { Rentproduct } from "./listofrents";

export const UNRent = (productID) => async (dispatch) => {
  try {
    console.log(productID);

    const res = await instance.put(`return/${productID}/`);

    const product = res.data;
    dispatch(Rentproduct());
  } catch (err) {
    console.error("Error while UnRenting", err);
  }
};
