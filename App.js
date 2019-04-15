import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import middleware from './middleware'

const store = createStore(reducer, middleware)

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
  },
  AddCard: {
    screen: AddCard,
  },
}));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
        </Provider>
    )
  }
}

export default App