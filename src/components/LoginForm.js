import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        labelText='Email'
                        placeholder='user@gmail.com'
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        labelText='Password'
                        placeholder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;