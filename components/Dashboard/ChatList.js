import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import CustomHeader from './CustomHeader';


export default class ChatList extends React.Component {
   
  render() {
    return (


     <View style={styles.listContainer}> 
              <Text style={styles.text}> You have no new messages... get friends.</Text>
        </View>
          



    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#487eb0',
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