import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Estudiante_Imagen() {
  return (
    <View style={styles.viewBtn}>
       <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{student}' }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

   btnStyle: {
    backgroundColor: "#00a680"
  },
  
  viewBtn: {
   
    alignItems: "center"
  },
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20,
   
  }
});