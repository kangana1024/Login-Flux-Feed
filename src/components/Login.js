import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

class Login extends Component {
    state = {}
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
                        <Text style={{
                            color: 'white',
                            textAlign: 'right',
                            fontWeight:'bold',
                            fontSize:18,
                            marginRight: 10,
                            flex: 1
                        }}>Username :</Text>
                        <TextInput
                            style={{
                                height: 40,
                                backgroundColor: 'white',
                                flex: 2
                            }}
                        />
                    </View>

                </View>

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
    }
});
export default Login;
