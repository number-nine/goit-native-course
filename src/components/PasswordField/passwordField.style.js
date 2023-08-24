import { StyleSheet } from "react-native";

const passwordFieldStyles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "row",
  },
  switch: {
    flex: 1,
    height: 50,
    position: "absolute",
    top: 0,
    right: 10,
    justifyContent: "center",
  },
  text: {
    color: "#1B4371",
  },
  input: {},
});

export default passwordFieldStyles;
