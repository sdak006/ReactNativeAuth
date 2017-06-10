import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD_2BYaX4_QKUK7nL6hcTXYmR5yNXk5rsI',
            authDomain: 'auth-a7396.firebaseapp.com',
            databaseURL: 'https://auth-a7396.firebaseio.com',
            projectId: 'auth-a7396',
            storageBucket: 'auth-a7396.appspot.com',
            messagingSenderId: "54138554713"
        });
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Some Text</Text>
            </View>
        );
    }
}

export default App;