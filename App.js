import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { MainPage } from './components/MainPage';
 
export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
      {/* <StatusBar style="auto" /> */}
    </Provider>
  );
}
