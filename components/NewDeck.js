import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { handleNewDeck } from '../actions'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        padding: 20,
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
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
});

class NewDesck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    handleNewDeck = () => {
        const { navigation, dispatch } = this.props

        const { title } = this.state

        dispatch(handleNewDeck(title))

        navigation.navigate('Decks')
    }


    render() {
        const { title } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <View style={{ flexDirection: 'row', height: 40 }}>
                    <TextInput
                        value={title}
                        style={styles.input}
                        placeholder="Deck title"
                        onChangeText={(title) => this.setState({ title })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleNewDeck}
                >
                    <Text style={styles.buttonText}>Submit </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(NewDesck)
