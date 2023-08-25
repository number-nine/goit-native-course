import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingBottom: 34,
    paddingTop: 9,

    borderTopColor: "rgba(33, 33, 33, 0.3)",
    borderTopWidth: 1,
  },

  button: {
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  controlWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});

