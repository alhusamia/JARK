import React, { Component } from "react";
import { Text, View, Thumbnail } from "native-base";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";
// import Icon from "react-native-vector-icons/MaterialIcons";
// Components
import LogoutButton from "./LogoutButton";
import CreateProduct from "../CreateProduct";
import { getProfile, Delete } from "../../redux/actions";
import {
  PRODUCT_DETAIL,
  CAMERA,
  RENTDETAIL,
  WAITDETAIL,
  HOME,
} from "../../Navigation/screenNames";
import { Ionicons } from "@expo/vector-icons";
class Profile extends Component {
  state = {
    show: false,
    product: "",
    product_name: "",
  };
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const {
      profile,
      navigation,
      allproducts,
      listofrents,
      user,
      listofwaiting,
    } = this.props;

    let myProduct = [];
    let myRent = [];
    let myWaiting = [];

    if (user) {
      myProduct = allproducts
        .filter((product) => product.owner.user.id === user.user_id)
        .map((product) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(HOME, {
                  screen: PRODUCT_DETAIL,
                  params: { product },
                })
              }
              key={product.name + product.id}
            >
              <View style={styles.mediaImageContainer}>
                <Icon
                  name="trash"
                  style={styles.removeItem}
                  onPress={() =>
                    this.setState({
                      show: true,
                      product: product.id,
                      product_name: product.name,
                    })
                  }
                  size={35}
                />
                <Image
                  source={{ uri: product.image }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
          </>
        ));
    }
    if (user) {
      myWaiting = listofwaiting
        .filter((product) => product.rented_by === null)
        .map((product) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(WAITDETAIL, { product, profile })
            }
            key={product.name + product.id}
          >
            <View style={styles.mediaImageContainer}>
              <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text
                style={[styles.text, styles.subText]}
                onPress={() =>
                  navigation.navigate(WAITDETAIL, { product, profile })
                }
              >
                {product.name}
              </Text>
            </View>
          </TouchableOpacity>
        ));
    }

    if (user && listofrents.length !== 0 && listofrents[0].length !== 0) {
      myRent = listofrents[0]
        .filter(
          (product) =>
            product.tenant.user.id === user.user_id &&
            product.end_datetime === null
        )
        .map((product) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(RENTDETAIL, { product, profile })
            }
            key={product.product.name + product.product.id}
          >
            <View style={styles.mediaImageContainer}>
              <Image
                source={{ uri: product.product.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ));
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              names="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>
            <Ionicons names="md-more" size={24} color="#52575D"></Ionicons>
          </View>

          <View style={{ alignSelf: "center", alignItems: "center" }}>
            {!profile.user ? (
              <Text>You Should Login</Text>
            ) : (
              <>
                <Icon
                  name="camera"
                  onPress={() => navigation.navigate(CAMERA, { profile })}
                  size={45}
                  style={{ marginTop: -25, marginLeft: -290 }}
                />
                <Text
                  style={[
                    styles.text,
                    { fontWeight: "200", fontSize: 10, marginLeft: -290 },
                  ]}
                >
                  Scan Qr
                </Text>
                <View style={styles.profileImage}>
                  <Thumbnail
                    source={{ uri: profile.avatar }}
                    style={styles.image1}
                    resizeMode="center"
                  />
                </View>
                <View style={styles.infoContainer}>
                  <Text
                    style={[styles.text, { fontWeight: "200", fontSize: 36 }]}
                  >
                    {profile.user.first_name}
                  </Text>
                  <Text
                    style={[styles.text, { fontWeight: "200", fontSize: 36 }]}
                  >
                    {profile.user.last_name}
                  </Text>
                </View>
                <View style={styles.statsContainer}>
                  <View style={styles.statsBox}>
                    <Text
                      style={[styles.text, { fontWeight: "200", fontSize: 24 }]}
                    >
                      {myProduct.length}
                    </Text>
                    <Text style={[styles.text, styles.subText]}>Products</Text>
                  </View>
                  <View
                    style={[
                      styles.statsBox,
                      {
                        borderColor: "#DFD8C8",
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                      },
                    ]}
                  >
                    <Text
                      style={[styles.text, { fontWeight: "200", fontSize: 24 }]}
                    >
                      {myWaiting.length}
                    </Text>
                    <Text style={[styles.text, styles.subText]}>
                      Waiting to Accept
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.statsBox,
                      {
                        borderColor: "#DFD8C8",
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                      },
                    ]}
                  >
                    <Text
                      style={[styles.text, { fontWeight: "200", fontSize: 24 }]}
                    >
                      {myRent.length}
                    </Text>
                    <Text style={[styles.text, styles.subText]}>
                      Rented Products
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>

          <View style={{ marginTop: 32 }}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: "200",
                  fontSize: 24,
                  marginBottom: 20,
                },
              ]}
            >
              My Products
            </Text>
            <CreateProduct />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {myProduct}
            </ScrollView>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: "200",
                  fontSize: 24,
                  marginBottom: 20,
                },
              ]}
            >
              Waiting to Accept
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {myWaiting}
            </ScrollView>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: "200",
                  fontSize: 24,
                  marginBottom: 20,
                },
              ]}
            >
              Rented Products
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {myRent}
            </ScrollView>
          </View>
          <LogoutButton />
        </ScrollView>
        <Modal transparent={true} visible={this.state.show}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 50,
                padding: 40,
                borderRadius: 10,
              }}
            >
              <Text>Do you want to Delete ( {this.state.product_name} ) </Text>
              <Button
                title="Delete"
                danger
                onPress={() => {
                  this.props.Delete(this.state.product);
                  this.setState({ show: false });
                }}
              />
              <Button
                title="close"
                onPress={() => {
                  this.setState({ show: false });
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({
  profile,
  allproducts,
  listofrents,
  user,
  listofwaiting,
}) => ({
  profile,
  allproducts,
  listofrents,
  user,
  listofwaiting,
});
const mapDispatchToProps = { getProfile, Delete };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
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
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 150,
    overflow: "hidden",
    marginBottom: 30,
    marginLeft: 20,
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
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
