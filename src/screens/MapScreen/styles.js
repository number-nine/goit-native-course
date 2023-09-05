import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
