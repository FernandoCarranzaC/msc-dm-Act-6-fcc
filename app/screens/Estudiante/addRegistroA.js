import React from "react";
import { StyleSheet, View, ScrollView, Text, Alert,TouchableOpacity } from "react-native";
import { Button, ListItem, Icon,Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function addRegistro() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>REGISTRARSE EN ACTIVIDADES</Text>
     
      <Text style={styles.textsubTitle}>Inscríbete en Actividad... </Text>
      <View style={styles.viewBtn}>
     
      </View>
    
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate("add-FormularioEst")}>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertRegistro = (item) => {
  Alert.alert("Registrado en:\n" +item.title)
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"#2980B9",
    fontWeight: "bold"
  },
  textsubTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
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

const list = [
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Brigada de Ecología 2",
    icon: "biathlon"
  },
  {
    title: "Taller de lectura 3",
    icon: "book-open-variant"
  },
  {
    title: "Brigada de Rescate 4",
    icon: "hospital-box"
  },
  {
    title: "Basquet ball 5",
    icon: "tennis-ball"
  }
];