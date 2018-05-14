import React from 'react'
import { Platform,StyleSheet, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import DeliveryComplete from '../Dashboard/DeliveryComplete';
import DeliveryDefault from '../Dashboard/DeliveryDefault';
import DeliveryHold from '../Dashboard/DeliveryHold';
import {TabNavigator, TabBarBottom} from 'react-navigation';


class StartDeliveries extends React.Component {
   
  render() {
    return (

<Container style={styles.container}>
<Header>
        <CustomHeader style={styles.CustomHeader} title="Start Deliveries" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
</Header>
<DeliveryDefault />
<DeliveryComplete/>
<DeliveryHold />

        <Content
          contentContainerStyle={{ flex: 1,}}>  
                </Content>
</Container>

    )
  }
}

const TabNavigation = TabNavigator ({

  Default:{
     screen: DeliveryDefault
   },
   Hold:{ 
     screen: DeliveryHold,
   },
   Complete:{
     screen: DeliveryComplete,
   },
  },
  {

    tabBarOptions: {
      activeTintColor: '#0abde3',
      inactiveTintColor: '#f1f2f6',
      labelStyle: {
        fontSize: 19,
        marginTop: 20,
        paddingBottom: 15,

      },
      style: {
        height: 60,
        backgroundColor: '#455a64',
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

  export default TabNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  }
})