import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Jefesdeptos from "../screens/Jefedepto/Jefedepto";

const Stack = createStackNavigator();

export default function JefedeptoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jefesdeptos"
        component={Jefesdeptos}
        options={{ title: "Jefes de Departamentos" }}
      />
    </Stack.Navigator>
  );
}
