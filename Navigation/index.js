import React from "react";
import { Icon, Image } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Screens
import {
  MAIN,
  USER,
  SEARCH,
  SEARCHLIST,
  RENTLIST,
  PRODUCT,
  MENU,
} from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import Home from "../Components/AllProducts";
import SearchList from "../Components/Search/SearchList";
import RentStack from "./StackNavigators/RentStack";
import Detail from "../Components/ProductDetail/ProductDetail";
import SearchButton from "../Components/Search/SearchButton";
import DrawerStack from "./StackNavigators/DrawerStack";

const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Screen } = createDrawerNavigator();
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
