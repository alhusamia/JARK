import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Screens
import { USER, SEARCHLIST, HOME } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import HomeStack from "../Navigation/StackNavigators/HomeStack";
import SearchList from "../Components/Search/SearchList";

// const { Navigator, Screen } = createStackNavigator();
const { Navigator, Screen } = createDrawerNavigator();
function RootNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen name={USER} component={UserStack} />
      <Screen name={HOME} component={HomeStack} />
      <Screen name={SEARCHLIST} component={SearchList} />
    </Navigator>
  );
}

export default RootNavigator;
