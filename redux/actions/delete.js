import instance from "./instance";
import { getAllProducts } from "./allproducts";

export const Delete = (productID) => async (dispatch) => {
  try {
    const res = await instance.delete(`delete/${productID}/`);
    const product = res.data;
    dispatch(getAllProducts());
  } catch (err) {
    console.error(err);
  } 
};
