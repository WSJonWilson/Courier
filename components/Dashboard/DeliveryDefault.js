import React, { Component } from 'react';
import { Card, FlatList, FlatListProperties, ActivityIndicator,TouchableOpacity, View, Text, Alert} from 'react-native';


export default class DeliveryDefault extends Component {
  

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }


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
        dataSource: responseJson.package,
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
   <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Text>
          {item.PackageNumber}, 
          {item.InternationalTrackingNumber}
          </Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
  );
}

//https://codeburst.io/integrating-react-native-apps-with-back-end-code-using-fetch-api-8aeb83dfb428
}