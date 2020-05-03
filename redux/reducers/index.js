import { combineReducers } from "redux";

import user from "./user";
import errors from "./errors";
import allproducts from "./allproducts";
import profile from "./profile";
import listofrents from "./listofrents";
import rent from "./rent";
import ownerprofile from "./ownerprofile";
import listofwaiting from "./listofwaiting";

export default combineReducers({
  user,
  errors,
  allproducts,
  profile,
  listofrents,
  rent,
  ownerprofile,
  listofwaiting,
});
