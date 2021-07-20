import React from 'react'
import {View, StyleSheet  } from 'react-native'
export default class Button extends React.Component{
  render(){
    return(
      <View style={styles.button}></View>
    )
  }
}
const styles=StyleSheet.create({
  button:{
    flex:7,
    borderWidth:1,
    borderColor:'red'
  }
})