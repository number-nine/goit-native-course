import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    bottom: 14,
    right: -12,
    flex: 1,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 12,
  },
});
