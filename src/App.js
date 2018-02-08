import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAHgwS25jP4y3Hr9Z2D-PPi7AYXLYKoAXI',
            authDomain: 'rn-auth-test-7e6c8.firebaseapp.com',
            databaseURL: 'https://rn-auth-test-7e6c8.firebaseio.com',
            projectId: 'rn-auth-test-7e6c8',
            storageBucket: 'rn-auth-test-7e6c8.appspot.com',
            messagingSenderId: '696008963685'
          };
        firebase.initializeApp(config); 
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>    
        );
    }
}


export default App;
