import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginFrom from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD_2BYaX4_QKUK7nL6hcTXYmR5yNXk5rsI',
            authDomain: 'auth-a7396.firebaseapp.com',
            databaseURL: 'https://auth-a7396.firebaseio.com',
            projectId: 'auth-a7396',
            storageBucket: 'auth-a7396.appspot.com',
            messagingSenderId: "54138554713"
        });

        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                console.log('logged in');
                this.setState({ loggedIn: true });
            } else {
                console.log('logged out');
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginFrom />;
            default:
                return (
                    <CardSection>
                        <Spinner size='large' />
                    </CardSection>
                );
        }
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;