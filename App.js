import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor'
//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
       <Conversor moedaA="USD" moedaB="BRL"/>
       <Conversor moedaA="EUR" moedaB="BRL"/>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;