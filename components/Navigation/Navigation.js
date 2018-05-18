import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from "react-native";
import SignIn from '../Login/SignIn';
import Home from '../Dashboard/Home';
import Note from '../Dashboard/Note';
import Chat from '../Dashboard/Chat';
import Settings from '../Dashboard/Settings';
import StartDeliveries from '../Dashboard/StartDeliveries';
import DrawerContainer from '../Navigation/DrawContainer';
import Test from '../Dashboard/Test';
import CustomerDetails from '../Dashboard/CustomerDetails';
import DeliveryDetails from '../Dashboard/DeliveryDetails';
import DeliveryComplete from '../Dashboard/DeliveryComplete';
import DeliveryHold from '../Dashboard/DeliveryHold';
import PackageDetails from '../Dashboard/PackageDetails';

import Ionicons from 'react-native-vector-icons/Ionicons';


import { Button, Container, Header, Content, Left, Right } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems, SwitchNavigator, TabNavigator, TabBarBottom, SafeAreaView  } from 'react-navigation';


export const SignedOut = StackNavigator({
    SignIn: {
      screen: SignIn 
    },
    Home: { 
      screen: Home 
    },
    Chat: {
      screen: Chat
    },
    Note:{
      screen: Note
    },
    DeliveryDetails:{
      screen: DeliveryDetails
    },
    PackageDetails:{
      screen: PackageDetails
    },
   
  },

  {
    headerMode: 'none',
  }
  );



export const SignedIn = DrawerNavigator(
    {
      Home: {
        screen: StartDeliveries
      },

      Settings: {
        screen: Settings,

      },
      Note:{
        screen: Note
      },
      Test:{
        screen: Test
      },
      CustomerDetails:{
        screen: CustomerDetails,
      }
    },

  {
      initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: DrawerContainer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    gesturesEnabled: true,
    
 });
 
 
 
 export const TabNavigation = TabNavigator ({

  Home:{
     screen: Home
   },
   DeliveryHold:{ 
     screen: DeliveryHold,
   },
   DeliveryComplete:{
     screen: DeliveryComplete,
   },
  },
  
);
 



export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    { 
    SignedIn: {
      screen: SignedIn
      
    },
    SignedOut: {
      screen: SignedOut
    }
  },
{
  initialRouteName: signedIn ? "SignedIn" : "SignedOut"
}
);
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
