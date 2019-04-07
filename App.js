import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeck from './components/NewDeck';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  column: {
    width: '50%',
    height: 50,
    backgroundColor: '#000',
    fontSize: 2,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});

const nameColumns = [
  {
    name: 'DECKS',
  },
  {
    name: 'NEW DECK',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {nameColumns.map(item => (
          <View style={styles.column} key={item.name}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
        <NewDeck />
      </View>
    );
  }
}
