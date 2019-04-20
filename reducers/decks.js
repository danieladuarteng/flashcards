import {
    RECEIVE_DECKS,
    ADD_CARD,
    NEW_DECK,
} from '../actions'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD:
            return {
                ...state,
                ...action.deck
            }
        case NEW_DECK:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}
