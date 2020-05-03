import { ADD_PRODUCT_TO_LIST_OF_RENT } from "./types";
import instance from "./instance";

export const addProductToRentList = () => async (dispatch) => {
  try {
    const res = await instance.get(`rentlist/`);
    const product = res.data;

    dispatch({
      type: ADD_PRODUCT_TO_LIST_OF_RENT,
      payload: product,
    });
  } catch (err) {
    console.error("Error while fetching allRents", err);
  }
};
// export const addProductToRentList = (product) => ({
//   type: ADD_PRODUCT_TO_LIST_OF_RENT,
//   payload: product,
// });
