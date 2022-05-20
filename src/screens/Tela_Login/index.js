import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaPhone } from "../helpers/validate/schemaPhone";
export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSendForm() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Campo obrigatório")
          .min(6, "O nome deve possuir no minimo 6 caracteres"),
        phone: Yup.string()
          .matches(schemaPhone)
          .required("Campo número obrigatório"),
      });

      await schema.validate({ name, phone });
      Alert.alert("Passou");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="nome"
        value={name}
        onChangeText={setName}
        style={{ borderColor: "black", width: 250, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="phone"
        value={phone}
        onChangeText={setPhone}
        style={{ borderColor: "black", width: 250, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="email"
        value={name}
        onChangeText={setName}
        style={{ borderColor: "black", width: 250, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="message"
        value={name}
        onChangeText={setName}
        style={{ borderColor: "black", width: 250, padding: 5, borderWidth: 1 }}
      />
      <Button title="Enviar" onPress={handleSendForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
