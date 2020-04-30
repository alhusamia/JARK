import React, { Component } from "react";
import { Text, View, Button } from "native-base";
import { connect } from "react-redux";
// Components
import LogoutButton from "./LogoutButton";
import CreateProduct from "../CreateProduct";
import { getProfile } from "../../redux/actions";
import { LISTOFRENT, RENT } from "../../Navigation/screenNames";

class Profile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const { profile, navigation } = this.props;

    return (
      <View>
        {!profile.user ? (
          <Text>Welcome</Text>
        ) : (
          <>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontWeight: "bold",
                opacity: 1,
                textAlign: "center",
              }}
            >
              {profile.user.first_name} {profile.user.last_name}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontWeight: "bold",
                opacity: 1,
                textAlign: "center",
              }}
            >
              Location: {profile.location}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontWeight: "bold",
                opacity: 1,
                textAlign: "center",
              }}
            >
              Email: {profile.user.email}
            </Text>
            <Button full info onPress={() => navigation.navigate(LISTOFRENT)}>
              <Text>Camera</Text>
            </Button>
            <Button
              full
              warning
              onPress={() => navigation.navigate(RENT, { profile })}
            >
              <Text>RENTERQR</Text>
            </Button>
            <CreateProduct />
          </>
        )}

        <LogoutButton />
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile,
});
const mapDispatchToProps = { getProfile };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
