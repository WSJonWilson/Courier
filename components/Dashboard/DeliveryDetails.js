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
import DeliveryDefault from './DeliveryDefault';
import PackageDetails from './PackageDetails';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
var geocoder;

export default class DeliveryDetails extends Component {

  constructor(props) {
    super(props);
    };

     codeAddress() {
      Geocoder.init('AIzaSyAcyBKStwZ2oeVgqNn7GwrGu9g0EQtbDpI'); // use a valid API key
      Geocoder.from(address)
          .then(json => {
            var location = json.results[0].geometry.location;
            console.warn(location);
          }); 
          if (location == true){
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        }
      }

  render() {
    const {params} = this.props.navigation.state;
    const address = params.address;
    // var geocoder = new google.maps.Geocoder(); var address =
    // this.props.navigation.state.address; geocoder.geocode( { 'address': address},
    // function(results, status) { if (status == google.maps.GeocoderStatus.OK) {
    //  var latitude = results[0].geometry.location.latitude;     var longitude =
    // results[0].geometry.location.longitude;     console.warn(latitude);     } });

    return (

      <Container style={styles.container}>

        <Content contentContainerStyle={{
          flex: 1
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
          <Card style={styles.card}>
            <Text>Full Name: {`${params.title} ${params.firstname} ${params.lastname} \n`}</Text>
            <Text>Address: {`${params.address}`}
            </Text>
            <Text>Contact: {`${params.contact1}`}, {`${params.contact2}`}
            </Text>
            <Text>Account Number: {`${params.accountNumber}`}</Text>
            <Text>Email Sent: {`${params.emailSent}`}
            </Text>
            <Text>
              . . .
            </Text>

            <View style={styles.buttonWrapper}>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.DetailsButton}
                  onPress={() => this.props.navigation.navigate("FindCustomer", {address: `${params.address}`})}>
                  <Text style={styles.text}>Get Route</Text>
                </Button>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => this.props.navigation.navigate('PackageDetails')}
                  style={styles.DetailsButton}>
                  <Text style={styles.text}>View Packages</Text>
                </Button>
              </View>

            <View style={styles.buttonContainer}>
                <Button
                  onPress={this.codeAddress}
                  style={styles.DetailsButton}>
                  <Text style={styles.text}>Get Location</Text>
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
    backgroundColor: '#f6f6f6'
  },

  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonContainer: {
    flex: 1
  },

  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0984e3',
    position: 'relative',
    paddingBottom: 10,
    marginBottom: 30,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  DetailsButton: {
    backgroundColor: '#0984e3',
    color: '#fff',
    borderRadius: 10,
    padding: 5,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
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
  Modal: {
    flex: 1,
    height: 600

  },

  map: {
    position: 'relative',
    height: 700,
    left: 0,
    right: 0,
    flex: 1
  },

  ModalButton: {
    backgroundColor: '#0984e3',
    color: '#fff',
    marginLeft: 75,
    marginRight: 75,
    borderRadius: 10
  },
  ModalInsideView: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: '100%',
    borderRadius: 10,
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

  load: {
    color: '#0984e3',
    textAlign: 'center',
    paddingTop: 5
  }
})