import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { handleDeckDetails } from '../actions/index'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    questionsLength: {
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
        const { navigation, deck } = this.props
        const { title } = this.props.navigation.state.params
        const { questions } = this.props.deck
        const questionsDeck = questions && questions
        const questionsLength = questionsDeck && questionsDeck.length

        console.log(questionsDeck)
        console.log(questionsLength)
        console.log(this.props)
       
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.questionsLength}>{questionsLength === undefined ? 0 : questionsLength} cards </Text>
                <TouchableOpacity
                    style={styles.buttonAddCard}
                    onPress={() => navigation.navigate('AddCard', { title })}
                >
                    <Text style={styles.buttonText}>Add Card </Text>
                </TouchableOpacity>
                {questionsLength > 0
                        ?
                        (
                            <TouchableOpacity
                                style={styles.buttonStartQuiz}
                                onPress={() => navigation.navigate('Quiz', { title })}
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
    }
}

export default connect(mapStateToProps)(DeckDetails)
