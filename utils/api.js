import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_decks'

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => formatDecksResults(results))
}