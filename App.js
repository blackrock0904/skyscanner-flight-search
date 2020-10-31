import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { NavBar } from './components/NavBar';
import { FlightCardList } from './components/FlightCardList';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <NavBar />
        <FlightCardList />
        {/* <StatusBar style="auto" /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
