import React from 'react';
import {StyleSheet, Text, View, StatusBar } from 'react-native';
import Design from './components/Design';
export default function App() {
  return (
    <View>
    <View style={styles.container}></View>
    <Design /></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 150,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
