import React from 'react';
import {View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { FlightCard } from './FlightCard';
import { db } from '../db/db';

export const FlightCardList = () => {
  return (
    // <View style={styles.container}>
    <FlatList
        data={db}
        renderItem={(item) => {
          return <FlightCard {...item} />
        }}
        keyExtractor={() => {
          return Date.now().toString() + Math.random().toString();
        }}
      />
      // {db.map(() => <FlightCard key={Date.now().toString()}/>)}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%'
  }
})
