import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function addJefe() {
  return (
    <ScrollView style={styles.viewBody}>
      <View>
      <Text style={styles.textTitle}>AÑADIR JEFE DEPARTAMENTAL{"\n"}</Text>
      </View>
      
     <View>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona el número de tarjeta..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre del jefe departamental..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleNombreJefe}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SELECCIONA DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona la clave del departamento de que es jefe..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
      </View>
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Jefe Departamental"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>
    

    </ScrollView>


  );
}



const onDropdownSelected=(e)=> { 
  console.log("THE VAL", e.target.value); 
  //here you will see the current selected value of the select input 
} 

var clave,nombreJefe,departamento

var handleClave = (text) => {
  clave= text 
}
var handleNombreJefe = (text) => {
  nombreJefe= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}


const showAlert = () =>{
  Alert.alert(
     'Departamento Añadido...'+clave+' '+nombreJefe+' '+departamento
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