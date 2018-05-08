import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import DeliveryDefault from './DeliveryDefault';
import PackageDetails from './PackageDetails';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoder';



export default class FindCustomer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  componentDidMount() {
   
  }

  geocodeAddress(geocoder, resultsMap){
    var address = params.address;
    gecoder.gecode({'address': address}, function(results, status){
      if (status == 'OK'){
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new GooglePlacesAutocomplete.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        })
      } else {
        alert('Geicide was bit successful for the following reason: '+ status);
      }
    });
  }
  render() {
    const { params } = this.props.navigation.state;
    return (

      <MapView style={styles.map} initialRegion={{
        latitude: 10.6186137,
        longitude: -61.34718,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>

      <MapView.Marker
        coordinate={{
          latitude: 10.6186137,
          longitude: -61.34718,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
                  }}
        title={"title"}
        description ={"Testing 123456789"} 

        />
      </MapView>
      

    )
  }

}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#487eb0'
  },
  map: {
    position: 'absolute',
   height: 500,
   left: 0,
   right: 0,
    flex: 1,

  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
},
);