import instance from "./instance";
import { getAllProducts } from "./allproducts";

export const Delete = (productID) => async (dispatch) => {
  try {
    const res = await instance.delete(`delete/${productID}/`);
    const product = res.data;

    // instead of dispatching the action below,
    // just remove the product from the reducer directly.
    // to avoid making many requests to the backend.
    dispatch(getAllProducts());
  } catch (err) {
    console.error(err);
  }
};
