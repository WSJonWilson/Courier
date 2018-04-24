import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator, TouchableOpacity, TouchableHighlight, StyleSheet,  View, Text, TextInput, Alert} from 'react-native';
import { List, ListItem } from "react-native-elements";
import Modal from 'react-native-modal';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { SearchBar } from 'react-native-elements';
import CustomHeader from './CustomHeader';


export default class DeliveryDefault extends Component {
  

  constructor(props){
    super(props);
    this.state = { isLoading: true,  text: ''}
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

  return fetch('http://websource.shipwebsource.com/logiksys/courier-app-services/get-route-packages.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
})
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        isLoading: false,
        dataSource: responseJson.customer,
       
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
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
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
            <Text>Additional Details for (FirstName, LastName)</Text>
            <Text>Address: (Address)</Text>
            <Text>Contact: (555-5555)</Text>
            <Text>Total Cost: (Total Cost)</Text>
            <Button title="Get Route"/>
            <Button title="View Packages"/>

            <TouchableOpacity 
                    onPress= {this._toggleModal}
                    style={styles.ModalButton}>
              <Text style={styles.text}> Close Modal </Text>
            </TouchableOpacity>
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
             <Text>{`${item.Tel1}`}</Text><Text style={{fontSize: 14, color: '#0984e3', fontWeight: '400'}}>0 Packages</Text>
            <Text>
            {`${item.Primary_DeliveryStreet1}, ${item.Primary_DeliveryCity}`}
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

  Button:{
    marginTop: 5,
    marginLeft: 100,
    marginRight: 100,
    color: '#0984e3',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#0984e3',
    borderWidth: 2,
    justifyContent: 'center'
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

})