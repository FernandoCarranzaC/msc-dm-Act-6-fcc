import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {  Avatar } from 'react-native-elements'


export default function addCategoria() {
  return (

   

    <ScrollView style={styles.viewBody}>


      <View>
      <Text style={styles.textTitle}>AÑADIR CATEGORIA{"\n"}</Text>
      </View>
      
     <View>
      <Text style={styles.textoutput}>CLAVE CATEGORIA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona clave de la categoría..."
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DE LA CATEGORÍA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre de la categoría..."
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"
          onChangeText = {handleNombreCategoria}
           autoCapitalize='characters' 
      /> 
      
      </View>
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Categoria"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>

  
    </ScrollView>


  );
}




var clave,nombreCategoria

var handleClave = (text) => {
  clave= text 
}
var handleNombreCategoria = (text) => {
  nombreCategoria= text 
}


const showAlert = () =>{
  Alert.alert(
     'Categoria agregada...'+clave+' '+nombreCategoria
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
      borderColor: '#F1C40F',
      borderWidth: 1,
      color: 'maroon' ,
      
   },
   
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      color:"maroon",
      fontWeight: "bold",
    },
    btnAddDepartamento: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#CA6F1E"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center"
    }
  });