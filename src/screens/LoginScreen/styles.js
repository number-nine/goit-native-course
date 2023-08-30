import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
    position: "relative",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 111,

    backgroundColor: "#ffffff",

    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
marginBottom:16,
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
