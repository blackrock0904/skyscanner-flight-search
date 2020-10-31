import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavBarLine } from './NavBarLine';
import { useSelector } from 'react-redux';

export const NavBar = () => {

  const isBrowse = useSelector( state => state.isBrowse);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Flights</Text>
      </View>
      <View style={styles.navLinks}>
        <View style={styles.link}>
          <TouchableOpacity >
            <Text style={styles.linkText}>Favoirites</Text>
          </TouchableOpacity>
          {!isBrowse && <NavBarLine />}
        </View>
        <View style={styles.link}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Browse</Text>    
          </TouchableOpacity>
          {isBrowse && <NavBarLine />}
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

