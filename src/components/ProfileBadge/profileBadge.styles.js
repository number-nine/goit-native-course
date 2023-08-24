import { StyleSheet } from "react-native";

const profileBadgeStyles = StyleSheet.create({
  wrapper: {
    width: 171,
    height: 60,
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  photo: {
    width: 60,
    borderRadius: 16,
  },
  info: {
    paddingLeft: 8,
  },
  name: {
    fontSize: 13,
    color: "#212121",
    fontWeight: 600,
  },
  email: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default profileBadgeStyles;
