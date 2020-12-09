import React from "react";
import { StyleSheet, View,ScrollView, Text, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon, CheckBox  } from "react-native-elements";


export default function AsistenciaGrupo() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <View>
      <Text style={styles.textTitle}>Asistencia Grupos</Text>
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() =>alertItemactividad(item,i) }>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <CheckBox  title='Asistencia' 
          checked={"checked"} />
        </ListItem>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
}

const alertItemactividad = (item,i) => {
  Alert.alert(item.title+"\n Asistencia")
  list[i].icon="account-check"
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
    title: "Erick Dalet ",
    icon: "account-check-outline"
  },
  {
    title: "Edgar",
    icon: "account-check-outline"
  },
  {
    title: "Fernando",
    icon: "account-check-outline"
  },
  {
    title: "Juan Carlos",
    icon: "account-check-outline"
  },
  
];
