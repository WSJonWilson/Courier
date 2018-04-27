import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator, TouchableOpacity, TouchableHighlight, StyleSheet,  View, Text, TextInput, Alert} from 'react-native';
import { List, ListItem } from "react-native-elements";
import Modal from 'react-native-modal';
import { Button, Container, Header, Content, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
import CustomHeader from './CustomHeader';

import DeliveryDetails from  './DeliveryDetails'
import ModalDetails from './Modal';



export default class DeliveryDefault extends Component {
  

  constructor(props){
    
    super(props);
    const { navigation } = this.props;

    this.state = { isLoading: true,
      isModalVisible: false,
      selectedItem: null,
        text: ''};
  };

   onPressItem = (item) => { 
    this.toggleModal (item);
  };

  hideMyModal = () => {
    this.setState({isModalVisible: false})
}
  
toggleModal = (item) => this.setState({ isModalVisible: true, 
  selectedItem: item })
  
  _keyExtractor = (item, index) => item.id;

 /* setModalVisible(visible) {
    this.setState({modalVisible: visible});
  } */

  
  renderItem = ({item}) => (       
    <TouchableOpacity
    onPress={this.toggleModal}
    >

    <ListItem
        item={item}
        onPressItem={() => this._onPressItem(item)}
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
     
    );

    
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
      },
       function(){
      });
   })
    .catch((error) => {
      console.error(error);
    });
    
}

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
{this.state.selectedItem && 
<ModalDetails
        modalVisible={this.state.isModalVisible} 
        selectedItem={this.state.selectedItem}
        hideModal={this.hideMyModal}         />}

   <List style={{flex: 1,}}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
          keyExtractor={item => item.AccountNumber}
      />
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