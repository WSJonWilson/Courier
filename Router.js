/*import { StackNavigator, TabNavigator, SwitchNavigator } from "react-navigation";
import { Platform, StatusBar } from "react-native";
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Dashboard/Profile";


export const LoggedOut = StackNavigator({

    LogIn: {
        screen: LogIn,
        navigationOptions: {
            title: "Log In"
        }
    },

    LogOut: {
        screen: LogOut,
        navigationOptions: {
            title: "Log Out"
        }
    }

});

export const LoggedIn = TabNavigator ({
    Home: {
        screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" size={30} color={tintColor} />
                )
            }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="user" size={30} color={tintColor} />
          )
        }
      },
      
  
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
      {
        LoggedIn: {
          screen: LoggedIn
        },
        LoggedOut: {
          screen: LoggedOut
        }
      },
      {
        initialRouteName: LoggedIn ? "LoggedIn" : "LoggedOut"
      }
    );
  };
