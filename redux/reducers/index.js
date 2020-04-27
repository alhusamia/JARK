import { combineReducers } from "redux";

import user from "./user";
import errors from "./errors";
import allproducts from "./allproducts";
import profile from './profile'

export default combineReducers({
  user,
  errors,
  allproducts,
  profile,
});
