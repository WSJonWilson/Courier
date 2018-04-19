import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import CustomHeader from './CustomHeader';


export default class ChatList extends React.Component {
   
  render() {
    return (

        <Container style={styles.container}>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1}}>
     <View style={styles.listContainer}> 
              <Text style={styles.text}> You have no new messages... get friends.</Text>
        </View>
          </Content>
          </Container>


    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fafafa',
    flex: 1,
  },
    text:{
        color: '#57606f',
        fontSize: 16,
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
  listContainer:{
    alignItems: 'center',
    justifyContent: 'center',
}
})