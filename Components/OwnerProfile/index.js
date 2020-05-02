import React, { Component } from "react";
import { Text, View, Thumbnail } from "native-base";
import { StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { connect } from "react-redux";

// Components
import { Ionicons } from "@expo/vector-icons";
import { getOwnerProfile } from "../../redux/actions";

class OwnerProfile extends Component {
  componentDidMount() {
    this.props.getOwnerProfile(this.props.route.params.product.owner.user.id);
  }

  render() {
    const { user, allproducts, ownerprofile } = this.props;

    console.log(ownerprofile);
    let myProduct = [];
    if (ownerprofile) {
      myProduct = allproducts
        .filter(
          (product) =>
            product.owner.user.id ===
            this.props.route.params.product.owner.user.id
        )
        .map((product) => (
          <View
            style={styles.mediaImageContainer}
            key={product.name + product.id}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="cover"
            ></Image>
            <Text style={[styles.text, styles.subText]}>
              {product.owner.owner}
            </Text>
          </View>
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

          <View style={{ alignSelf: "center", marginLeft: 16 }}>
            {!ownerprofile.user ? (
              <Text>Welcome</Text>
            ) : (
              <>
                <View style={styles.profileImage}>
                  <Thumbnail
                    source={{ uri: ownerprofile.avatar }}
                    style={styles.image1}
                    resizeMode="center"
                  />
                </View>
                <View style={styles.infoContainer}>
                  <Text
                    style={[styles.text, { fontWeight: "200", fontSize: 36 }]}
                  >
                    {ownerprofile.user.first_name}
                  </Text>
                  <Text
                    style={[styles.text, { fontWeight: "200", fontSize: 36 }]}
                  >
                    {ownerprofile.user.last_name}
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
                </View>
              </>
            )}
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView
              style={{ marginLeft: -10 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {myProduct}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ ownerprofile, allproducts, user }) => ({
  ownerprofile,
  allproducts,
  user,
});
const mapDispatchToProps = (dispatch) => ({
  getOwnerProfile: (ProfileID) => dispatch(getOwnerProfile(ProfileID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "HelveticaNeue",
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
    marginLeft: 80,
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
