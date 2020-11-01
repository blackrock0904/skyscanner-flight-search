import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlightInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
 
  },
  text: {
    textAlign: 'center'
  }
})
