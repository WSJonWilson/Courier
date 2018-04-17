import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


export default class StartDeliveries extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Start Deliveries",
        headerLeft: 
                    <Icon name="menu" size={20} 
                          style={{ paddingLeft: 10 }}
                          onPress={() => navigation.navigate('DrawerOpen')} 
                    />,
    
        drawerLabel: 'Start Deliveries'
      })
  render() {
    return (

<Container style={styles.container}>
        <CustomHeader title="Start Deliveries" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

        <Content
          contentContainerStyle={{ flex: 1,}}>  

     





     
                </Content>
</Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
})