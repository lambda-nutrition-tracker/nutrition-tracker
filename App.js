import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import NasaProjectsComponent from "./src/components/NasaProjectsComponent"

import { nasaProjectsReducer } from './src/reducers/NasaProjectsReducer';

const store = createStore(nasaProjectsReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NasaProjectsComponent />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
