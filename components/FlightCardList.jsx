import React from 'react';
import { FlatList } from 'react-native';
import { FlightCard } from './FlightCard';
import { useSelector } from 'react-redux';

export const FlightCardList = () => {
  const store = useSelector(state => state);
  const flights = store.isBrowse ? store.flights : store.flights.filter(item => item.isLiked)
  return (
    <FlatList
        data={flights}
        renderItem={(item) => {
          return <FlightCard {...item} />
        }}
        keyExtractor={() => {
          return Date.now().toString() + Math.random().toString();
        }}
      />
  );
}
