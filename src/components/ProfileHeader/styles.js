import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  main: {
    flex: 1,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 32,
    marginBottom: 32,
  },
  postsContainer: {
    rowGap: 32,
  },
  avatar: {
    position: "absolute",
    top: -44,
    left: 0,
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
  },
});
