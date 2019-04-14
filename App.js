import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'
import DeckDetails from './components/DeckDetails'


const TabNavigator = createAppContainer(createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
}, {
    initialRouteName: 'Decks',
    backBehavior: 'Decks',
  }));

const Navigator = createAppContainer(createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  DeckDetails: {
    screen: DeckDetails
  }
}));


class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
    )
  }
}

export default App