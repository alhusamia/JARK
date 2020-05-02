import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
import Icon from "react-native-vector-icons/AntDesign";
const LogoutButton = ({ logout }) => (
  <TouchableOpacity
    style={{
      alignItems: "center",
      justifyContent: "center",
    }}
    onPress={() => logout()}
  >
    <Icon name="logout" size={45} />
  </TouchableOpacity>
);
const mapDispatchToProps = { logout };
export default connect(null, mapDispatchToProps)(LogoutButton);
