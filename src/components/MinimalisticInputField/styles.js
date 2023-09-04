import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    paddingLeft: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
