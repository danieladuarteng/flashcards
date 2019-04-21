import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginLeft: 10,
    },
    button: {
        borderRadius: 3,
        height: 40,
        width: 120,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    side: {
        fontSize: 20,
        color: '#ff0080',
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
    content: {
        fontSize: 30,
        maxWidth: 300,
        marginTop: 30,
        marginBottom: 30,
    },
    containerStatus: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonCorrect: {
        backgroundColor: '#008000',
    },
    buttonIncorrect: {
        backgroundColor: '#ff0000',
    },
    containerResult: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    score: {
        marginTop: 60,
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ff0080',
    },
    underScoreText: {
        fontSize: 20,
        color: '#6700cc',
        marginBottom: 40,
    },
    buttonResetQuiz: {
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
    buttonBackDeck: {
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

class Quiz extends Component {

    state = {
        index: 0,
        isQuestion: true,
        isLastCard: false,
        score: 0,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title: Quiz'),
        }
    }

    componentWillUpdate(newProps, newState) {
        console.log('newProps', newProps)
        console.log('newState', newState)
        return newState
    }

    handleChangeSide = () => {
        this.setState(({ isQuestion }) => ({
            isQuestion: !isQuestion
        }))
    }

    handleSelectStatus = (isCorrect) => {
        const { index } = this.state
        const { questions } = this.props.deck
        if (index + 1 === questions.length) {
            this.setState((preState) => ({
                isLastCard: true,
                score: isCorrect ? preState.score + 1 : preState.score,
            }))
        } else {
            this.setState((preState) => ({
                isQuestion: true,
                index: preState.index + 1,
                score: isCorrect ? preState.score + 1 : preState.score,
            }))
        }
    }

    handleRestartQuiz = () => {
        this.setState({
            index: 0,
            isQuestion: true,
            isLastCard: false,
            score: 0,
        })
    }
    render() {
        const { index, isQuestion, isLastCard, score } = this.state
        const { title } = this.props.navigation.state.params
        const { deck, navigation } = this.props
        const { questions } = deck
        return (
            <View>
                {isLastCard === false
                    ? (
                        <View>
                            <View style={styles.header}>
                                <Text>{`${index + 1} / ${questions.length}`}</Text>
                            </View>
                            {isQuestion ?
                                (
                                    <View style={styles.container}>
                                        <Text style={styles.content}>{questions[index].question} </Text>
                                        <TouchableOpacity onPress={this.handleChangeSide}>
                                            <Text style={styles.side}>Show answer </Text>
                                        </TouchableOpacity>
                                    </View>
                                ) :
                                (
                                    <View>
                                        <View style={styles.container}>
                                            <Text style={styles.content}>
                                                {questions[index].answer}
                                            </Text>
                                            <TouchableOpacity onPress={this.handleChangeSide}>
                                                <Text style={styles.side}>Show question </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.containerStatus}>
                                            <TouchableOpacity
                                                style={[styles.button, styles.buttonCorrect]}
                                                onPress={() => this.handleSelectStatus(true)}
                                            >
                                                <Text style={styles.buttonText}>Correct</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[styles.button, styles.buttonIncorrect]}
                                                onPress={() => this.handleSelectStatus(false)}
                                            >
                                                <Text style={styles.buttonText}>Incorrect</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    ) :
                    (
                        <View style={styles.containerResult}>
                            <Text style={styles.score}>{(score / questions.length * 100).toFixed(0)} % </Text>
                            <Text style={styles.underScoreText}>Correct !!!</Text>
                            <TouchableOpacity
                                style={styles.buttonResetQuiz}
                                onPress={this.handleRestartQuiz}>
                                <Text style={styles.buttonText}>Restart Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonBackDeck}
                                onPress={() => navigation.navigate('DeckDetails', { title })}
                            >
                                <Text style={styles.buttonText}>Back to Deck </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>

        )
    }
}


function mapStateToProps({ decks }, props) {
    const { title } = props.navigation.state.params
    return {
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(Quiz)
