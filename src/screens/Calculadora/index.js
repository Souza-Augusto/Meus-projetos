import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Container } from "../../components";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";

export default function app() {
  const [resultado, setResultado] = useState("0");
  const [parteResultado, setParteResultado] = useState([]);

  const [mudarCor, setMudarCor] = useState(false);

  function calcular(button) {
    if (
      resultado === "Operação inválida." &&
      (button !== "." ||
        button !== "=" ||
        button !== "+" ||
        button !== "-" ||
        button !== "x" ||
        button !== "÷" ||
        button !== "c")
    ) {
      setResultado(button);
      setParteResultado([]);
    }

    if (button === "c") {
      setResultado("0");
      setParteResultado([]);
      return;
    }
    if (resultado.indexOf(".") > 0 && button === ".") {
      setResultado((prev) => prev.replace(".", ""));
      return;
    }
    if (resultado.indexOf(".") === 0) {
      setResultado((prev) => prev.replace(".", ""));
      return;
    }
    if (button === "=") {
      setParteResultado((prev) => {
        let prevAux = resultado !== "" ? [...prev, resultado] : prev;

        prevAux = prevAux.map((item) => {
          if (item === "x") return "*";
          if (item === "÷") return "/";
          return item;
        });

        if (
          prevAux[prevAux.length - 1] === "/" ||
          prevAux[prevAux.length - 1] === "*" ||
          prevAux[prevAux.length - 1] === "+" ||
          prevAux[prevAux.length - 1] === "-"
        ) {
          prevAux = prevAux.slice(0, -1);
        }

        try {
          prevAux = [eval(prevAux.join(""))];
        } catch (error) {
          setResultado("Operação inválida.");
          setParteResultado([]);
          console.log(error);
        }

        return prevAux;
      });
      setResultado("");
      return;
    }

    if (
      (parteResultado.length <= 0 && resultado === "0" && button === "+") ||
      (parteResultado.length <= 0 && resultado === "0" && button === "÷") ||
      (parteResultado.length <= 0 && resultado === "0" && button === "*")
    ) {
      return;
    }

    if (button === "+" || button === "-" || button === "x" || button === "÷") {
      if (
        parteResultado >= 0 &&
        (parteResultado[parteResultado.length - 1] === "+" ||
          parteResultado[parteResultado.length - 1] === "-" ||
          parteResultado[parteResultado.length - 1] === "x" ||
          parteResultado[parteResultado.length - 1] === "÷")
      ) {
        return;
      }

      if (
        (resultado === "" && button === "+") ||
        (resultado === "" && button === "-") ||
        (resultado === "" && button === "÷") ||
        (resultado === "" && button === "x")
      )
        return;
      setParteResultado((prev) => [...prev, resultado, button]);
      setResultado("");
      return;
    }
    if (resultado === "0" && button !== ".") {
      setResultado(button);
      return;
    }

    if (parteResultado[0] === 0 && button && button !== ".") {
      setResultado(button);
      setParteResultado([]);
      return;
    }

    setResultado((prev) => prev + button);
  }
  console.log("Resultado:", resultado);
  console.log("parteResultado:", parteResultado);
  return (
    <Container barColor="#363636" style={styles.Container}>
      <View style={styles.ContainerResposta}>
        <View style={styles.TelaResultado}>
          <Text adjustsFontSizeToFit style={styles.Resultado}>
            {parteResultado.map((value) => value)}
            {resultado}
          </Text>
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          onPress={() => calcular("c")}
          title="C"
          style={[styles.NumericButton, styles.CleanButton]}
        />
        <Button
          onPress={() => calcular("÷")}
          title="÷"
          style={[styles.NumericButton, styles.ButtonOperador]}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          onPress={() => calcular("7")}
          title="7"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("8")}
          title="8"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("9")}
          title="9"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("x")}
          title="x"
          style={[styles.NumericButton, styles.ButtonOperador]}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          onPress={() => calcular("4")}
          title="4"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("5")}
          title="5"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("6")}
          title="6"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("-")}
          title="-"
          style={[styles.NumericButton, styles.ButtonOperador]}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          onPress={() => calcular("1")}
          title="1"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("2")}
          title="2"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("3")}
          title="3"
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("+")}
          title="+"
          style={[styles.NumericButton, styles.ButtonOperador]}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          onPress={() => calcular("0")}
          title="0"
          style={[styles.NumericButton, styles.ButtonZero]}
        />
        <Button
          onPress={() => calcular(".")}
          title="."
          style={styles.NumericButton}
        />
        <Button
          onPress={() => calcular("=")}
          title="="
          style={[styles.NumericButton, styles.ButtonOperador]}
        />
      </View>
    </Container>
  );
}
