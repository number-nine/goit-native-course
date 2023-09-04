import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    height: 120,
    borderRadius: 16,
    alignItems: "center",
  },
  button: {
    marginLeft:60,
    position: "absolute",
    bottom: 14,
    left: "50%",
    transform: [{translateX:-12}],
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
});

