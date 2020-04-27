import React, { Component } from "react";
import { Text, View, List, CardItem, Card, ListItem } from "native-base";
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

import styles from "./styles";
import { render } from "react-dom";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 30,           
            fontWeight: "bold",
            opacity: 1,
            textAlign: "center",

            textShadowColor: "#FFD700",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
          }}
        >
          {" "}
          Before you go.... Promise to come back again ....
        </Text>

        <LogoutButton />
      </View>
    );
  }
}

const mapStateToProps = ({ user, orders, profile }) => ({
  username: user?.username,
  user,
  orders,
  profile,
});

export default connect(mapStateToProps)(Profile);
