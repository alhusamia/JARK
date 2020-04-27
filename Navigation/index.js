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
import Detail from "../Components/ProductDetail/ProductDetail";
import SearchButton from "../Components/Search/SearchButton";

const { Navigator, Screen } = createStackNavigator();

function RootTabNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen name={USER} component={UserStack} />
      <Screen
        name={MAIN}
        component={Home}
        options={({ navigation }) => {
          return {
            headerRight: () => <SearchButton navigation={navigation} />,
          };
        }}
      />
      <Screen name={SEARCHLIST} component={SearchList} />
      <Screen
        name={PRODUCT}
        component={Detail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
    </Navigator>
  );
}

export default RootTabNavigator;
