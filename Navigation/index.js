import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Screens
import { USER, SEARCHLIST, HOME, SEARCH } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import HomeStack from "../Navigation/StackNavigators/HomeStack";
import SearchStack from "../Navigation/StackNavigators/SearchStack";

import { connect } from "react-redux";

// const { Navigator, Screen } = createStackNavigator();
const { Navigator, Screen } = createDrawerNavigator();
function RootNavigator({ user }) {
  return (
    <Navigator initialRouteName={USER}>
      {/* this condition isn't necessary */}
      {!user ? (
        <Screen name={USER} component={UserStack} />
      ) : (
        <>
          <Screen name={USER} component={UserStack} />
          <Screen name={HOME} component={HomeStack} />
          <Screen name={SEARCH} component={SearchStack} />
        </>
      )}
    </Navigator>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(RootNavigator);
