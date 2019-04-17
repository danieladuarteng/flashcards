import { combineReducers } from 'redux'
import deck from './deck'
import decks from './decks'

export default combineReducers({
    deck,
    decks,
})