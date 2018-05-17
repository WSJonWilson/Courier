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
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {fetchPackageDetails} from '../redux/actions/packageActions';



 class DeliveryDefault extends Component {
  

  constructor(props){
    
    super(props);
    const { navigation } = this.props;

    this.state = { 
      selectedItem: null,
      text: ''
    };
  };



  // //  // //  // //  // //  // //  //
  // // // RENDER FUNCTIONS   // //  //
  // //  // //  // //  // //  // //  //
    
    async PackageData(data, x) {
      data = this.props.package.package; 

      for (var i=0, info=data.length; i<info; i++) {
        if (data[i].AccountNumber == x) 
        return data[i];
      }
      console.warn(data[i])
    }
    
  

  renderItem = ({item}) => (       
    <TouchableOpacity>

    <ListItem
      style={{ 
        backgroundColor: '#263238'
            }}
          item={item}
          onPress={

          //OnPress should go through all arrays, select the objects with same ID (AccountNumber)
         // and return their parent objects, passing them through the navigation. 

            () => this.props.navigation.navigate("DeliveryDetails", { 
          title: `${item.Title}`,
          firstname: `${item.FirstName}`,
          lastname: `${item.LastName}`,
          address: `${item.Primary_DeliveryStreet1}, ${item.Primary_DeliveryStreet2}, ${item.Primary_DeliveryCity}`,
          contact1: `${item.Tel1}` ,
          contact2: `${item.Tel2}` ,
          accountNumber: `${item.AccountNumber}`,
          emailSent: `${item.EmailSent}`,
         })
        }
        title={     
               <View>     
                  <Text style={styles.title}>
                  {`${item.Title} ${item.FirstName} ${item.LastName}`} - #{`${item.AccountNumber}`} 
                  </Text> 
               </View>
              }
        subtitle={
              <View style={styles.subtitle}>
                  <Text>{`${item.Tel1}`} / {`${item.Tel2}`}</Text>
                  <Text>
                        {`${item.Primary_DeliveryStreet1}, ${item.Primary_DeliveryStreet2}, ${item.Primary_DeliveryCity}`}
                 </Text>
              </View>
                 }    
    />     
    </TouchableOpacity> 
    );

  
        //Function for passing data through return
        // https://codereview.stackexchange.com/questions/25858/json-lookup-by-key
    

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
    if (this.props.package.customer == null) return null;

    return (
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  componentDidMount(){
this.props.fetchPackageDetails();

}



  render(){
    const { navigation } = this.props

   if(this.props.package.customer == null){
     return(
    <View style={{flex: 1, padding: 20, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator animating size="large"/>
       <Text style={styles.load}>Loading Customers...</Text>
     </View>
   )
}

  return(
<Container>

   <List style={{
     flex: 1,
     backgroundColor: '#263238'
          }}>
        <FlatList
          data={this.props.package.customer}
          //this.props.package.multiplearrays
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

const mapStateToProps = state => ({
  package: state.package.items
})
export default connect(mapStateToProps, {fetchPackageDetails})(DeliveryDefault);

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
    borderBottomWidth: 0,
    backgroundColor: '#263238'
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
   fontSize: 18,
   paddingTop: 5,
 },


})

