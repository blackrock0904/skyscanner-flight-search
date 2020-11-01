import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FlightCard } from './FlightCard';
import { useSelector } from 'react-redux';

export const FlightCardList = () => {
  const store = useSelector(state => state);
  const flights = store.filterByLike ? store.flights.filter(item => item.isLiked) : store.flights;

  return (
    <FlatList
      data={flights}
      renderItem={(item) => <FlightCard flight={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%'
  }
})
