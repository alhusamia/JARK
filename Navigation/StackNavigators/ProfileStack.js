import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import { PROFILE, RENT, RENTDETAIL, CAMERA } from "../screenNames";
//Components
import Profile from "../../Components/Profile";
import RentDetail from "../../Components/RentDetail/RentDetail";
import Rents from "../../Components/Rent/Rents";

import Camera from "../../Components/Camera";

const { Navigator, Screen } = createStackNavigator();

function ProfileStack() {
  return (
    <Navigator>
      <Screen name={PROFILE} component={Profile} />
      <Screen name={CAMERA} component={Camera} />
      <Screen name={RENT} component={Rents} />
      <Screen name={RENTDETAIL} component={RentDetail} />
    </Navigator>
  );
}
export default ProfileStack;
