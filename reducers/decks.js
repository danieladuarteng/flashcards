import {
    RECEIVE_DECKS,
    ADD_CARD,
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
        default:
            return state
    }
}
