import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#191970",
  },
  Title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  ButtonContainer: {
    flex: 1,
    backgroundColor: "#483D8B",
    flexDirection: "row",
    alignItems: "center",
  },
  ProjectButton: {
    flex: 1,
    margin: 20,
    height: "25%",
    backgroundColor: "#191970",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonTitle: {
    fontSize: 20,
  },
});

export default styles;
