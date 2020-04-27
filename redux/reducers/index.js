import { combineReducers } from "redux";

import user from "./user";
import errors from "./errors";
import allproducts from "./allproducts";

export default combineReducers({
  user,
  errors,
  allproducts,
});
