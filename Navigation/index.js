import React from "react";
import { Icon, Image } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { MAIN, USER } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import Home from "../Components/Home";

const { Navigator, Screen } = createStackNavigator();

function RootTabNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen name={USER} component={UserStack} />
      <Screen name={MAIN} component={Home} />
    </Navigator>
  );
}

export default RootTabNavigator;
