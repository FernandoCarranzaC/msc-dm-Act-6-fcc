import React from "react";
import { StyleSheet, View,ScrollView, Text, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


export default function CalificacionInstructor() {
    const navigation = useNavigation();
    return (
   
    <ScrollView centerContent={true} style={styles.viewBody}>
    <View>
      <Text style={styles.textTitle}>Calificaciones de Grupos</Text>
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate("calificacion-grupo")}>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
}

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Horario")
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"#B9770E"
  }
});

const list = [
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Basketball",
    icon: "basketball"
  },
  {
    title: "Voleibol",
    icon: "volleyball"
  },
  {
    title: "Futbol",
    icon: "soccer"
  },
  {
    title: "Americano",
    icon: "football"
  },
  
];
