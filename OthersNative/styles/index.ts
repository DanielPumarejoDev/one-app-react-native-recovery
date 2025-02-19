import { StyleSheet } from "react-native";

export const stylesOth = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  textMedium: {
    fontSize: 16,
  },
  textBold: {
    fontWeight: "600",
  },
  textLight: {
    fontWeight: "200",
  },
  screenSpace: {
    display: "flex",
    padding: 12,
  },
  contentNavigation: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  listNavigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  listWrapper: {
    borderRadius: 8,
    padding: 6,
  },
  textError: {
    color: "#FF4F4F",
  },
});
