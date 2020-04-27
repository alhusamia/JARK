import React from "react";
import { Icon, Image } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import {
  MAIN,
  USER,
  SEARCH,
  SEARCHLIST,
  RENTLIST,
  PRODUCT,
} from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import Home from "../Components/AllProducts";
import SearchList from "../Components/Search/SearchList";
import RentStack from "./StackNavigators/RentStack";
import Detail from "../Components/ProductDetail/ProductDetail"; // rename import to ProductDetail

const { Navigator, Screen } = createStackNavigator();

// Is this supposed to be a tab navigator?
// it's a Stack Navigator named "RootTabNavigator".
function RootTabNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen name={USER} component={UserStack} />
      <Screen name={MAIN} component={Home} />
      <Screen name={SEARCHLIST} component={SearchList} />
      <Screen
        name={PRODUCT}
        component={Detail}
        options={({ route }) => ({ title: route.params.product.name })}
      /> {/* You can pass the whole product object, and only use its name in Detail */}
    </Navigator>
  );
}

export default RootTabNavigator;
