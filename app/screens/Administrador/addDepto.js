import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";

export default function addDepto() {
  return (
    <ScrollView style={styles.viewBody}>
      <View>
      <Text style={styles.textTitle}>AGREGA DEPARTAMENTO{"\n"}</Text>
      </View>
      
     <View>
      <Text style={styles.textoutput}>CLAVE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona la clave del departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>DEPARTAMENTO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Nombre del departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SUBDIRECCIÓN DEPENDIENTE: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Selecciona subdirección a que pertenece el departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleSubdireccion}
           autoCapitalize='characters' 
      /> 
      </View>
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Añadir departamento"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>
    </ScrollView>
  );
}

var clave,departamento,subdireccion

var handleClave = (text) => {
  clave= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}
var handleSubdireccion = (text) => {
  subdireccion= text 
}


const showAlert = () =>{
  Alert.alert(
     'Departamento Añadido...'+clave+' '+departamento+' '+subdireccion
  )
}


const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: 'blue' ,
      
   },
   
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      color:"blue",
      fontWeight: "bold",
    },
    btnAddDepartamento: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#5DADE2"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center"
    }
  });

