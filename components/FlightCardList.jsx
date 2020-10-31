import React from 'react';
import {Text, ScrollView, StyleSheet } from 'react-native';
import { FlightCard } from './FlightCard';

export const FlightCardList = () => {
  return (
    <ScrollView style={styles.container}>
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%'
  }
})
