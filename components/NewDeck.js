import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

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

export default class NewDesck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    render() {
        const { text } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <View style={{ flexDirection: 'row', height: 40 }}>
                    <TextInput
                        value={text}
                        style={styles.input}
                        placeholder="Deck title"
                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}