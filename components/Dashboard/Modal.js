import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator, TouchableOpacity, TouchableHighlight, StyleSheet,  View, Text, TextInput, Alert} from 'react-native';
import { List, ListItem } from "react-native-elements";
import Modal from 'react-native-modal';
import { Button, Container, Header, Content, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
import CustomHeader from './CustomHeader';

import DeliveryDetails from  './DeliveryDetails';
import DeliveryDefault from './DeliveryDefault';


export default class ModalDetails extends Component {    

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            isModalVisible: props.modalVisible
        };
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
      return (
        <View>

<Modal visible={this.props.modalVisible}
       animationType={"fade"}
       onRequestClose={() => { this.props.hideModal() }}
       selectedItem={this.props.selectedItem}
       swipeDirection="left">
          <View style={styles.Modal}>
            <View style={styles.ModalInsideView}>
            <View>
            <TouchableOpacity 
                            onPress={() => { this.props.hideModal() }}>
                            <Icon name="close" 
                            size={25}
                            style={{color: 'green', 
                                    marginLeft: 335,
                                    paddingTop: 10,
                                    }}/>
            </TouchableOpacity>
            <View>
            <Text style={{textAlign: 'center', fontSize: 18, paddingBottom: 20 }}>Additional Details</Text>

            <Text style={{textAlign: 'center', fontSize: 18, }}>Account #: {`${this.props.customer}`}</Text>
            <Text style={{textAlign: 'center', fontSize: 18, }}>Name:</Text>
            <Text style={{textAlign: 'center', fontSize: 18, }}>Address:</Text>
            <Text style={{textAlign: 'center', fontSize: 18, }}>Contact:</Text>
            <Text style={{textAlign: 'center', fontSize: 18, paddingBottom: 20 }}>Number of Packages:</Text>

            </View>
            </View>

        <TouchableOpacity style={styles.DetailsButton}><Text style={styles.text}>Get Route</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryDetails')}   
           style={styles.DetailsButton}>
      <Text style={styles.text}>View Packages</Text>
      </TouchableOpacity> 
            </View>
          </View>
        </Modal>
</View>
      )
    }
}
const styles = StyleSheet.create({

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