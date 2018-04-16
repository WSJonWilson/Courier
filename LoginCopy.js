
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginForm from'../Login/LoginForm';
 
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    logo:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoTitle: {
        fontSize: 20,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
     

})