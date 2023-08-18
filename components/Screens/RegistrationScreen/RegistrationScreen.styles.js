import { StyleSheet } from "react-native";

const RegistrationScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "start",
    alignItems: "center",
    rowGap: 16,
    position:"relative",
    width: "100%",
    marginTop: "40%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,

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
});

export default RegistrationScreenStyles;
