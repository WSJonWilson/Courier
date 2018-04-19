import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CustomHeader from './CustomHeader';



export default class GMap extends React.Component {

  render() {

    const { region } = this.props;

    return (

<Container style={styles.container}>
        <CustomHeader title="Map" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, padding: 10 }}>   

        <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 10.6186137,
            longitude: -61.34718,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
          </View>

                </Content>
</Container>

    )
  }
  
}


const styles = StyleSheet.create({
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

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'YOUR API KEY',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}

      debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );


}