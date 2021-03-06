import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {checkLogin} from '../helper'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    checkPassword() {
        /* var { username, password } = this.state;
        if ((username === 'admin') && (password === '123456')) {
            Actions.contentfeed({type:'reset'});
        } else {
            Alert.alert(
                'Error',
                'Login Error',
                [
                    { text: 'OK' }
                ],
                { cancelable: false }
            )
        }*/
        Actions.contentfeed({ type: 'reset' });
    }
    render() {
        return (
            <Image source={require('../images/bg.jpg')}
                style={styles.imagebg}>

                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>

                    <Image source={require('../images/logo.png')}
                        style={{
                            width: 250,
                            height: 90
                        }}
                    />

                    <View style={styles.viewForm}>
                        <Text style={styles.labelLogin}>Email :</Text>
                        <TextInput
                            style={styles.inputLogin}
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>

                    <View style={styles.viewForm}>
                        <Text style={styles.labelLogin}>Password :</Text>
                        <TextInput
                            style={styles.inputLogin}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <Button iconLeft rounded style={{
                        alignSelf: 'center',
                        marginTop: 20
                    }}
                        onPress={()=>checkLogin(this)}>
                        <Icon name='md-lock' />
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>Login</Text>
                    </Button>

                    <Button transparent style={{
                        alignSelf: 'center'
                    }}
                    onPress={()=>Actions.register()}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Register</Text>
                    </Button>

                </View>
                <Text>Username : {this.state.email} Password : {this.state.password}</Text>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    imagebg: {
        resizeMode: 'cover',
        width: null,
        height: null,
        flex: 1
    },
    viewForm: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    labelLogin: {
        color: 'white',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 10,
        flex: 1
    },
    inputLogin: {
        height: 40,
        backgroundColor: 'white',
        flex: 2
    }
});
export default Login;
