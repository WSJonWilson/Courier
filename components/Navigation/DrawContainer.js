
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, CardItem, Container, Header, Content, Left, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (

      <ScrollView style={{    backgroundColor: '#263238',
    }}>
{/* Drawer Header */}
      <View 
            style={styles.drawerHeader}>
            <Image source={require('../../assets/images/avatar.png')}
            style ={styles.drawerImage}/>
            <Text style={styles.accountName}>Jon D. Wilson</Text>
          </View>

{/* Drawer Body */}
    <View style={styles.menuItem}>
    <Icon name="home" 
                  size={20}  
                  style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={styles.drawerItem}>
        Home
      </Text>
    </View>


    <View style={styles.line}>
    </View>

   <View style={styles.menuItem}>
   <Icon name="payment" 
                  size={20}
                  style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('ManagePayments')}
        style={styles.drawerItem}>
        Manage Payments
      </Text>
  </View>
      <View style={styles.line}>
        </View>

     <View style={styles.menuItem}>
     <Icon name="card-giftcard" 
                 size={20} 
                 style={styles.icon} />
      <Text
        onPress={() => navigation.navigate('StartDeliveries')}
        style={styles.drawerItem}>
        Start Deliveries
      </Text>
      </View>

      <View style={styles.line}>
      </View>

      <View style={styles.menuItem}>
<Icon name="place" 
                size={20}
                style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('GMap')}
        style={styles.drawerItem}>
        Find Route
      </Text>
      </View>
      <View style={styles.line}>
        </View>
      <View style={styles.menuItem}>
<Icon name="toc" 
                size={20}
                style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('CustomerDetails')}
        style={styles.drawerItem}>
Customer Details      </Text>
      </View>
      
      <View style={styles.line}>
      </View>

 <View style={styles.menuItem}>
 <Icon name="settings" 
              size={20} 
              style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('Settings')}
        style={styles.drawerItem}>
        Settings
      </Text>
</View>
  

<View style={styles.menuItem}>
<Icon name="power-settings-new" 
                size={20}
                style={styles.icon}/>
      <Text
        onPress={() => navigation.navigate('LogOut')}
        style={styles.drawerItem}>
        Logout
      </Text>
      </View>
<View style={styles.line}>
      </View>
      
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  accountName:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
  },

  drawerItem: {
    fontSize: 18,
    fontWeight: "300",
    color: '#fafafa',
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    textAlign: 'left',
    
  },
  drawerHeader: {
    height: 200,
    alignItems: 'center',
    backgroundColor: '#0abde3',


  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 15,
  },
  icon:{
    width: 28,
    height: 28,
    marginLeft: 5,
    color: '#0277bd'
  },
  // line: {
  //   borderBottomColor: '#fefefe',
  //   borderBottomWidth: 1,
  // },
  menuItem:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    //padding: 5,
    //borderRadius: 3,
    //marginTop: 10
  }


})