import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { Button, Icon } from 'native-base';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    checkPassword() {
        var { username, password } = this.state;
        if ((username === 'admin') && (password === '123456')) {
            alert('Username ถูก');
        } else {
            Alert.alert(
                'Error',
                'Login Error',
                [
                    { text: 'OK' }
                ],
                { cancelable: false }
            )
        }
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
                        <Text style={styles.labelLogin}>Username :</Text>
                        <TextInput
                            style={styles.inputLogin}
                            onChangeText={(username) => this.setState({ username })}
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
                        onPress={this.checkPassword.bind(this)}>
                        <Icon name='md-lock' />
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>Login</Text>
                    </Button>

                </View>
                <Text>Username : {this.state.username} Password : {this.state.password}</Text>
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
