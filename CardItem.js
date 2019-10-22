import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = props => {
  return <View style={styles.cardItemStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardItemStyle: {
    marginBottom:10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
});

export default CardItem;
