import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_decks'

export const clearDecks = () => {
    return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

export const getDecks = async () => {
    try {
        const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then((decks) => formatDecksResults(decks))
        return result
    } catch (e) {
        console.log('erro na api getDecks', e)
    }
}

export const getDeck = (id) => {
    try {
        return AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then(data => {
                const decks = JSON.parse(data);
                return decks[id]
            })
    } catch (e) {
        console.log('erro na api getDeck', e)
    }
}

export const addCardToDeck = (card, title) => {
    try {
        return getDecks()
            .then((decks) => {
                const updateDeck = {
                    ...decks[title],
                    questions: decks[title].questions.concat([card])
                }

                const newDecks = {
                    ...decks,
                    [title]: updateDeck,
                }
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
                return updateDeck
            })   
    } catch (e) {
        console.log('erro na api addCardToDeck', e)
    }
}

export const saveDeckTitle = (title) => {
    try {
        return getDecks()
            .then((decks) => {
                return {
                    ...decks,
                    [title]: {
                        title,
                        questions: [],
                    }
                }
            }).then((newDecks) => {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
                return newDecks
            })
    } catch (e) {
        console.log('erro na api saveDeckTitle', e)
    }
}
