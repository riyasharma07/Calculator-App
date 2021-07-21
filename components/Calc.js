import React from 'react';
import {View,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Animated,} from 'react-native';
import Button from './Button'
import Screen from './Screen'
import History from './History'

export default class Calc extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      expression: 'Calculator',
      result: '',
      actualExpression: '',
      history: [],
      isHistoryVisible: false,
      slideIn: new Animated.Value(0),
    }
  }

  addHistory = () => {
    const {
      expression,
      result,
      history,
    } = this.state;

    ToastAndroid.show(`History Saved, ${expression}=${result}`, ToastAndroid.SHORT)

    const expressionHistory = {
      expression: expression,
      result,
    };

    this.setState({
      history: [...history, expressionHistory]
    });

    this.setState({
      expression: 'Calculator',
      actualExpression: '',
      result: ''
    });
  }

  deleteHistory = () => {
      ToastAndroid.show('History cleared successfully!', ToastAndroid.SHORT);
      this.setState({
        history: []
      });
    }

    closeHistory = () => {
      this.setState({
        isHistoryVisible: false,
      });
    }

    openHistory = () => {
      this.setState({
        isHistoryVisible: true,
      });
    }

    slideIn = () => {
      this.openHistory();
      Animated.timing(this.state.slideIn, {
        toValue: 1,
        duration: 500,
      }).start()
    }

    slideOut = () => {
      Animated.timing(this.state.slideIn, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        this.closeHistory()
      })
    }




  getPressedButtonValue = (buttonPressed) => {

    const {
      expression,
      actualExpression,
      result,
    } = this.state;

    let newExpression = `${expression==='Calculator' ? '' : expression}${buttonPressed}`;
    this.setState({
      expression: newExpression,
    });

    let actualCharacter = buttonPressed;
    if (buttonPressed === '÷') {
      actualCharacter = '/';
    } else if(buttonPressed === 'x') {
      actualCharacter='*';
    } else if(buttonPressed === '-') {
      actualCharacter = '-';
    } else {

    }

    let newActualExpression = `${actualExpression}${actualCharacter}`;

    this.setState({
      actualExpression: newActualExpression,
    });    
    
    try {
      this.setState({
        result: eval(newActualExpression).toString(),
      });
    } catch(e) {
      console.log(e)
    }

  } 


  clearAll = () => {
    this.setState({
      expression: '',
      actualExpression: '',
      result: '',
    });
  }

  deleteLastCharacter = () => {
    const {
      expression,
      actualExpression,
    } = this.state;

    const slicedExpression = expression.slice(0, expression.length -1);
    const slicedActualExpression = actualExpression.slice(0, expression.length -1);
    this.setState({
      expression: slicedExpression,
      actualExpression: slicedActualExpression,
    });
    if(slicedActualExpression === '') {
      this.setState({
        result: '',
        expression: 'Calculator'      
      });
    }
    try {
      this.setState({
        result: eval(slicedActualExpression).toString(),
      });
    } catch(e) {
      // console.log(e)
    }
  }
  render(){
    const {
      expression,
      result,
      isHistoryVisible,
      history,
      slideIn,
    } = this.state;
    return(
      <View style={styles.calculatorComponent}>
        <StatusBar barStyle='light-content' backgroundColor="darkred"/>
        {isHistoryVisible ?
          <View style={styles.historyWrapper}>
            <History
              deleteHistory={this.deleteHistory}
              history={history}
              closeHistory={this.slideOut}
              slideIn={slideIn}
            />
          </View>
          : 
          null
        }
        <Screen
          expression={expression}
          result={result}
        />
        <Button
          getPressedButtonValue={this.getPressedButtonValue}
          clearAll={this.clearAll}
          deleteLastCharacter={this.deleteLastCharacter}
          addHistory={this.addHistory}
          openHistory={this.slideIn}
        />
      </View>
    )
  }
}
    
const styles =StyleSheet.create({
  calculatorComponent: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  historyWrapper: {
    position: 'absolute',
    top:10,
    zIndex: 3,
    width: "100%",
    height: '100%',
    backgroundColor :'#51E1ED',
  }
})