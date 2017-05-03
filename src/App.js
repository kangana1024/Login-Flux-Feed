import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login'
import ContentFeed from './components/ContentFeed'
import Register from './components/Register'
import FirebaseNoteApp from './components/FirebaseNoteApp'
import * as firebase from 'firebase'

export default class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBrDA1CM9iGaDPQ0BprJ36ALNXExDDzAJQ",
            authDomain: "reactapp-98978.firebaseapp.com",
            databaseURL: "https://reactapp-98978.firebaseio.com",
            projectId: "reactapp-98978",
            storageBucket: "reactapp-98978.appspot.com",
            messagingSenderId: "1010576357625"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Router>
                <Scene key="root">

                    <Scene key="login" component={Login} title="Login" hideNavBar firebase={firebase} />

                    <Scene key="register" component={Register} title="register" hideNavBar firebase={firebase} />
                    <Scene key="firebasenoteapp" component={FirebaseNoteApp} title="firebasenoteapp" hideNavBar firebase={firebase} />
                    
                    <Scene key="contentfeed" component={ContentFeed} title="Youtube Feed" hideNavBar />

                </Scene>
            </Router>
        );
    }
}