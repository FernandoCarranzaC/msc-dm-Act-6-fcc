import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estudiante from "../screens/Estudiante/Estudiante";

const Stack = createStackNavigator();

export default function EstudianteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="estudiante"
        component={Estudiante}
        options={{ title: "Estudiante" }}
      />
    </Stack.Navigator>
  );
}
