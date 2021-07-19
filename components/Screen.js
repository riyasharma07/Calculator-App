import React from 'react'
import {View, StyleSheet  } from 'react-native'
export default class Screen extends React.Component{
  render(){
    return(
      <View style={styles.screen}></View>
    )
  }
}
const styles=StyleSheet.create({
  screen:{
    flex:7,
    borderWidth:1,
    borderColor:'red'
  }
})