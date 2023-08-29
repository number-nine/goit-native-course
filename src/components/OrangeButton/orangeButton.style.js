import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#FF6C00",
  },
  disabled: {
    borderWidth: 0,
    backgroundColor: "#F6F6F6",
  },

  label: {
    color: "#ffffff",
    fontSize:16,
  },
});
