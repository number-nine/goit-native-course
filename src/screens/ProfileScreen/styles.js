import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    // flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    // rowGap: 16,
    // position: "relative",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    marginTop:92,
    // paddingTop: 92,
    // paddingBottom: 45,

    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -44,
  },
  button: {
    marginTop: 27,
  },
  back: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
});
