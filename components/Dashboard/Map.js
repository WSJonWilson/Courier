import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomHeader from './CustomHeader';



export default class GMap extends React.Component {

  render() {

    const { region } = this.props;

    return (

<Container style={styles.container}>
        <CustomHeader title="Map" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <SearchBar
  placeholder='Type Here...' />
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
<View style={styles.cardContainer}>
     <Card>
     <ScrollView>
        <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
      </ScrollView>   
     </Card>
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
    height: 350,
    width: 450,
    justifyContent: 'center',
    alignItems: 'center',
},
cardContainer:{
  backgroundColor: '#fafafa',


}
})