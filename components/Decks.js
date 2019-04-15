import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { handleInitialData } from '../actions/index'
import { connect } from 'react-redux'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerDeck: {
        flex: 1,
    },
    decks: {
        flex: 1,
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 100,
        paddingRight: 100,
        borderColor: '#000000',
        borderWidth: 2,
        width: '100%',
    },
})

class Decks extends Component {
 
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleInitialData())
    }

    render() {
        const { navigation, decks } = this.props
     
        console.log('decks', this.props)

        return (
            <ScrollView style={styles.containerDeck}>
                {decks && Object.keys(decks).map(item => (
                    <TouchableOpacity
                        key={decks[item].title}
                        onPress={() => navigation.navigate('DeckDetails',
                            { title: item, questionsLenght: decks[item].questions.length })}
                    >
                        <View style={styles.decks} >
                            <Text>{decks[item].title}</Text>
                            <Text>{decks[item].questions ? decks[item].questions.length : 0} cards</Text>
                        </View>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        );

    }
}

function mapStateToProps (decks){
    return{
        decks,
    }
}


export default connect(mapStateToProps)(Decks)