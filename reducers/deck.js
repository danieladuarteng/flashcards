import {
    DECK_DETAILS,
    ADD_CARD,
} from '../actions'

export default function deck(state = {}, action) {
    switch (action.type) {
        case DECK_DETAILS: {
            return {
                ...state,
                ...action.deck,
            }
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