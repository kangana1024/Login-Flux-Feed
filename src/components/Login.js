import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';

class Login extends Component {
    state = {  }
    render() {
        return (
            <Image source={require('../images/bg.jpeg')} 
                style={{
                    resizeMode:'cover'
                }}
                >
                
            </Image>
        );
    }
}

export default Login;
