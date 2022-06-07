import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./styles";
export default function Home() {
  const navigation = useNavigation();
  return (
    <Container barColor="#191970" style={styles.Container}>
      <Text style={styles.Title}>Meus projetos</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calculadora")}
          style={styles.ProjectButton}
        >
          <Icon name="calculator" size={80} />
          <Text style={styles.ButtonTitle}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Esse projeto ainda não está finalizado.")}
          style={styles.ProjectButton}
        >
          <Icon name="login" size={80} />
          <Text style={styles.ButtonTitle}>Tela de login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
