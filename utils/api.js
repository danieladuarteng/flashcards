import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_decks'

export const getDecks = async () => {
    try {
        const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then((decks) => formatDecksResults(decks))
        return result
    } catch (e) {
        console.log('erro na api getDecks', e)
    }
}

export const addCardToDeck = (title, card) => {
    try {
        getDecks()
            .then((decks) => {
                return {
                    ...decks,
                    [title]: {
                        title,
                        questions: decks[title].questions.concat([card])
                    }
                }
            }).then((newDecks) => {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
            })
    }
    catch (e) {
        console.log('erro na api addCardToDeck', e)
    }
}
