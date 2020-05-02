import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
import Icon from "react-native-vector-icons/AntDesign";
const LogoutButton = ({ logout }) => (
  <TouchableOpacity
    style={{
      // backgroundColor: "red",
      height: 70,
      width: 300,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 8,
    }}
    onPress={() => logout()}
  >
    <Icon name="logout" size={45} />
  </TouchableOpacity>
);
const mapDispatchToProps = { logout };
export default connect(null, mapDispatchToProps)(LogoutButton);
