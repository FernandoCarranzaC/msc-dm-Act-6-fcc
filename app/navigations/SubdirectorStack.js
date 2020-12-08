import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Subdirector from "../screens/Subdirector/Subdirector";
import addCategoria from "../screens/Subdirector/addCategoria";

const Stack = createStackNavigator();

export default function SubdirectorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="subdirectores"
        component={Subdirector}
        options={{ title: "Subdirectores" }}
      />
      <Stack.Screen
        name="add-categoria"
        component={addCategoria}
        options={{ title: "Volver a Gestionar Cateogrias..." }}
      />
    </Stack.Navigator>
  );
}
