import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Intructor() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Gestion Instructor</Text>

      <View style={styles.viewBtn}>
        <Button
          title="Cursos Asignados"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("cursos-instructor")}
        />
      </View>
      
      <Text ></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Listas de Asistencia"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("asistencia-instructor")}
        />
      </View>
      <Text ></Text>
      <View style={styles.viewBtn}>
       <Button
         title="Califica Alumnos"
         buttonStyle={styles.btnStyle}
         containerStyle={styles.btnContainer}
         onPress={() => navigation.navigate("calificacion-instructor")}
       />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0
  },
  division:{
    fontSize: 5,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"#B9770E"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#D4AC0D"
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});