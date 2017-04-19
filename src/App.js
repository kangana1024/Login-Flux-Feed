import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar />
                </Scene>
            </Router>
        );
    }
}