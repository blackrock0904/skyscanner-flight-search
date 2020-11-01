import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavBar } from './NavBar';
import { FlightCardList } from './FlightCardList';
import { FlightInfo } from './FlightInfo';

export const MainPage = () => {
  const showFlightInfo = useSelector(state => state.showFlightInfo);
  return (
    <View>
        { showFlightInfo && <FlightInfo /> }
        { !showFlightInfo && <NavBar /> }
        { !showFlightInfo && <FlightCardList /> }
    </View>
  )
}
