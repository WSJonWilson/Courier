import React from 'react'
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


export default class DeliveryDefault extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
       let tabBarLabel = 'Default';
       return {tabBarLabel};
      }

  render() {
    return (

<Container style={styles.container}>
        <Content
          contentContainerStyle={{ flex: 1,}}>
                  <CustomHeader title="Start Deliveries" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
                  <SearchBar
  placeholder='Type Here...' />
  <ScrollView>
                  <Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
<Card>
<Text>Tab 1</Text>
</Card>
</ScrollView>
                </Content>
</Container>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
})