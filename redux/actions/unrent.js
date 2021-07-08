import instance from "./instance";
import { Rentproduct } from "./listofrents";

export const UNRent = (productID) => async (dispatch) => {
  try {
    const res = await instance.put(`return/${productID}/`);

    const product = res.data;

    // instead of dispatching the action below,
    // just remove the product from the reducer directly.
    // to avoid making many requests to the backend.
    dispatch(Rentproduct());
  } catch (err) {
    console.error("Error while UnRenting", err);
  }
};
