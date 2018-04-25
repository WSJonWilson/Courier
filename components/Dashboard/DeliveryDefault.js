import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator, TouchableOpacity, TouchableHighlight, StyleSheet,  View, Text, TextInput, Alert} from 'react-native';
import { List, ListItem } from "react-native-elements";
import Modal from 'react-native-modal';
import { Button, Container, Header, Content, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
import CustomHeader from './CustomHeader';

import DeliveryDetails from  './DeliveryDetails'


export default class DeliveryDefault extends Component {
  

  constructor(props){
    super(props);
    this.state = { isLoading: true,
        text: ''}
  }

  //Modal 
  state = {
    isModalVisible: false
    };

    _onPressItem = (item) => { 
      this._showModal(item);
  };

  _showModal = (selectedItem) => this.setState({ isModalVisible: true, selectedItem });

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round
             onChangeText={(text) => this.SearchFilterFunction(text)}
             value={this.state.text}
             underlineColorAndroid='transparent'
              />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
         // paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  componentDidMount(){

  fetch('http://websource.shipwebsource.com/logiksys/courier-app-services/get-route-packages.php')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.customer 
      }, function(){
      });
   })
    .catch((error) => {
      console.error(error);
    });
    
}
  

_toggleModal = () =>
this.setState({ isModalVisible: !this.state.isModalVisible });

  render(){
    const { navigation } = this.props

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent: 'center', alignContent: 'center'}}>
          <ActivityIndicator/>
          <Text style={styles.load}>Loading Customers...</Text>
        </View>
      )
    }

  return(
<Container>
<Modal isVisible={this.state.isModalVisible}
       animationType={"slide"}
       onSwipe={() => this.setState({ isVisible: false })}
       swipeDirection="left">
          <View style={styles.modal}>
            <View style={styles.ModalInsideView}>
            <View style={{backgroundColor: '#00BCD4', paddingTop: 50, }}>
            <TouchableOpacity 
                onPress= {this._toggleModal}>
                    <Icon name="close" 
                            size={20}
                            style={{color: 'red',
                                    right: 5,
                                    position: 'absolute',
                                    top: 5, 
                                    right: 5}}/>
            </TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '100',}}>Additional Details for (FirstName, LastName)</Text>
            </View>
            <Text>Address: (Address)</Text>
            <Text>Contact: (555-5555)</Text>
            <Text>Total Cost: (Total Cost)</Text>
            <TouchableOpacity style={styles.DetailsButton}><Text style={styles.text}>Get Route</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryDetails')}   
           style={styles.DetailsButton}>
           <Text style={styles.text}>View Packages</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>

   <List style={{flex: 1,}}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          keyExtractor={item => item.AccountNumber}
          renderItem={({item}) => 
          
          <TouchableOpacity
          onPress={this._toggleModal}>
          
          <ListItem
          title={     
          <View>     
          <Text style={styles.title}>
                {`${item.Title} ${item.FirstName} ${item.LastName}`} - #{`${item.AccountNumber}`}
          </Text>
         </View>
          }
            subtitle={
            <View style={styles.subtitle}>
             <Text>{`${item.Tel1}`} / {`${item.Tel2}`}</Text><Text style={{fontSize: 14, color: '#0984e3', fontWeight: '400'}}>0 Packages</Text>
            <Text>
            {`${item.Primary_DeliveryStreet1}, ${item.Primary_DeliveryStreet2}, ${item.Primary_DeliveryCity}`}
            </Text>
            </View>
          }
          
          />
              
          </TouchableOpacity>
             
      }/>
      </List>
  
</Container>
  );
}

//https://codeburst.io/integrating-react-native-apps-with-back-end-code-using-fetch-api-8aeb83dfb428
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
    justifyContent: 'center',
     alignItems: 'center'

      
   },
   ModalButton:{
      backgroundColor: '#0984e3',
      color: '#fff',
      marginLeft: 75,
    marginRight: 75,
    borderRadius: 10,

   },
   ModalInsideView:{
 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor : "#fefefe", 
    height: 400 ,
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