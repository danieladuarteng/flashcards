import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { handleDeckDetails } from '../actions/index'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    questionsLenght: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
    },
    buttonAddCard: {
        backgroundColor: '#ff0080',
        borderRadius: 5,
        height: 40,
        width: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonStartQuiz: {
        backgroundColor: '#6700cc',
        borderRadius: 5,
        height: 40,
        width: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
})

class DeckDetails extends Component {

    state = {
        decks: [],
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Decks'),
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        const { title } = this.props.navigation.state.params
        dispatch(handleDeckDetails(title))
    }

    render() {
        const { navigation, title, questionsLength } = this.props
        const { questionsLenghtUpdate } = this.props.navigation.state.params

            return(
                <View style={styles.container}>
                    <Text style={styles.title}>{title} </Text>
                <Text style={styles.questionsLenght}>{questionsLenghtUpdate || questionsLength} cards </Text>
                <TouchableOpacity
                    style={styles.buttonAddCard}
                    onPress={() => navigation.navigate('AddCard', { title, questionsLength })}
                >
                    <Text style={styles.buttonText}>Add Card </Text>
                </TouchableOpacity>
                {questionsLength > 0
                    ?
                    (
                        <TouchableOpacity
                            style={styles.buttonStartQuiz}
                            onPress={this.startQuiz}
                        >
                            <Text style={styles.buttonText}>Start Quiz</Text>
                        </TouchableOpacity>
                    )
                    : null
                }
                </View>
            )
    }
}

function mapStateToProps({ deck }) {
    return {
        deck,
        title: deck.deck && deck.deck.title,
        questionsLength: deck.deck && deck.deck.questions.length,
    }
}

export default connect(mapStateToProps)(DeckDetails)
