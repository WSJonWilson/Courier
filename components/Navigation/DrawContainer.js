
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, CardItem, Container, Header, Content, Left, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (

      <View>
{/* Drawer Header */}
      <Header style={styles.drawerHeader}>
        <View>
            <Image source={require('../../assets/images/avatar.png')}
            style ={styles.drawerImage}/>
            <Text style={styles.accountName}>Jon D. Wilson</Text>
          </View>
      </Header>

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

      <View style={styles.menuItem}>
<Icon name="place" 
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
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  accountName:{
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  drawerItem: {
    fontSize: 16,
    //fontWeight: 'bold',
    color: '#0984e3',
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    textAlign: 'left',
    
  },
  drawerHeader: {
    height: 200,
    backgroundColor: '#3867d6'
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
    marginLeft: 5
  },
  line: {
    borderBottomColor: '#d1d8e0',
    borderBottomWidth: 1,
  },
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