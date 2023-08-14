import { StyleSheet } from "react-native";

const passwordFieldStyles = StyleSheet.create({
  input: {
    position: "relative",
  },
  switch: {
    height: 50,
    position: "absolute",
    right: 10,
    // top: "50%",
    // transform: [{ translateY: 8}],
    backgroundColor: "#ff0000",
    borderWidth: 0,
  },
});

export default passwordFieldStyles;
