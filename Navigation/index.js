import React from "react";
import { Icon, Image } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Components/Home";
// Screens
import { MAIN } from "./screenNames";

const { Navigator, Screen } = createStackNavigator();

function RootTabNavigator() {
  return (
    <Navigator initialRouteName={MAIN}>
      {/* <Screen
        name={USER}
        component={UserStack}
        options={() => {
          return {
            title: "Profile",
            headerRight: () => (
              <Image source={logo} style={{ height: 30, width: 15, flex: 1 }} />
            ),
          };
        }}
      /> */}
      <Screen name={MAIN} component={Home} />
    </Navigator>
  );
}

export default RootTabNavigator;
