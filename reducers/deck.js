import {
    DECK_DETAILS,
} from '../actions'

export default function deck(state = {}, action) {
    switch (action.type) {
        case DECK_DETAILS: {
            return {
                deck: action.deck
            }
        }
        default:
            return state
    }
}