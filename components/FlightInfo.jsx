import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { showInfo } from '../redux/actions';


export const FlightInfo = () => {

  const flight = useSelector(state => state.currentFlight);
  const dispatch = useDispatch();
  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/flightInfo.png')}
      >
        <View style={styles.flightContent}>

        </View>
        {/* <Text style={styles.text}>from:{flight.from}</Text>
        <Text style={styles.text}>to:{flight.to}</Text>
        <Text style={styles.text}>date:{flight.date}</Text>
        <Button title='back' onPress={() => { dispatch(showInfo(flight.currentFlight)) }} /> */}
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center'
  },
  image: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-end'
  },
  flightContent: {
    width: '100%',
    height: '55%',
    backgroundColor: '#fff',
    borderRadius: 40,
  }
})
