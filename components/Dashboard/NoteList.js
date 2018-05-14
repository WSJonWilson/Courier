import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button,} from 'native-base';
import CustomHeader from './CustomHeader';


export default class NoteList extends React.Component {
   
  render() {
    return (


        
          <View style={styles.listContainer}> 
              <Text style={styles.text}>You have no notes.. smart man</Text>
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
      color: '#fafafa',
      fontSize: 16,
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    }
});