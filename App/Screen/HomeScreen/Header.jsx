import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Header() {
  return (
    <View style = {Styles.container}>
      <Text style = {Styles.headertext}>Header</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1, 
        // alignContent : 'center',
        // justifyContent : 'center',
    },
    headertext : {
      color : Colors.WHITE,
      fontFamily : "outfit-extrabold",
      fontSize : 25,
      alignSelf : 'center'
    }
})