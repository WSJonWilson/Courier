import React, {Component} from 'react'
import {
  Modal,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
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
import Geocoder from 'react-native-geocoder';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default class FindCustomer extends Component {

  constructor(props) {
    super(props)
    const {navigation} = this.props;
    this.state = {
      coords: [
        {
          latitude: 10.6186137,
          longitude: -61.34718
        }, {
          address: 10.5186137
        }
      ]
    };
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate
      ]
    });
  }

  componentDidMount() {}

  render() {
    const {params} = this.props.navigation.state;
    return (
      <Container style={styles.container}>

        <View>
          <View style={styles.DetailsContainer}>
            <Card style={styles.card}>
              <Text>content content:
              </Text>
              <Text>content content:
              </Text>
              <Text>content content:
              </Text>

              <View style={styles.buttonContainer}
              showsUserLocation={true}
              followUserLocation={true}
              zoomEnabled={true}
              pitchEnabled={true}
              showsCompass={true}
              showsBuildings={true}
              showsTraffic={true}
              showsIndoors={true}
              >
                <TouchableOpacity style={styles.DetailsButton}>
                  <Text style={styles.text}>View Packages</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.DetailsButton}>
                  <Text style={styles.text}>Complete</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>

          <MapView
            style={styles.map}
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

        </View>

      </Container>

    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#487eb0'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  map: {
    position: 'absolute',
    height: 800,
    left: 0,
    right: 0,
    flex: 1
  },

  buttonContainer: {

    width: Dimensions
      .get('window')
      .width / 3, //DISPLAY BUTTONS IN 1 ROW
    margin: 3,
    alignItems: 'center'
  },

  DetailsButton: {
    backgroundColor: '#0984e3',
    color: '#fff',
    width: 150,
    borderRadius: 10,
    padding: 5,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  },
  card: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#0984e3',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
},);