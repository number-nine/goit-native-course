import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
    position: "relative",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 45,

    backgroundColor: "#ffffff",

    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
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

export default LoginScreenStyles;
