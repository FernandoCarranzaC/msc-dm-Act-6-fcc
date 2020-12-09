import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Estudiante() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Estudiante</Text>
        
     <View style={styles.viewBtn}>
       <Button
         title="Consultar Actividades"
         buttonStyle={styles.btnStyle}
         containerStyle={styles.btnContainer}
         onPress={() => navigation.navigate("constulta-Actividad")}
       />
     </View>
     <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Registrarse en Actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-RegistroA")}
        />
      </View>
      
      <Text ></Text>
     
      <View style={styles.viewBtn}>
        <Button
          title="Actividades Cursadas"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("actividad-Cursada")}
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
    color:"#2980B9"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00BCD4"
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});

