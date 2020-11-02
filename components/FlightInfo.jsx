import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { showInfo } from '../redux/actions';
import { likeFlight } from '../redux/actions';
import { GradientLine } from './GradientLine';
import { Carousel } from './Carousel';
import { SvgMore } from './SvgMore';
import { SvgHeart } from './SvgHeart';

const { height, width } = Dimensions.get('window');
export const FlightInfo = () => {
  const currentFlight = useSelector(state => state.currentFlight);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/flightInfo.png')}>


        <View style={styles.flightCard}>
          <View style={styles.header}>
            <View >
              <Text style={styles.headerSmallFont}>{currentFlight.departureDate}</Text>
              <Text style={styles.headerBigFont}>{currentFlight.departurePort}</Text>
              <Text style={styles.headerSmallFont}>{currentFlight.departureCity}</Text>
            </View>
            <View >
              <SvgMore style={styles.headerMore} />
            </View>
            <View >
              <Text style={styles.headerSmallFont}>{currentFlight.arriveTime}</Text>
              <Text style={styles.headerBigFont}>{currentFlight.arrivePort}</Text>
              <Text style={styles.headerSmallFont}>{currentFlight.arriveCity}</Text>
            </View>
            <View style={styles.heartContainer}>
              <SvgHeart
                isLiked={currentFlight.isLiked}
                onPress={() => dispatch(likeFlight(currentFlight))}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => { dispatch(showInfo(currentFlight)) }}
            // activeOpacity={1}
          >
            <GradientLine myStyles={styles.gradientLine}>
              <View style={styles.flexCenter}>
                <Text style={styles.smallFont}>Price</Text>
                <Text style={styles.bigFont}>{currentFlight.price} ₽</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.flexCenter}>
                <Text style={styles.smallFont}>Boarding</Text>
                <Text style={styles.bigFont}>{currentFlight.departureTime}</Text>
              </View>
            </GradientLine>
          </TouchableOpacity>
          <Carousel />
          {/* <Button title='back'  /> */}
        </View>

      </ImageBackground>
    </View >
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
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  flightCard: {
    width: '100%',
    minHeight: '55%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 25,
    justifyContent: 'flex-end'
  },
  gradientLine: {
    flexDirection: 'row',
    flexGrow: 1,
    minHeight: 50,
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
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
    letterSpacing: -0.408,
    fontSize: 13,
    color: '#fff'
  },
  bigFont: {
    letterSpacing: -0.408,
    fontSize: 20,
    lineHeight: 22,
    color: '#fff',
    letterSpacing: -0.408,
    fontSize: 13,
    fontWeight: '600'
  },
  headerSmallFont: {
    letterSpacing: -0.408,
    fontSize: 13,
    color: '#878787'
  },
  headerBigFont: {
    letterSpacing: -0.408,
    fontWeight: '600',
    fontSize: 36,
    color: '#000'
  },
  heartContainer: {
    position: 'absolute',
    right: -5,
    top: -5
  },
})
