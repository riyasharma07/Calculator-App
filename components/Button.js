import React from 'react'
import {View, StyleSheet,Text,Pressable  } from 'react-native'
export default class Button extends React.Component{
  render(){
    return(
      <View style={styles.btn}>
      <View style={styles.leftbtn}>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>AC</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>DEL</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>%</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>7</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>8</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>9</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>4</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>5</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>6</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>3</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>2</Text></Pressable>
      <Pressable style={styles.leftdigits}><Text style={styles.textofnum}>1</Text></Pressable>
      </View>
      <View style={styles.rightbtn}>
     
      <Pressable style={styles.rightdigits}><Text style={styles.rightnum}>÷</Text></Pressable>
      <Pressable style={styles.rightdigits}><Text style={styles.rightnum}>x</Text></Pressable>
      <Pressable style={styles.rightdigits}><Text style={styles.rightnum}>+</Text></Pressable>
      <Pressable style={styles.rightdigits}><Text style={styles.rightnum}>-</Text></Pressable>
      <Pressable style={styles.rightdigits}><Text style={styles.equalsbtn}>=</Text></Pressable>



      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  
btn:{
    flex:7,
    borderWidth:1,
    borderColor:'#51E1ED',
    flexDirection:'row'
  },
  leftbtn:{
    width:'33.33%',
    flex:8,
    //  borderWidth:1,
    //  borderColor:'#51E1ED',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  rightbtn:{
    flex:2,
    // borderWidth:1,
    // borderColor:'red'

  },
  leftdigits:{
    justifyContent:'center',
    width:'33.33%',
    // borderWidth:1,
    // borderColor:'green'
  },
  textofnum:{
     fontSize: 30,
    // borderWidth: 1,
    // borderColor: 'black',
    flex: 1,
    textAlign: 'center',
    color:'white'
  },
  rightdigits:{
    height: '18%',
    justifyContent: 'center',
  },
  rightnum:{
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    
    color:"#51E1ED",
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    paddingTop: 8,
    borderRadius: 40,
    fontSize:30
  },
  equalsbtn:{
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color:"white",
    backgroundColor:"#51E1ED",
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    paddingTop: 8,
    borderRadius: 40,
    fontSize:30

  }
})