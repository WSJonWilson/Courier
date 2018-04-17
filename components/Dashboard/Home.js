import React, { Component } from "react";
import { ScrollView, Text, Linking, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, CardItem, Container, Header, Icon, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';
import NoteList from '../Dashboard/NoteList';
import ChatList from '../Dashboard/ChatList';


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
        
      <Card style={styles.cardContainer}>
              <View style={styles.boxContainer}> 
              <Text style={styles.counter}> 0 </Text>
              <Text style={styles.text}>Packages Left</Text>
             </View>

              <View style={styles.boxContainer}> 
              <Text style={styles.counter}> 0 </Text>
              <Text style={styles.text}>Customers Left</Text>
             </View>

              <View style={styles.boxContainer}> 
              <Text style={styles.counter}> $0.00 </Text>
              <Text style={styles.text}> Cash Collected </Text>   
              </View>
       </Card> 
  </View>  
  {/* *********** NOTES ***********/}
        <Card style={styles.notesContainer}>
        <View>
        <Text style={styles.heading}>Notes</Text>
        </View>
        <View style={styles.line}>
        </View>
        <ScrollView>
        <NoteList />
          </ScrollView>

          <Button        
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Map')} full>
            <Text>New Note</Text>
          </Button>

        </Card>

        <Card style={styles.chatContainer}>
        <View>
        <Text style={styles.heading}>Chat</Text>
        </View>
        <View style={styles.line}>
        </View>
          <ScrollView>
          <ChatList />
            </ScrollView>

            <Button
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Map')} full
            >
            <Text>New Message</Text>
          </Button>
        </Card>
          

        </Content>
      </Container>

    )
  }

}

export default Home;

  const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f6f6f6',
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
    width: Dimensions.get('window').width /3 -5, //Review Dimensions Component
    margin: 3,
    alignItems: 'center',
    },

  cardContainer:{
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'row',
    height: 130,
    paddingTop: 10, 
    marginTop: 10,

  },

    text:{
      color: '#0984e3',
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center'
    },

    counter:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 26,
    },

  line:{
    borderBottomWidth: 2,
    borderColor: '#0000',
    marginBottom: 5,
   },

    heading:{
      fontSize: 20,
      fontWeight: '300',
      color: '#0984e3',
      textAlign: 'center',

    },
    notesContainer:{
      backgroundColor: '#fefefe',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: -90
    },
    chatContainer:{
      backgroundColor: '#fefefe',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 13
   
    },
    Button:{
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15,
      color: '#ffff',
      backgroundColor: '#1e90ff',
    }

});