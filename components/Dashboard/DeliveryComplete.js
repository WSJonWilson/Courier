import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import { TabNavigator } from 'react-navigation';


export default class DeliveryComplete extends React.Component {

  render() {
    return (

<Container style={styles.container}>

        <Content
          contentContainerStyle={{ flex: 1,}}>  
                  <CustomHeader title="Start Deliveries" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

<Card>
<Text>Tab 3</Text>
</Card>
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