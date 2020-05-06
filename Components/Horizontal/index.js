import React, { Component } from "react";
import { Text, View, Thumbnail } from "native-base";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { HOME, PRODUCT_DETAIL } from "../../Navigation/screenNames";

class Horizontal extends Component {
  render() {
    const { navigation, allproducts, user } = this.props;

    const allProduct = allproducts
      .filter(
        (product) =>
          product.owner.user.id !== user.user_id && product.rented_by === null
      )
      .map((product) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(HOME, {
              screen: PRODUCT_DETAIL,
              params: { product },
            })
          }
          key={product.name + product.id}
        >
          <View
            style={styles.mediaImageContainer}
            key={product.name + product.id}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <Text style={[styles.text, styles.subText]}>
              {product.owner.user.first_name}
            </Text>
          </View>
        </TouchableOpacity>
      ));

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ScrollView
              style={{ marginLeft: 0 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {allProduct}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ allproducts, user }) => ({
  allproducts,
  user,
});

export default connect(mapStateToProps)(Horizontal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  subText: {
    fontSize: 25,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    textShadowColor: "#5dbcd2",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  image1: {
    flex: 1,
    width: 260,
    height: 260,
    borderRadius: 150,
    borderWidth: 4,
    marginLeft: -15,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 350,
    height: 450,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 450,
    height: 600,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 30,
    alignItems: "center",
  },
});
