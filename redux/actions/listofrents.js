import { ADD_PRODUCT_TO_LIST_OF_RENT } from "./types";

// export const addProductToRentList = (product) => (dispatch) => {
//   // try {
//   //     const res = await instance.get(`products/`);
//   //     const products = res.data;
//   dispatch({
//     type: ADD_PRODUCT_TO_LIST_OF_RENT,
//     payload: product,
//   });
//   // } catch (err) {
//   //     console.error("Error while fetching allproducts", err);
//   // }
// };
export const addProductToRentList = (product) => ({
  type: ADD_PRODUCT_TO_LIST_OF_RENT,
  payload: product,
});
