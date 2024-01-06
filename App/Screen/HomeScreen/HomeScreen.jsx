import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import Colors from '../../Utils/Colors'

export default function HomeScreen() {
  return (
    <View style = {Styles.container}>
      <View style = {Styles.header}> 
        <Header ></Header>
      </View>
      <AppMapView style = {Styles.map} ></AppMapView>
      {/* <StatusBar style="default" /> */}
    </View>
  )
}

const Styles = StyleSheet.create({
  container : {
    display: 'flex',
    flex : 1,
  },
 map : {
  display : 'flex',
  flex : 1,
  // height : '100%',
  // width : '100%'
 },
 header : {
  marginTop : 30,
  zIndex : 20,
  position : 'absolute',
  padding : 10, 
  width : '100%',
  // paddingHorizontal : 20,
  // justifyContent : 'center',
  // alignContent : 'center',
 }
})