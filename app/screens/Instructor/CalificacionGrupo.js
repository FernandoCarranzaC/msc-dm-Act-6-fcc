import React from "react";
import { StyleSheet, View,ScrollView, Text, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon, CheckBox,Input  } from "react-native-elements";


export default function AsistenciaGrupo() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <View>
      <Text style={styles.textTitle}>Califica Grupo</Text>
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() =>alertItemactividad(item,i) }>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <Input  placeholder='Calificación...'/>
          </ListItem.Content>
         
        </ListItem>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
}

const alertItemactividad = (item,i) => {
  Alert.alert(item.title+"\n Califica...")
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
    icon: "clipboard-account"
  },
  {
    title: "Edgar",
    icon: "clipboard-account"
  },
  {
    title: "Fernando",
    icon: "clipboard-account"
  },
  {
    title: "Juan Carlos",
    icon: "clipboard-account"
  },
  {
    title: "Ramón",
    icon: "clipboard-account"
  },
  
];