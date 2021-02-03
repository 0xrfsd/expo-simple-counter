import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Press } from './styles'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        const { count } = this.state
        return (
            <View>
                <Press onPress={() => this.setState({ count: this.state.count + 1 })} />
                <Text>{count}</Text>
            </View>
        );
    }
}

export default class Guests extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Counter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});