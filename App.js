import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NewDeck from './components/NewDeck'

class Decks extends React.Component {
  render() {
    const decks = [
      {
        deck: 'udacicards',
        card: '3 cards'
      },
      {
        deck: 'new deck',
        card: '0 cards'
      },
      {
        deck: 'New deck 2',
        card: '0 cards'
      },
    ];

    return (
      <ScrollView style={styles.containerDeck}>
        {decks.map(item => (
          <View style={styles.decks} key={item.deck}>
            <Text>{item.deck}</Text>
            <Text>{item.card}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Decks: Decks,
  NewDeck: NewDeck,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeck: {
    flex: 1,
  },
  decks: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 100,
    paddingRight: 100,
    borderColor: '#000000',
    borderWidth: 2,
    width: '100%',
  },
})
export default createAppContainer(TabNavigator);