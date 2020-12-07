import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Instructor from "../screens/Instructor/Instructor";

const Stack = createStackNavigator();

export default function InstructorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="instructores"
        component={Instructor}
        options={{ title: "Instructores" }}
      />
    </Stack.Navigator>
  );
}
