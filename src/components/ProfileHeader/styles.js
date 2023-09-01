import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    position: "relative",
   
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 150,
    paddingBottom: 32,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    width: 24,
    height:24,
  },
});
