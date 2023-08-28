import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    marginTop: 20,
    width: "100%",
  },
  avatarWrapperEven: {
    paddingRight: 16,
  },
  avatarWrapperOdd: {
    paddingLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    rowGap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  contentEven: {
    borderTopRightRadius: 20,
  },
  contentOdd: {
    borderTopLeftRadius: 20,
  },
  text: {
    color: "#212121",
    fontSize: 13,
  },
  date: {
    color: "#bdbdbd",
    fontSize: 10,
  },
});
