import React from 'react'
import {View,
  StyleSheet,
  Text,
  ScrollView  } from 'react-native'
export default class Screen extends React.Component{
  render(){
    const {
      expression,
      result,
    } = this.props;

    return(
      <View style={styles.screen}>
     
        <Text style={styles.expression}>{expression}</Text>
        <Text style ={styles.result}> {result}</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  screen:{
    flex:3,
    //  borderWidth:1,
    //  borderColor:'#51E1ED',
    backgroundColor:'#51E1ED'
     
  },
  expression: {
    color: 'black',
    fontSize: 30,
    // borderColor: 'white',
    // borderWidth: 1,
    textAlign: 'right',
    padding: 10,
  },
  result: {
    color: 'black',
    fontSize: 20,
    // borderColor: 'white',
    // borderWidth: 1,
    textAlign: 'right',
    padding: 10,
  }
})