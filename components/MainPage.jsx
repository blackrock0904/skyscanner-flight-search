import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { FlightCardList } from './FlightCardList';
import { FlightInfo } from './FlightInfo';
import { startFeth } from '../redux/actions';

export const MainPage = () => {
  const showFlightInfo = useSelector(state => state.showFlightInfo);
  const dispatch = useDispatch();
  const store = useSelector(state => state)
  useEffect(() => {
    dispatch(startFeth())    
  }, [dispatch])

  return (
    <View>
      {showFlightInfo && <FlightInfo />}
      {!showFlightInfo && <NavBar />}
      {!showFlightInfo && <FlightCardList />}
    </View>
  )
}
