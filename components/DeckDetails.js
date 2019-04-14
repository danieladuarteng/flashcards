import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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

export default class DeckDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Decks'),
        }
    }

    render() {
        const { navigation } = this.props
        const { title, questionsLenght } = this.props.navigation.state.params
        console.log('this.props', this.props)

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.questionsLenght}>{questionsLenght} cards </Text>
                <TouchableOpacity
                    style={styles.buttonAddCard}
                    onPress={() => navigation.navigate('AddCard', { key: title })}
                >
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                {questionsLenght > 0
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