import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    // const { emailChanged, passwordChanged } = this.props;

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        console.log(`props -> ${this.props.email},${this.props.password}`);
        return (
            <Card>
                <CardSection> 
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />                   
                </CardSection>     

                <CardSection>                    
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>                 
                    <Button>
                        Login   
                    </Button>
                </CardSection>
            </Card>    
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
