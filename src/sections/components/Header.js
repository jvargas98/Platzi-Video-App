import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

export default function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 60,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
