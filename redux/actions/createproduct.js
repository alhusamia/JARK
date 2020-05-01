import instance from "./instance";

// import { RENT } from "./types";
import { getAllProducts } from "./allproducts";

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await instance.post(`create/`, product);
    const productnew = res.data;
    dispatch(getAllProducts());
    // console.log(product);
    // dispatch({
    //   type: RENT,
    //   payload: product,
    // });
  } catch (err) {
    console.error("Error while Renting", err);
  }
};
