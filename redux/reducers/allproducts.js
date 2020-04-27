import { SET_All_PRODUCTS } from "../actions/types";

export default (products = [], { type, payload }) => {
  switch (type) {
    case SET_All_PRODUCTS:
      return payload;
    default:
      return products;
  }
};
