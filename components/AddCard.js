import React, { Component } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { addCard, handleAddCard } from '../actions'
import {addCardToDeck} from '../utils/api'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flexDirection: 'row',
    },
    text: {
        flex: 0.8,
        fontSize: 30,
        fontWeight: '500',
        color: '#ff0080',
        marginTop: 50,
        marginBottom: 25,
        alignItems: 'flex-start',
    },
    box: {
        flexDirection: 'row',
        height: 50,
    },
    input: {
        flex: 0.8,
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 2,
        paddingLeft: 5,
    },
    button: {
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
    },
    msg: {
        marginTop: 40,
    },
});


class AddCard extends Component {
    state = {
        answer: '',
        question: '',
    }

    handleAddCard = () => {
        const { navigation, dispatch } = this.props
        const { title } = this.props.navigation.state.params
        const { answer, question } = this.state

        const card = {
            question,
            answer
        }

        dispatch(handleAddCard(card, title))

        //addCardToDeck(card, title)

        navigation.navigate('DeckDetails', { title })

    }

    render() {
        const { answer, question } = this.state
        const { title, questionsLenght } = this.props.navigation.state.params
        console.log(answer, question)
        console.log(this.props)

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Question </Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        value={question}
                        onChangeText={(e) => this.setState({ question: e })}
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>Answer </Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        value={answer}
                        onChangeText={(e) => this.setState({ answer: e })}
                    />
                </View>
                {question !== '' && answer !== ''
                    ?
                    (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleAddCard}
                        >
                            <Text style={styles.buttonText}>Submit </Text>
                        </TouchableOpacity>
                    )
                    :
                    (
                        <Text style={styles.msg}>The question and answer fields are required </Text>
                    )
                }
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(AddCard)
