import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Subdirectores from "../screens/Subdirector/Subdirector";

const Stack = createStackNavigator();

export default function MateriaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="subdirectores"
        component={Subdirectores}
        options={{ title: "Subdirectores" }}
      />
    </Stack.Navigator>
  );
}
