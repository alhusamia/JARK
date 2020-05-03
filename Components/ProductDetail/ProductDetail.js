import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { Button, Right, Thumbnail } from "native-base";
import Slideshow from "react-native-image-slider-show";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Fontisto";

import { addProductToRentList } from "../../redux/actions";
import { getOwnerProfile } from "../../redux/actions";
import { OWNERPROFILE } from "../../Navigation/screenNames";

class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.route.params;
    const { addProductToRentList, navigation, user } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Slideshow
                  dataSource={[
                    { url: product.image },
                    { url: product.image2 },
                    { url: product.image3 },
                    { url: product.image4 },
                  ]}
                  height={300}
                  scrollEnabled={true}
                />
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

          <View style={styles.Container}>
            <Text style={styles.text1}>
              Owner: {product.owner.user.username}
            </Text>
            <Icon
              name="person"
              onPress={() => navigation.navigate(OWNERPROFILE, { product })}
              size={35}
              style={{ marginTop: -33, marginLeft: 200 }}
            />
            <Thumbnail source={{ uri: product.owner.image }} />
          </View>
          <Right>
            <Button
              style={styles.buttons}
              onPress={() => addProductToRentList(product)}
            >
              <Text style={styles.text}>RENT NOW</Text>
            </Button>
          </Right>
          {/* } */}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToRentList: (product) => dispatch(addProductToRentList(product)),
  getOwnerProfile: (ProfileID) => dispatch(getOwnerProfile(ProfileID)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
