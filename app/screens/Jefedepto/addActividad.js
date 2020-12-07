import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";

export default function addActividad() {
  return (
    <ScrollView style={styles.viewBody}>
      <View>
      <Text style={styles.textTitle}>AGREGAR ACTIVIDAD COMPLEMENTARIA{"\n"}</Text>
      </View>
      
     <View>
      <Text style={styles.textoutput}>CLAVE DEL GRUPO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona la clave del Grupo de Actividad..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleClaveG}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>CATEGORÍA DE LA ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Selecciona la Categoría de la actividad ..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleCategoria}
           autoCapitalize='characters' 
      /> 
         <Text style={styles.textoutput}>NOMBRE DE LA ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Escribe el nombre de la actividad ..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleNombreA}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>INSTRUCTOR: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Nombre del Instructor..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleInstructorA}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>HORARIO</Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Horario de la Actividad..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleHorario}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>PERIODO DE LA ACTIVIDAD</Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Periodo de la Actividad..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handlePeriodo}
           autoCapitalize='characters' 
      /> 
      </View>
      <Text style={styles.textoutput}>APERTURA DE LA ACTIVIDAD</Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Apertura departamental o institucioal..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleApertura}
           autoCapitalize='characters' 
      /> 
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>
    </ScrollView>
  );
}

var claveG,categoria, nombreA,instructorA,horario,periodo,apertura

var handleClaveG = (text) => {
  claveG= text 
}
var handleCategoria = (text) => {
    categoria= text 
}
var handleNombreA = (text) => {
    nombreA= text 
}
var handleInstructorA = (text) => {
    instructorA= text 
}  
var handleHorario = (text)=> {
    horario=text
}

var handlePeriodo = (text) => {
  periodo= text 
}
var handleApertura = (text) => {
  apertura= text 
}


const showAlert = () =>{
  Alert.alert(
     'Actividad  Añadira...'+nombreA
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
