import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon,Input } from "react-native-elements";


export default function addFormularioEst() {
  return (
    <ScrollView style={styles.viewBody}>
    
      <Text style={styles.textTitle}>Integrarse Estudiante  actividad{"\n"}</Text>
    
      
     <View>
      <Text style={styles.textoutput}>No. Contro: </Text>
      <Input  style={styles.input } placeholder='Numero control...'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />
     <Text style={styles.textoutput}>Nombre: </Text>
     <Input  style={styles.input } placeholder='Nomber Estudiante..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />

      <Text style={styles.textoutput}>Clave Curso: </Text>
     <Input  style={styles.input } placeholder='Clave del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />
       <Text style={styles.textoutput}>Nombre del Curso: </Text>
     <Input  style={styles.input } placeholder='Nombre del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />

     <Text style={styles.textoutput}>Horario y fecha del Curso: </Text>
     <Input  style={styles.input } placeholder='Horario y fecha del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />  
        
      </View>
      <Text></Text>
      <View style={styles.viewBtn}>
        <Button
          title="Registrarse en actividad"
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
      
      margin: 10,
      height: 10,
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: '#2980B9' ,
     
   },
   
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      color:"#2980B9",
      fontWeight: "bold",
    },
    btnAddDepartamento: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#00BCD4"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center"
    }
  });