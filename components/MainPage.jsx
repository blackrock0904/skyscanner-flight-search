import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { FlightCardList } from './FlightCardList';
import { FlightInfo } from './FlightInfo';
import { loadToState } from '../redux/actions';

export const MainPage = () => {
  const showFlightInfo = useSelector(state => state.showFlightInfo);
  const dispatch = useDispatch();
  const store = useSelector(state => state)
  useEffect(() => {
    let date = new Date();
    let since = date.toISOString().slice(0,10);
    date =new Date(date.getTime() + 1000*60*60*24*10)
    let till = date.toISOString().slice(0,10);
    fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/RUB/en-US/SFO-sky/ORD-sky/${since}?inboundpartialdate=${till}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "98b60516c1mshcef2662272b0c82p166559jsnc414fdca814f"
      }
    })
      .then(response => response.json())
      .then(result => {
        dispatch(loadToState(result))
      })
      .catch(err => { console.log(err) });
  }, [])

  return (
    <View>
      {showFlightInfo && <FlightInfo />}
      {!showFlightInfo && <NavBar />}
      {!showFlightInfo && <FlightCardList />}
    </View>
  )
}
