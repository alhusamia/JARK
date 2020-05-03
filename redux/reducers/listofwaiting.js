import { ADD_PRODUCT_TO_LIST_OF_WAITING } from "../actions/types";

export default (products = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_LIST_OF_WAITING:
      const newProduct = payload;

      return [...products, newProduct];
    default:
      return products;
  }
};
