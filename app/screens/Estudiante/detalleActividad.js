import React from "react";
import { StyleSheet, View, ScrollView, Text, Alert,TouchableOpacity,Image } from "react-native";
import { Button, ListItem, Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function detalleActividad() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <View>
      <Text style={styles.textsubTitle}>Detalle de la actvidad complementaria ...</Text>
      <Icon  name={"bike"} color={"green"}   type="material-community"/>
      <Text></Text>
      <Text style={styles.textbody}>  Nombre de actividad: </Text>
      <Text style={styles.textbody}>  Instructor: </Text>
      <Text style={styles.textbody}>  Fecha de Impartición: </Text>
      <Text style={styles.textbody}>  Horario: </Text>
      <Text></Text>
      <Avatar style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: 15,
    width: 120,
    height: 120,
    textAlign: "center",

  },
  styleAvatar:{
    textAlign: "center",
  },
  textbody:{
    fontSize: 14,
    color:"black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"#0097A7",
    fontWeight: "bold"
  },
  textsubTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    color:"#2980B9",
    fontWeight: "bold"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00BCD4"
  },
  btnContainer: {
    width: "80%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});