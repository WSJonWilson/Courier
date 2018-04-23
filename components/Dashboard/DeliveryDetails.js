import React from 'react'
import { Modal, StyleSheet, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


export default class DeliveryDetails extends React.Component {

  render() {
    return (

<Container style={styles.container}>

        <Content
          contentContainerStyle={{ flex: 1,}}>  
<Card>
<Text>Tab 2</Text>
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