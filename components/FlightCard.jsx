import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgAirPlane } from './SvgAirPlane';
import { SvgArrow } from './SvgArrow';
import { SvgHeart } from './SvgHeart';

export const FlightCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgAirPlane />
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.bigtext}>Moscow</Text>
            <SvgArrow />
            <Text style={styles.bigtext}>New York</Text>    
          </View>
          <Text style={styles.mediumText}>VKO  —  28 June, 2020  —  14:50</Text>         
          <Text style={styles.mediumText}>Aeroflot</Text>    
        </View> 
      </View>
      <View style={styles.footer}>
        <Text style={styles.smallText}>Price:</Text>
        <Text style={styles.bigText}>23 934 ₽</Text>
      </View>
      <TouchableOpacity style={styles.heartContainer}>
        <SvgHeart/>     
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 135,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    letterSpacing: -0.408,
    color: '#000',
    lineHeight: 22,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196, 196, 196, 0.5)',
    paddingBottom: 10,
  },
  content: {
    justifyContent: 'space-between',
    paddingLeft: 20
  },
  contentTitle: { 
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigText:{
    fontSize: 17
  },
  mediumText: {
    fontSize: 13,
    color: '#878787'
  },
  smallText:{
    fontSize: 11, 
    color: '#878787',
    lineHeight: 16,
    marginRight: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 10
  },
  heartContainer: {
    position: 'absolute',
    right: 15,
    top: 15
  }
})
