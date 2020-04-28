import { ADD_PRODUCT_TO_LIST_OF_RENT } from "../actions/types";

export default (products = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_LIST_OF_RENT:
      const newProduct = payload;

      return [...products, newProduct];
    default:
      return products;
  }
};
