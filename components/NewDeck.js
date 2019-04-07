import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 40,
    }
});

export default class NewDesck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <View style={styles.input}>
                <TextInput
                    style={styles.input}
                    placeholder="Deck title"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.text}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}