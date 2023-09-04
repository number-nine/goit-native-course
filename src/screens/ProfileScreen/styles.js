import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 150,
    width: "100%",
  },
  main: {
    width: "100%",
  },
  postsContainer: {
    width: "100%",
    rowGap: 32,

    paddingTop: 32,
    paddingBottom: 32,
  },
  avatar: {
    position: "absolute",
    top: -44,
    // left: 0,
  },
  author: {
    marginTop: 92,
    fontSize: 30,
    color: "#212121",
  },
  logout: {
    position: "absolute",
    top: 22,
    right: 16,
    width: 24,
    height: 24,
  },
});
