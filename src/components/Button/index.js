import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({ ...props }) {
  return (
    <TouchableOpacity {...props} style={[styles.Container, props?.style]}>
      <Text style={[styles.ButtonTitle, props?.TitleStyle]}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
}
