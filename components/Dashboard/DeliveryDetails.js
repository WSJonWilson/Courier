import React, {Component} from 'react'
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Card, FormLabel, FormInput} from 'react-native-elements';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right
} from 'native-base';
import CustomHeader from './CustomHeader';
import PackageDetails from './PackageDetails';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import querystring from 'query-string';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
var geocoder;
var location;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?key='
const key = 'AIzaSyAkDZYuC_Cg5Q3ln0e6kRdPtMfoFwNDvr8'

export default class DeliveryDetails extends Component {

  constructor(props) {
    super(props);

    this.setState = {
      location: ''
    }
    //state
  };

  async codeAddress(address) {

    const res = await fetch( `${url}`+`${key}`+'&address='+`${address}`);
    const gdata = res.json()
      .then((gdata) => {
        if (gdata.status === 'OK') {
          console.warn(gdata);
          return <MapView.Marker
    coordinate={{
      latitude: gdata.results[0].geometry.location.lat,
      longitude: gdata.results[0].geometry.location.lng
    }}
    />
        }
         else 
        {
          throw new Error(`Error: ${gdata.status}`);
        }
      })
  }


  render() {
    const {params} = this.props.navigation.state;
    const address = params.address;
    console.warn(address);
  
    
    return (

      <Container style={styles.container}>

        <Content
          contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          height: 650
        }}>

          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            followUserLocation={true}
            zoomEnabled={true}
            pitchEnabled={true}
            showsCompass={true}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
            initialRegion={{
            latitude: 10.6186137,
            longitude: -61.34718,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}>

            <MapView.Marker
              coordinate={{
              latitude: 10.6186137,
              longitude: -61.34718,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
              title={"title"}
              description
              ={"Testing 123456789"}/>
          </MapView>
        </Content>
        <Content
          contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          alignContent: 'stretch',
          height: 400
        }}>
          <Card style={{
            flex: 1,
            backgroundColor: '#f6f6f6',
            position: 'relative',
            paddingBottom: 10,
            marginBottom: 30,
            height: 350,
            top: 0,
            left: 0,
            right: 0
          }}>
            <View style={{
              paddingBottom: 30,
              backgroundColor: '#263238',

            }}>
              <Text style={styles.text}>Full Name: {`${params.title} ${params.firstname} ${params.lastname} \n`}</Text>
              <Text style={styles.text}>Address: {`${params.address}`}
              </Text>
              <Text style={styles.text}>Contact: {`${params.contact1}`}, {`${params.contact2}`}
              </Text>
              <Text style={styles.text}>Account Number: {`${params.accountNumber}`}</Text>
              <Text style={styles.text}>Email Sent: {`${params.emailSent}`}
              </Text>
      
            </View>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.DetailsButton}
                  onPress={() => this.props.navigation.navigate("FindCustomer", {address: `${params.address}`})}>
                  <Text style={styles.buttonText}>Route</Text>
                </Button>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => this.props.navigation.navigate('PackageDetails')}
                  style={styles.DetailsButton}>
                  <Text style={styles.buttonText}>Packages</Text>
                </Button>
              </View>

              <View style={styles.buttonContainer}>
                <Button onPress={this.codeAddress} style={styles.DetailsButton2}>
                  <Text style={styles.buttonText}>Location</Text>
                </Button>
              </View>
            </View>
          </Card>

        </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    justifyContent: 'space-between'
  },

  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },

  buttonContainer: {
    flex: 1
  },

  DetailsButton: {
    backgroundColor: '#0984e3',
    color: '#fff',
    borderRadius: 5,
    paddingTop: 25,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 25,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,

  },
  DetailsButton2: {
    backgroundColor: '#0984e3',
    color: '#fff',
    borderRadius: 5,
    paddingTop: 25,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 25,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 22

  },

  ListItem: {
    borderBottomWidth: 0
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "100"
  },
  title: {
    textAlign: 'left',
    color: '#000',
    fontSize: 17
  },

  map: {
    position: 'relative',
    paddingBottom: 100,
    height: 650,
    left: 0,
    right: 0,
    flex: 1
  },

  text: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    padding: 10,
    color: '#fff',
    textAlign: 'center'
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    color: "#fff",
    padding: 10,
    textAlign: 'center'
  },

  load: {
    color: '#0984e3',
    textAlign: 'center',
    paddingTop: 5
  }
})