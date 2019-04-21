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
import Quiz from './components/Quiz';
import { setLocalNotification} from './utils/notifications'

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
  Quiz: {
    screen: Quiz,
  },
}));


class App extends Component {

  componentDidMount () {
    setLocalNotification()
  }

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