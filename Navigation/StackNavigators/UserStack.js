import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import { LOGIN, SIGNUP, PROFILE, PROFILESTACK } from "../screenNames";
//Components
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import ProfileStack from "./ProfileStack";

const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={!user ? { LOGIN } : { PROFILE }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5dbcd2",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      {!user ? (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Screen
          name={PROFILESTACK}
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(UserStack);
