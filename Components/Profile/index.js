import React, { Component } from "react";
import { Text, View, Button, Thumbnail } from "native-base";
import { StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
// Components
import LogoutButton from "./LogoutButton";
import CreateProduct from "../CreateProduct";
import { getProfile } from "../../redux/actions";
import { RENT, CAMERA } from "../../Navigation/screenNames";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import styles from "../CreateProduct/styles";
// import styles from "../CreateProduct/styles";
class Profile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const { profile, navigation } = this.props;

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
            {/* {!profile.user ? (
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
                <Button full info onPress={() => navigation.navigate(CAMERA)}>
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

            <LogoutButton /> */}
          </View>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Thumbnail
                source={require("../../assets/4.jpg")}
                style={styles.image1}
                resizeMode="center"
              />
            </View>
            {/* <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </View> */}
            <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                test
              </Text>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                Programmer :D
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                <Text
                  style={[styles.text, { fontWeight: "200", fontSize: 24 }]}
                >
                  10
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
                  20
                </Text>
                <Text style={[styles.text, styles.subText]}>
                  Rented Products
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/1.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/2.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/3.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile,
});
const mapDispatchToProps = { getProfile };
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
    marginLeft: 100,
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
