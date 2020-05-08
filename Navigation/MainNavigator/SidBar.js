import React from "react";
import {
  ScrollView,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { View } from "native-base";

export default function SidBar(props) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/bb.jpg")}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <Image source={require("../../assets/kk.png")} style={styles.profile} />
        <Text style={styles.name}>JARAK</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.fullName}> HAy how are You</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  fullName: {
    fontSize: 13,
    marginRight: 4,
  },
});
