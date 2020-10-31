import React from 'react';
import {View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { FlightCard } from './FlightCard';
import { useSelector } from 'react-redux';
// import { db } from '../db/db';

export const FlightCardList = () => {
  const store = useSelector(state => state);
  return (
    // <View style={styles.container}>
    <FlatList
        data={store}
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
