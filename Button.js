import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonTex}>{props.children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginBottom:0,
    marginTop:240,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    backgroundColor:'#F6813A',
    
    //backgroundColor:'#F6813A'
  },

  buttonTex: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Button;
