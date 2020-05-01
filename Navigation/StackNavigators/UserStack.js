import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  LOGIN,
  SIGNUP,
  PROFILE,
  RENT,
  RENTDETAIL,
  CAMERA,
} from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";

import RentDetail from "../../Components/RentDetail/RentDetail";
import Rents from "../../Components/Rent/Rents";

import { createDrawerNavigator } from "@react-navigation/drawer";

// const { Navigator, Screen } = createDrawerNavigator();

import Camera from "../../Components/Camera";
import CreateProduct from "../../Components/CreateProduct";

const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={!user ? { LOGIN } : { PROFILE }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "black",
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
        <>
          <Screen name={PROFILE} component={Profile} />
          <Screen name={CAMERA} component={Camera} />
          <Screen name={RENT} component={Rents} />
          <Screen name={RENTDETAIL} component={RentDetail} />
        </>
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(UserStack);
// export default UserStack;
