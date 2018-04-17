import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from "react-native";
import SignIn from '../Login/SignIn';
import Home from '../Dashboard/Home';
import Settings from '../Dashboard/Settings';
import StartDeliveries from '../Dashboard/StartDeliveries';
import ManagePayments from '../Dashboard/ManagePayments';
import DrawerContainer from '../Navigation/DrawContainer';
import GMap from '../Dashboard/Map';
import CustomerDetails from '../Dashboard/CustomerDetails';

import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems, SwitchNavigator, TabNavigator, SafeAreaView  } from 'react-navigation';


export const SignedOut = StackNavigator({
    SignIn: {
      screen: SignIn 
    },
    Home: { 
      screen: Home 
    },
  },

  {
    headerMode: 'none',
  }
  );



 /*  export const Settings = StackNavigator({


******** Settings List *********
 

  })
*/ 
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
    headerStyle: {backgroundColor: '#45aaf2'},

    
 });
 
/*
 const DrawerNavigation = StackNavigator({
  SignedIn: { screen: SignedIn }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    //headerStyle: {backgroundColor: 'green'},
    
    title: 'Logged In to your app!',
    gesturesEnabled: false,
    headerLeft: <Text onPress={() => {
      
      
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>Menu</Text>
  })
})

*/


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
