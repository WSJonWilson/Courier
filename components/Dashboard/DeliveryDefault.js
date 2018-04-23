import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator, Modal, TouchableOpacity, TouchableHighlight, StyleSheet,  View, Text, TextInput, Alert} from 'react-native';
import { List, ListItem } from "react-native-elements";
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
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


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
<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Closed customer details..');
          }}>
          <View style={{marginTop: 22, backgroundColor: '#f6f6f6'}}>
            <View>

              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide</Text>
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
            onPress={() => {
              this.setModalVisible(true);
            }}>
          
          <ListItem
          title={       
          <Text style={styles.title}>
                {`${item.Title} ${item.FirstName} ${item.LastName}`} <Text style={{fontSize: 14, color: '#0984e3', fontWeight: '400'}}>, 0 Packages</Text>
          </Text>
          }
            subtitle={
            <View style={styles.subtitle}>
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
  CustomHeader:{
    position: 'absolute',
    
  },
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

  }
})