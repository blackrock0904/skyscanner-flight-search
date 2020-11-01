import React from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import { FlightCard } from './FlightCard';
import { useSelector, useDispatch } from 'react-redux';
import { showInfo } from '../redux/actions';

export const FlightCardList = () => {

  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const flights = store.filterByLike ? store.flights.filter(item => item.isLiked) : store.flights;

  return (
    <ScrollView style={styles.container}>
      {flights.map(
        (item) => <FlightCard key={item.id} item={item} />
      )}
      </ScrollView>
    // <FlatList
    //     data={flights}
    //     renderItem={(item) => {
    //       return <FlightCard {...item}  
    //               onPress={() => {
    //                 dispatch(showInfo(item));
    //               }}
    //               />
    //     }}
    //     keyExtractor={(item) => item.id}
    //   />
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%'
  }
})
