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
            const { title, card } = action
            let data = state.decks
            return {
                ...state,
                decks: {
                    ...data,
                    [title]: {
                        title: title,
                        questions: data[title].questions.concat([card])
                    }
                }
            }
        default:
            return state
    }
}