import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Jefedeptos from "../screens/Jefedepto/Jefedepto";
import GestionPersonal from "../screens/Jefedepto/GestionPersonal";
import GestionActividad from "../screens/Jefedepto/GestionActividad";
import addActividad from "../screens/Jefedepto/addActividad";
import addPersonal from "../screens/Jefedepto/addPersonal";


const Stack = createStackNavigator();

export default function JefedeptoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jefesdeptos"
        component={Jefedeptos}
        options={{ title: "Jefes de Departamentos" }}
      />
      <Stack.Screen
        name="gestion-personal"
        component={GestionPersonal}
        options={{ title: "Volver Jefes de Departamento" }}
      />
      <Stack.Screen
        name="gestion-actividad"
        component={GestionActividad}
        options={{ title: "Volver Jefes de Departamento" }}
      />
       <Stack.Screen
        name="add-actividad"
        component={addActividad}
        options={{ title: "Volver Gestión de Departamento" }}
      />
       <Stack.Screen
        name="add-personal"
        component={addPersonal}
        options={{ title: "Volver Administrador" }}
      />
    </Stack.Navigator>
  );
}
