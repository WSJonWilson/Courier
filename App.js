/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, TabBarTop, TabNavigator } from 'react-navigation';


import {isSignedIn} from './components/Login/Auth';
import SignIn from './components/Login/SignIn';
import Home from './components/Dashboard/Home';
import {createRootNavigator} from './components/Navigation/Navigation';

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount(){
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true}))
      .catch(() => alert("An error occured"));
  }

  render(){
    const {checkedSignIn, signedIn } = this.state;

    if(!checkedSignIn){
      return null;
    }
   
    const Layout = createRootNavigator(signedIn);
      return <Layout /> 
}
}