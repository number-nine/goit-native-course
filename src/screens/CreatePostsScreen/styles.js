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

  container: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    // flex: 1,
    // backgroundColor: "transparent",
    // justifyContent: "flex-end",
    borderRadius: 8,
    overflow: "hidden",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
