import { combineReducers } from "redux";

import user from "./user";
import errors from "./errors";
import allproducts from "./allproducts";
import profile from "./profile";
import listofrents from "./listofrents";

export default combineReducers({
  user,
  errors,
  allproducts,
  profile,
  listofrents,
});
