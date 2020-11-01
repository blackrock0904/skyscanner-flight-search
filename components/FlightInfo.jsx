import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GradientLine } from './GradientLine';
import { showInfo } from '../redux/actions';
import { Carousel } from './Carousel';

const { height, width } = Dimensions.get('window');

export const FlightInfo = () => {

  const currentFlight = useSelector(state => state.currentFlight);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/flightInfo.png')}>
        <View style={styles.flightCard}>
          <GradientLine myStyles={styles.gradientLine}>
            <View style={styles.flexCenter}>
              <Text>Price</Text>
              <Text>{currentFlight.price} ₽</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.flexCenter}>
              <Text>Boarding</Text>
              <Text>{currentFlight.time}</Text>
            </View>
          </GradientLine>
          <Carousel />   
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
    width,
    height,
  },
  image: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-end'
  },
  flightCard: {
    width: '100%',
    minHeight: '55%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 30,
  },
  gradientLine: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 80,
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height:2},
    shadowRadius: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#fff'
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallFont: {

  },
  bigFont: {

  }
})
