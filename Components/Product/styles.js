import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    opacity: 1,
    textAlign: "center",

    textShadowColor: "rgb(220,220,220)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    opacity: 1,
    textAlign: "center",

    textShadowColor: "rgb(220,220,220)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  ItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 200,
    flexDirection: "row",
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1,
  },
  background: {
    width: null,
    flex: 1,
  },
});
export default styles;
