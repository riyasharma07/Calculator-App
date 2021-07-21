import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const buttonRipple = {
  color: 'lightgray',
  borderless: true,
};
export default class Button extends React.Component {
  render() {
    const {
      getPressedButtonValue,
      clearAll,
      deleteLastCharacter,
      addHistory,
      openHistory,
    } = this.props;

    return (
      <View style={styles.btn}>
        <View style={styles.leftbtn}>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={clearAll}>
            <Text style={styles.textofnum}>AC</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={deleteLastCharacter}>
            <Text style={styles.textofnum}>DEL</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('%');
            }}>
            <Text style={styles.textofnum}>%</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('7');
            }}>
            <Text style={styles.textofnum}>7</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('8');
            }}>
            <Text style={styles.textofnum}>8</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('9');
            }}>
            <Text style={styles.textofnum}>9</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('4');
            }}>
            <Text style={styles.textofnum}>4</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('5');
            }}>
            <Text style={styles.textofnum}>5</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('6');
            }}>
            <Text style={styles.textofnum}>6</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('3');
            }}>
            <Text style={styles.textofnum}>3</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('2');
            }}>
            <Text style={styles.textofnum}>2</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('1');
            }}>
            <Text style={styles.textofnum}>1</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={openHistory}>
            <Text style={styles.textofnum}>H</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('0');
            }}>
            <Text style={styles.textofnum}>0</Text>
          </Pressable>
          <Pressable
            style={styles.leftdigits}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('.');
            }}>
            <Text style={styles.textofnum}>.</Text>
          </Pressable>
        </View>
        <View style={styles.rightbtn}>
          <Pressable style={styles.rightdigits} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('÷')}}>
            <Text style={styles.rightnum}>÷</Text>
          </Pressable>
          <Pressable style={styles.rightdigits} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('x')}}>
            <Text style={styles.rightnum}>x</Text>
          </Pressable>
          <Pressable style={styles.rightdigits} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('+')}}>
            <Text style={styles.rightnum}>+</Text>
          </Pressable>
          <Pressable style={styles.rightdigits} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('-')}}>
            <Text style={styles.rightnum}>-</Text>
          </Pressable>
          <Pressable style={styles.rightdigits} android_ripple={buttonRipple} onPress={addHistory}>
            <Text style={styles.equalsbtn}>=</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    flex: 7,
    // borderWidth: 1,
    // borderColor: '#51E1ED',
    flexDirection: 'row',
  },
  leftbtn: {
    //width: '33.33%',
    flex: 8,
    //  borderWidth:1,
    //  borderColor:'#51E1ED',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightbtn: {
    flex: 2,
    // borderWidth:1,
    // borderColor:'red'
  },
  leftdigits: {
    justifyContent: 'center',
    width: '33.33%',
    height: '20%',
    // borderWidth:1,
    // borderColor:'green'
  },
  textofnum: {
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: 'black',
    // flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  rightdigits: {
    //borderColor: 'red',
    // borderWidth: 1,
    height: '20%',
    justifyContent: 'center',
  },
  rightnum: {
    fontSize: 30,
    // borderWidth: 1,
    color: '#51E1ED',
    // flex: 1,
    textAlign: 'center',
  },
  equalsbtn: {
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: 'black'
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#51E1ED',
    color: 'white',
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 40,
  },
});
