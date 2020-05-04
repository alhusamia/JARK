import { ADD_PRODUCT_TO_LIST_OF_WAITING } from "./types";

export const addProductToRentList = (product) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_LIST_OF_WAITING,
    payload: product,
  });
};
