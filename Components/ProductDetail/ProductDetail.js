import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { Button, Right, Thumbnail, Left } from "native-base";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Fontisto";

import { addProductToRentList } from "../../redux/actions";
import { getOwnerProfile } from "../../redux/actions";
import { OWNERPROFILE, TENANTPROFILE } from "../../Navigation/screenNames";

class ProductDetail extends React.Component {
  state = {
    show: true,
  };
  render() {
    const { product } = this.props.route.params;
    const { addProductToRentList, navigation, user, listofrents } = this.props;
    const { show } = this.state;

    const named = listofrents[0].find(
      (products) => products.tenant.user.id === product.rented_by
    );

    // the conditions below could be made simpler.
    // Nothing to concern yourself with now, but just 
    // leaving these comments for reference.
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image }} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.infoName}>{product.name}</Text>
          <View style={styles.hairline}></View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescription}>{product.description}</Text>
          </View>
          {product.owner.user.id === user.user_id ? (
            [
              product.rented_by && (
                <View style={styles.Container}>
                  <Text style={styles.text1}>
                    Tenant: {named.tenant.user.first_name}
                  </Text>
                  <Icon
                    name="person"
                    size={35}
                    onPress={() =>
                      navigation.navigate(TENANTPROFILE, { named })
                    }
                    style={{ marginTop: -33, marginLeft: 200 }}
                  />
                  <Thumbnail source={{ uri: product.owner.image }} />
                </View>
              ),
            ]
          ) : (
            <View style={styles.Container1}>
              <Text style={styles.text2}>
                Owner: {product.owner.user.first_name}{" "}
                {product.owner.user.last_name}
              </Text>
              <Icon
                name="person"
                onPress={() => navigation.navigate(OWNERPROFILE, { product })}
                size={35}
                style={{
                  marginTop: -33,
                  marginLeft: 255,
                  paddingLeft: 10,
                }}
              />
              <Right style={{ marginLeft: 235, paddingLeft: 10 }}>
                <Text>visit profile</Text>
              </Right>
              <Thumbnail source={{ uri: product.owner.image }} />
            </View>
            {/* (1) */}
          )}
          {product.owner.user.id !== user.user_id /* this condition is unnecessary */ && [
            show !== false /* Move this condition to (1) */ ? (
              <Right>
                <Button
                  style={styles.buttons}
                  onPress={() => {
                    addProductToRentList(product);
                    this.setState({ show: false });
                  }}
                >
                  <Text style={styles.text}>BORROW NOW</Text>
                </Button>
              </Right>
            ) : (
              <Right>
                <Button style={styles.buttons}>
                  <Text style={styles.text}>Pending...</Text>
                </Button>
              </Right>
            ),
          ]}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ user, listofrents }) => ({
  user,
  listofrents,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToRentList: (product) => dispatch(addProductToRentList(product)),
  getOwnerProfile: (ProfileID) => dispatch(getOwnerProfile(ProfileID)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
