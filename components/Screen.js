import React from 'react'
import {View, StyleSheet,Text  } from 'react-native'
export default class Screen extends React.Component{
  render(){
    return(
      <View style={styles.screen}>
        <Text>Screen</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  screen:{
    flex:3,
    borderWidth:1,
    borderColor:'red'
  }
})