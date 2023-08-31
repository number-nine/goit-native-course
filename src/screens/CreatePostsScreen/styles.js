import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 1,
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  photoWrapper: {
    position: "relative",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
  photo: {
    width: "100%",
  },
  photoButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
    color: "#bdbdbd",
  },
  title: {
    marginTop: 32,
  },
  location: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
  },
});
