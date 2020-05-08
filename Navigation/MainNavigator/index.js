import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ProfileScreen,
  HomeScreen,
  SearchScreen,
  LogoutScreen,
} from "../../screens";
import SideBare from "./SidBar";
const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    HomeScreen :{
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: "search",
        drawerIcon: ({ tintColor }) => (
          <Feather name="search" size={16} color={tintColor} />
        ),
      },
    },
    LogoutScreen :{
      screen: LogoutScreen,
      navigationOptions: {
        title: "Logout",
        drawerIcon: ({ tintColor }) => (
          <Feather name="log-out" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBare {...props} />,
  }
);
export default createAppContainer(DrawerNavigator);
