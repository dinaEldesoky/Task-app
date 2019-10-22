import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    flexDirection: 'row-reverse',
    textAlign: 'right',
  },
  label: {
    textAlign: 'right',
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
    color: '#fff',
  },
  input: {
    textAlign: 'right',
    fontSize: 16,
    color: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    flexDirection: 'row-reverse',
  },
});
export default Input;
