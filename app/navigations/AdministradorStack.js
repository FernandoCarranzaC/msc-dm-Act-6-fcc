import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Administrador from "../screens/Administrador/Administrador";


const Stack = createStackNavigator();

export default function AdministradorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="administrador"
        component={Administrador}
        options={{ title: "Administrador" }}
      />
    </Stack.Navigator>
  );
}
