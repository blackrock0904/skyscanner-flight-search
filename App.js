import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { NavBar } from './components/NavBar';
import { FlightCardList } from './components/FlightCardList';
import { FlightInfo } from './components/FlightInfo';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <FlightInfo />
        {/* <NavBar />
        <FlightCardList /> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
