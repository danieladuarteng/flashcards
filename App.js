import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'

const TabNavigator = createBottomTabNavigator({
  Decks: Decks,
  NewDeck: { 
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel: 'New Deck',
    }
  }
});

export default createAppContainer(TabNavigator);