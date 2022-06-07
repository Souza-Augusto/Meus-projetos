import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import styles from "./styles";

export default function Container(props) {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={props?.barStyle ?? "dark-content"}
        backgroundColor={props?.barColor ?? "#fff"}
      />
      <SafeAreaView style={[styles.SafeContainer, props?.style]}>
        <KeyboardAvoidingView
          style={styles.SafeContainer}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          {props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
