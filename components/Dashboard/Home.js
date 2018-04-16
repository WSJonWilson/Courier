import React, { Component } from "react";
import { ScrollView, Text, Linking, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, CardItem, Container, Header, Icon, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: 
                <Icon name="menu" size={20} 
                      style={{ paddingLeft: 10 }}
                      onPress={() => navigation.navigate('DrawerOpen')} 
                />,

    drawerLabel: 'Home'
  })


  render() {
    return (

      <Container style={styles.container}>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1}}>
  {/* *********** COUNTER HEADER ***********/}

        <View style={styles.viewContainer}>
          <View style={styles.boxContainer}> 
              <Text style={styles.text}> No. of packages </Text>
              <View>

              </View>

              <View style={styles.line}>
              <Text style={styles.counter}> 20 </Text>
              <Text style={styles.text}> Remaining </Text>
              </View>

        </View>
          <View style={styles.boxContainer}> 

              <Text style={styles.text}> No. of Customers </Text>
              <View style={styles.line}>
              <Text style={styles.counter}> 32 </Text>
              <Text style={styles.text}> Remaining </Text>

              </View>

        </View>

          <View style={styles.boxContainer}> 
              <Text style={styles.text}> Cash Collected </Text>
              <View style={styles.line}>
              <Text style={styles.counter}> $0.00 </Text>

              </View>

        </View>
        
        </View>

  {/* *********** NOTES ***********/}

        <View>
          <Text style={styles.heading}>Notes</Text>
          </View>
        <Card style={styles.cardContainer}>
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

        <View>
          <Text style={styles.heading}>Chat</Text>
          </View>

        <Card>
          <ScrollView>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Chat</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>
          <Text>Notes</Text>

            </ScrollView>
        </Card>
          

        </Content>
      </Container>

    )
  }

}

export default Home;


  const styles = StyleSheet.create({
  container:{
    backgroundColor: '#487eb0',
    flex: 1,
  },
  viewContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
  },   
  icon: {
    width: 24,
    height: 24,
  },
  boxContainer:{
   // margin: 2.2,
    width: Dimensions.get('window').width /3, //-5,
    height: 120,
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderColor: '#3867d6',
    borderWidth: 1,
  },
  cardContainer:{
    backgroundColor: '#fafafa'
  },
    text:{
      color: '#0984e3',
      fontSize: 12,
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center'
    },
    counter:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 24,
    },
    line: {
      borderBottomColor: '#d1d8e0',
      borderBottomWidth: 1,
    },

    heading:{
      fontSize: 18,
      fontWeight: '300',
      color: '#fff',
      textAlign: 'center',

    }

});