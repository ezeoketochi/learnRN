import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default function FavouriteScreen() {
  return (
    <View style = {Styles.container}>
      <Text>FavouriteScreen</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container : { 
      flex : 1, 
      justifyContent : 'center',
      alignItems : 'center',
  },

})