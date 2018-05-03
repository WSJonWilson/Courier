import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomHeader from './CustomHeader';



export default class CustomerDetails extends React.Component {

  render() {

    const { region } = this.props;

    return (

<Container style={styles.container}>
        <CustomHeader title="Customer Details" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <SearchBar
  placeholder='Type Here...' />
        
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
    height: 350,
    width: 450,
    justifyContent: 'center',
    alignItems: 'center',
},
cardContainer:{
  backgroundColor: '#fafafa',
},
contentContainer:{
    flex: 1, 
    padding: 10
    }
}
)