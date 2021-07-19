import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import Button from './Button'
import Screen from './Screen'

export default class Calc extends React.Component{
  render(){
    return(
      <View style={styles.layout}>
      <Text>Screen </Text>
      <Button/>
      <Screen/>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  layout:{
   flex:'1',
   borderWidth:1,
   borderColor:'red'
  }
})