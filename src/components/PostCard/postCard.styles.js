import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
    rowGap: 8,
  },
  photo: {
    width: "100%",
  },
  title: { fontSize: 16, fontWeight: 500 },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  detailsItem: {
    flexDirection: "row",
    columnGap: 4,
  },
  detailsCaption: {
    color: "#212121",
    fontSize: 16,
  },
});
