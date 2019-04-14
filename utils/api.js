import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_decks'

export const getDecks = async () => {
    try {
        const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => formatDecksResults(results))
        return result
    } catch(e){
        console.log('erro na api', e)
    } 
}