import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from "react-native";
import SignIn from '../Login/SignIn';
import Home from '../Dashboard/Home';
import Note from '../Dashboard/Note';
import Chat from '../Dashboard/Chat';
import Settings from '../Dashboard/Settings';
import StartDeliveries from '../Dashboard/StartDeliveries';
import ManagePayments from '../Dashboard/ManagePayments';
import DrawerContainer from '../Navigation/DrawContainer';
import GMap from '../Dashboard/Map';
import CustomerDetails from '../Dashboard/CustomerDetails';
import DeliveryDetails from '../Dashboard/DeliveryDetails';
import DeliveryComplete from '../Dashboard/DeliveryComplete';
import DeliveryDefault from '../Dashboard/DeliveryDefault';
import DeliveryHold from '../Dashboard/DeliveryHold';
import ModalDetails from '../Dashboard/Modal';
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
    ModalDetails:{
      screen:ModalDetails
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
        screen: Home,
      },

      Settings: {
        screen: Settings,

      },
      StartDeliveries: { 
        screen: StartDeliveries
      },
      ManagePayments:{
        screen: ManagePayments,
      },
      GMap:{
        screen: GMap
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
    gesturesEnabled: false,
 });
 
 
 
 export const TabNavigation = TabNavigator ({

  DeliveryDefault:{
     screen: DeliveryDefault
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
