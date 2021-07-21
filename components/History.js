import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
export default class History extends React.Component {
  render() {
    const { history, deleteHistory, closeHistory, slideIn } = this.props;

    return (
      <View style={styles.historyComponent}>
        <Animated.View
          style={{
            ...styles.historyContainer,
            bottom: slideIn.interpolate({
              inputRange: [0, 1],
              outputRange: ['100%', '0%'],
            }),
          }}>
          <View style={styles.historyHeader}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.historyText}>History</Text>
            </View>
            <Pressable
              style={styles.clearHistoryButton}
              onPress={deleteHistory}
              android_ripple={{ color: 'white', borderless: true }}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
            <View></View>
          </View>

          <View style={styles.historyContent}>
            <ScrollView style={{ flex: 1 }}>
              {history.map((item) => {
                return (
                  <View style={styles.historyItem}>
                    <Text style={styles.historyExpression}>
                      {item.expression}
                    </Text>
                    <Text style={styles.historyResult}>{item.result}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <Pressable
            style={styles.historyCloseBtn}
            onPress={closeHistory}
            android_ripple={{ color: 'white', borderless: false }}>
            <Text style={styles.closeText}> Close</Text>
          </Pressable>
        </Animated.View>

        <View style={styles.disabledArea}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyComponent: {
    flex: 1,
  },
  historyContainer: {
    flex: 9,
    backgroundColor: 'darked',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  disabledArea: {
    flex: 1,
  },
  historyHeader: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    flexDirection: 'row',
  },
  historyContent: {
    flex: 8,
    // borderWidth: 1,
    // borderColor: 'white',
  },
  historyCloseBtn: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'white',
  },
  closeText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  headingTextContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  historyText: {
    color: 'white',
    // border: '1px solid white',
    fontSize: 30,
    paddingLeft: 10,
  },
  clearHistoryButton: {
    flex: 3,
    // border: '1px solid yellow',
    borderLeft: '1px solid white',
    justifyContent: 'center',
    textAlign: 'Center',
  },
  clearText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  historyItem: {
    // border: '1px solid white',
    marginBottom: 35,
    paddingLeft: 10,
  },
  historyExpression: {
    color: 'white',
    fontSize: 24,
  },
  historyResult: {
    color: 'white',
    fontSize: 18,
  },
});
