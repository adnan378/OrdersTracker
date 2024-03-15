import { StatusBar, StyleSheet, Text, View,LogBox} from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation'
//console.disableYellowBox = true;

LogBox.ignoreAllLogs(); // This will ignore all logs

// Or, you can ignore specific logs by providing their message
//LogBox.ignoreLogs(['Your log message here']);
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
   
   <AppNavigation/>
   
  )
}

export default App

const styles = StyleSheet.create({})