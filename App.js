/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Home from './src/screens/containers/Home';

const App: () => React$Node = () => {
  return (
    <Home>
      <Text>Header</Text>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

const styles = StyleSheet.create({});

export default App;
