import { combineReducers } from "redux";

import user from "./user";
import errors from "./errors";
import allproducts from "./allproducts";
import profile from "./profile";
import listofrents from "./listofrents";
import rent from "./rent";

export default combineReducers({
  user,
  errors,
  allproducts,
  profile,
  listofrents,
  rent,
});
