import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import DeliveryDefault from './DeliveryDefault';
import PackageDetails from './PackageDetails';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class FindCustomer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections("40.1884979, 29.061018", "41.0082,28.9784")
  }

  async getDirections(startLoc, destinationLoc) {
    try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return  {
                latitude : point[0],
                longitude : point[1]
            }
        })
        this.setState({coords: coords})
        return coords
    } catch(error) {
        return error
    }
}


  render() {
    const { params } = this.props.navigation.state;
    return (

      <MapView style={styles.map} initialRegion={{
        latitude:41.0082, 
        longitude:28.9784, 
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>

      <MapView.Polyline 
          coordinates={this.state.coords}
          strokeWidth={2}
          strokeColor="red"/>
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,

  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
},
);