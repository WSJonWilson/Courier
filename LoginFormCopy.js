import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="Username or email"
                    style={styles.input}
                    />
                <TextInput 
                    placeholder="Password"
                    style={styles.input}
                    />
            </View>
        );
    }
}

AppRegistry.registerComponent('LoginForm', () => LoginForm);

const styles =StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    }
})
