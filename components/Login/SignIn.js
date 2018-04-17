
import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

import { Card, FormLabel, FormInput} from 'react-native-elements';
import { CardItem, Container, Header, Icon, Content, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {onSignIn, isSignedIn} from './Auth';
 
export default ({ navigation }) => (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo}
               source={require('../../assets/images/avatar.png')}/>
      </View>
      <Text style={styles.logoText}>Courier & Transport Application</Text>
      <TextInput style={styles.input} 
                 underlineColorAndroid ='rgba(0,0,0,0)'
                 placeholder="Email"
                 placeholderTextColor = "#ffffff" />
      <TextInput style={styles.input} 
                 underlineColorAndroid ='rgba(0,0,0,0)'
                 secureTextEntry={true}
                 placeholder="Password"
                 placeholderTextColor = "#ffffff" />

      <TouchableOpacity
        style={styles.buttonStyle}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
  </View>
        );

        
const styles= StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
      paddingVertical: 20,
      backgroundColor: '#487eb0'
  },
  input: {
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      color: '#ffffff',
      paddingHorizontal: 16,
      marginVertical: 10,
  },
  logo:{
    width: 100,
    height: 100,
    borderRadius: 10,
    paddingBottom: 15,
},
  buttonStyle:{
    marginTop: 20,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    width: 300,
    backgroundColor: '#34495e'
},
  buttonText:{
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,

  },
  logoText:{
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  forgotPassword:{

  }

  
})
