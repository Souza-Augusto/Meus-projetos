import * as React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calculadora, Home } from "../screens";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calculadora"
        component={Calculadora}
        options={{ headerShown: Platform.OS === "ios" ?? false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
