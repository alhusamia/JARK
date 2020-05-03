import { ADD_PRODUCT_TO_LIST_OF_WAITING } from "./types";
// import { AsyncStorage } from "react-native";

export const addProductToRentList = (product) => async (dispatch) => {
  // AsyncStorage.setItem("Waiting ", JSON.stringify(product));
  // const token = JSON.parse(AsyncStorage.getItem("Waiting"));
  dispatch({
    type: ADD_PRODUCT_TO_LIST_OF_WAITING,
    payload: product,
  });
};
