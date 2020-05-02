import React, { Component } from "react";
import { Text, View, Button } from "native-base";
import { connect } from "react-redux";

// Components
import { getOwnerProfile } from "../../redux/actions";

class OwnerProfile extends Component {
  componentDidMount() {
    this.props.getOwnerProfile(this.props.route.params.product.owner.user.id);
  }
  render() {
    const { ownerprofile } = this.props;
    return (
      <View>
        {!ownerprofile.user ? (
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
              {ownerprofile.user.first_name} {ownerprofile.user.last_name}
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
              Location: {ownerprofile.location}
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
              Email: {ownerprofile.user.email}
            </Text>
          </>
        )}
      </View>
    );
  }
}
const mapStateToProps = ({ ownerprofile }) => ({
  ownerprofile,
});
const mapDispatchToProps = (dispatch) => ({
  getOwnerProfile: (ProfileID) => dispatch(getOwnerProfile(ProfileID)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfile);
