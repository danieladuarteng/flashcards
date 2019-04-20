import {
    getDecks,
    addCardToDeck,
    saveDeckTitle,
    getDeck,
} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const NEW_DECK = 'NEW_DECK'
export const DECK_DETAILS = 'DECK_DETAILS'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getDecks()
            .then((resp) => {
                dispatch(receiveDecks(resp))
            })
    }
}

export function deckDetails(deck) {
    return {
        type: DECK_DETAILS,
        deck,
    }
}

export function handleDeckDetails(id) {
    return (dispatch) => {
        return getDeck(id)
            .then((resp) => {
                dispatch(deckDetails(resp))
            })
    }
}

export function addCard(deck) {
    return {
        type: ADD_CARD,
        deck
    }
}

export function handleAddCard(card, title) {
    return (dispatch) => {
        addCardToDeck(card, title)
            .then((response) => {
                dispatch(addCard(response))
                console.log('responde action', response)
            })
    }
}

export function newDeck(title) {
    return {
        type: NEW_DECK,
        title,
    }
}

export function handleNewDeck(title) {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then((resp) => {
                dispatch(newDeck(resp))
            })
    }
}
