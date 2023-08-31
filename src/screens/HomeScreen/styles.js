import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tabBarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",

    paddingTop: 9,
    paddingBottom: 34,
    height: 83,

    borderTopColor: "rgba(33, 33, 33, 0.3)",
    borderTopWidth: 1,

    // backgroundColor:'yellow',
  },
  tabBarItemWrapper: {},

  profileHeader: {
    // position: "relative",
    // flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#ffffff",
    // height: 275,
    // marginTop: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,

    borderColor: "#000000",
    borderWidth: 1,
    
  },

  footerButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
