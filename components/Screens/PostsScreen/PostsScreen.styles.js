import { StyleSheet } from "react-native";

const PostsScreenStyles = StyleSheet.create({
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
    headerWrapper: {

        alignItems:"center",
        width: "100%",
        borderBottomColor: "rgba(33, 33, 33, 0.3)",
        borderBottomWidth: 1,
        paddingBottom: 11,
        paddingTop:55,
        
    },
    screenWrapper: {
        width: "100%",
        flex: 1,
        justifyContent:"space-between"
    },

  button: {
    marginTop: 27,
  },
 
});

export default PostsScreenStyles;