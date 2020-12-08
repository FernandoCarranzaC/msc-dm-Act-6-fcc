import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estudiante from "../screens/Estudiante/Estudiante";
import actividadCursada from "../screens/Estudiante/actividadCursada";
import addRegistroA from "../screens/Estudiante/addRegistroA";
import constultaActividad from "..//screens/Estudiante/consultaActividad";

const Stack = createStackNavigator();

export default function EstudianteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="estudiante"
        component={Estudiante}
        options={{ title: "Estudiante" }}
      />
      
      <Stack.Screen
        name="constulta-Actividad"
        component={constultaActividad}
        options={{ title: "Constulta actividades" }}
      />
      <Stack.Screen
        name="add-RegistroA"
        component={addRegistroA}
        options={{ title: "Registrar Actividad" }}
      />
       <Stack.Screen
        name="actividad-Cursada"
        component={actividadCursada}
        options={{ title: "Arcividad Cursada" }}
      />
       
       
    </Stack.Navigator>
  );
}
