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

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Image
              source={require('./assets/logo.png')}
              style={{width: 100, height: 100}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
