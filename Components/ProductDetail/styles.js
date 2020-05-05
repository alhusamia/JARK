import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 250,
  },

  Container: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  infoDescription: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoName: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  ItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 0.5,
    borderRadius: 10,
    width: 500,
  },
  buttons: {
    backgroundColor: "#5dbcd2", 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 400,
  },
  buttons1: {
    backgroundColor: "#2c1787",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 400,
    marginBottom: 80,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
  },
  text1: {
    color: "#000000",
    fontSize: 24,
  },
  hairline: {
    backgroundColor: "#A2A2A2",
    height: 2,
    width: 1000,
  },
});

export default styles;
