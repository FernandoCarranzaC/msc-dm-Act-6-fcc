import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function addPersonal() {
  return (
    <ScrollView style={styles.viewBody}>
      <View>
      <Text style={styles.textTitle}>AÑADIR PERSONAL{"\n"}</Text>
      </View>
      
     <View>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona el número de tarjeta..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL PERSONAL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre del personal..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleNombrePersonal}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SELECCIONA DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Clave del departamento a que pertenece..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
      </View>
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Personal"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>
    

    </ScrollView>


  );
}




var clave,nombrePersonal,departamento

var handleClave = (text) => {
  clave= text 
}
var handleNombrePersonal = (text) => {
  nombrePersonal= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}


const showAlert = () =>{
  Alert.alert(
     'Personal Añadido...'+clave+' '+nombrePersonal+' '+departamento
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
      borderColor: 'lime',
      borderWidth: 1,
      color: 'green' ,
      
   },
   
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      color:"green",
      fontWeight: "bold",
    },
    btnAddDepartamento: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#48C9B0"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center"
    }
  });