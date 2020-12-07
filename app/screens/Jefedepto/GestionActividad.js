import React from "react";
import { StyleSheet, View, ScrollView, Text, Alert,TouchableOpacity } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GestionActividad() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>GESTIONAR ACTIVIDADES COMPLEMENTARIAS</Text>

      <View style={styles.viewBtn}>
        <Button
          title="Agregar Actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-actividad")}
        />
      </View>
      <Text > {"\n"} </Text>
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() => alertItemName(item)}>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.title+"\n actualizar  borrar ")
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
    color:"green",
    fontWeight: "bold"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#48C9B0"
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
    title: "Actividad 1",
    icon: "account"
  },
  {
    title: "Actividad 2",
    icon: "account-outline"
  }
];