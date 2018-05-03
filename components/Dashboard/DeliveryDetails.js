import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import DeliveryDefault from './DeliveryDefault';
import PackageDetails from './PackageDetails';

export default class DeliveryDetails extends Component {

  render() {
    const { params } = this.props.navigation.state;
    return (

<Container style={styles.container}>

        <Content
          contentContainerStyle={{ flex: 1,}}>  
<Card style={styles.card}>
<Text>Full Name: {`${params.title} ${params.firstname} ${params.lastname} \n`}</Text>
<Text>Address: {`${params.address}`} </Text>
<Text>Contact: {`${params.contact1}`}, {`${params.contact2}`} </Text>
<Text>Account Number: {`${params.accountNumber}`}</Text>
<Text>Email Sent: {`${params.emailSent}`} </Text>
<Text>
  .
  .
  .

</Text>

<Text>Amount of Packages: Incomplete </Text>
<Text>Total Price: Incomplete</Text>
</Card>
<View>
        <TouchableOpacity style={styles.DetailsButton}
                    onPress={() => this.props.navigation.navigate('FindCustomer')}   

        ><Text style={styles.text}>Get Route</Text></TouchableOpacity>
</View>
<View>
    <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PackageDetails')}   
           style={styles.DetailsButton}>
      <Text style={styles.text}>View Packages</Text>
      </TouchableOpacity> 
</View>
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
  card:{
  borderWidth: 2,
  borderRadius: 5,
  borderColor: '#0984e3',
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
},
  DetailsButton:{
    backgroundColor: '#0984e3',
    color: '#fff',
    marginLeft: 75,
    marginRight: 75,
    borderRadius: 10,
    padding: 3,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListItem:{
    borderBottomWidth: 0
  },
  subtitle:{
    fontSize: 14,
    fontWeight: "100",
  },
  title:{
    textAlign: 'left',
    color: '#000',
    fontSize: 17,

  },
  Modal:{
    flex:1, 
    height: 600


      
   },
   ModalButton:{
      backgroundColor: '#0984e3',
      color: '#fff',
      marginLeft: 75,
    marginRight: 75,
    borderRadius: 10,

   },
   ModalInsideView:{
   flex: 1,
    backgroundColor : '#fafafa', 
    width: '100%',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#00BCD4'
   
  },

   text: {
   fontSize: 16, 
   fontWeight: '300',
  marginBottom: 5, 
  color: "#fff",
  padding: 10,
  textAlign: 'center'
 },

 load:{
   color: '#0984e3',
   textAlign: 'center',
   paddingTop: 5,
 },


})