import React from "react";
import Screen from "./Screen";

export const ProfileScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Profile" />
);
export const HomeScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Home" />
);
export const SearchScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Search" />
);
export const LogoutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Logout" />
);
