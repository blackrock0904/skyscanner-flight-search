import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GradientLine } from './GradientLine';
import { useSelector, useDispatch } from 'react-redux';
import { filterFlights } from '../redux/actions';

export const NavBar = () => {
  const dispatch = useDispatch();
  const filterByLike = useSelector(state => state.filterByLike);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Flights</Text>
      </View>
      <View style={styles.navLinks}>
        <View style={styles.link}>
          <Text
            style={styles.linkText}
            onPress={() => dispatch(filterFlights())}>
            Favoirites
          </Text>
          {filterByLike && <GradientLine myStyles={styles.gradientLine}/>}
        </View>
        <View style={styles.link}>
          <Text
            style={styles.linkText}
            onPress={() => dispatch(filterFlights())}>
            Browse
          </Text>
          {!filterByLike && <GradientLine myStyles={styles.gradientLine}/>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    width: '100%',
    height: 139,
    fontSize: 17,
    lineHeight: 22,
    fontStyle: 'normal',
    letterSpacing: -0.408,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  title: {
    paddingTop: 26,
    textAlign: 'center'
  },
  gradientLine: {
    position: 'absolute',
    bottom: -10,
    shadowOpacity: 0.15,
    width: '100%',
    height: 3,
    borderRadius: 2,
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  link: {
    flexBasis: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  linkText: {
    textAlign: 'center',
  }
});
