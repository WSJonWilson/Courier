import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import CustomHeader from './CustomHeader';


export default class ManagePayments extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Manage Payments",
        headerLeft: 
                    <Icon name="menu" size={20} 
                          style={{ paddingLeft: 10 }}
                          onPress={() => navigation.navigate('DrawerOpen')} 
                    />,
    
        drawerLabel: 'Manage Payments'
      })
  render() {
    return (

<Container style={styles.container}>
        <CustomHeader title="Manage Payments" styles={styles.title} drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1}}>

        <Card style={styles.cardContainer}>
          <View style={styles.boxContainer}> 
              <View>

              </View>

              <View style={styles.line}>
              </View>

        </View>
          <View style={styles.boxContainer}> 

              <View style={styles.line}>
              </View>

        </View>

          <View style={styles.boxContainer}> 
              <View style={styles.line}>
              </View>

        </View>
        
        
        </Card>


        <Card>
        </Card>
          <Button
            onPress={() => this.props.navigation.navigate('Map')} full>
            <Text style={{ color: 'white' }}>Find Route</Text>
          </Button>

        </Content>
      </Container>

    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#487eb0',
    flex: 1,
  },
  cardContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',

  },   
  icon: {
    width: 24,
    height: 24,
  },
  boxContainer:{
    margin: 2,
    width: Dimensions.get('window').width /3 -6,
    height: 150,
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
    text:{
      color: '#0984e3',
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 10,
    },
    title:{
      fontSize: 14,
      textAlign: 'left',
    },
    counter:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
    },
    line: {
      borderBottomColor: '#d1d8e0',
      borderBottomWidth: 1,
    },

});