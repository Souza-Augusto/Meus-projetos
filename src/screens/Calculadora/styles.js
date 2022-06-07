import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContainerResposta: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#363636",
  },
  TelaResultado: {
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    width: "90%",
    height: "90%",
    borderRadius: 20,
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  Resultado: {
    paddingTop: "10%",
    fontSize: 40,
    fontWeight: "bold",
  },
  NumericButton: {
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    margin: 2,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  ButtonOperador: {
    backgroundColor: "#fda316",
  },
  CleanButton: {
    flex: 2,
    backgroundColor: "#696969",
  },
  ButtonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#363636",
    padding: 3,
  },
  ButtonZero: {
    flex: 2.1,
  },
});

export default styles;
