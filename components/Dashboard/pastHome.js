// import React, {Component} from "react";
// import {
//   ScrollView,
  
//   Text,
//   Linking,
//   View,
//   StyleSheet,
//   Image,
//   Dimensions
// } from "react-native";
// import {
//   Button,
//   Card,
//   CardItem,
//   Container,
//   Header,
//   Icon,
//   Content,
//   Left,
//   Right
// } from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
// import CustomHeader from './CustomHeader';
// import NoteList from '../Dashboard/NoteList';
// import ChatList from '../Dashboard/ChatList';
// import Chat from '../Dashboard/Chat';
// import Note from '../Dashboard/Note';

// class Home extends Component {
//   static navigationOptions = ({navigation}) => ({
//     title: "Home", headerLeft: <Icon
//       name="menu"
//       size={20}
//       style={{
//       paddingLeft: 10
//     }}
//       onPress={() => navigation.navigate('DrawerOpen')}/>,

//     drawerLabel: 'Home'
//   })

//   render() {
//     return (

// //       <LinearGradient colors={['#37474f', '#37474f']} style={styles.container}>
// //         <CustomHeader
// //           title="Home"
// //           drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}/>
// //         <Content contentContainerStyle={{
// //           flex: 1
// //         }}>

// //           {/* *********** COUNTER HEADER ***********/}

// //           <View style={styles.viewContainer}>

// //             <View style={styles.cardContainer}>
// //               <View style={styles.boxContainer}>
// //                 <Text style={styles.counter}>
// //                   0
// //                 </Text>
// //                 <Text style={styles.text}>Packages Left</Text>
// //               </View>

// //               <View style={styles.boxContainer}>
// //                 <Text style={styles.counter}>
// //                   0
// //                 </Text>
// //                 <Text style={styles.text}>Customers Left</Text>
// //               </View>

// //               <View style={styles.boxContainer}>
// //                 <Text style={styles.counter}>
// //                   $0.00
// //                 </Text>
// //                 <Text style={styles.text}>
// //                   Cash Collected
// //                 </Text>
// //               </View>
// //             </View>
// //           </View>
// // <Container style={{backgroundColor: '#000',
// //                      alignItems: 'stretch',
// //                      alignContent: 'center',
// //                      justifyContent: 'center',
// //                   }}>
// //           <Card style={styles.notesContainer}>
// //             <View>
// //               <Text style={styles.heading}>Notes</Text>
// //             </View>
// //             <View style={styles.line}></View>
// //             <ScrollView>
// //               <NoteList/>
// //             </ScrollView>

// //             <Button
// //               style={styles.Button}
// //               onPress={() => this.props.navigation.navigate('Note')}
// //               full>
// //               <Text style={styles.text2}>New Note</Text>
// //             </Button>
// //           </Card>
// // </Container>
// // <Container style={{backgroundColor: '#000'}}>

// //           <Card style={styles.chatContainer}>
// //             <View>
// //               <Text style={styles.heading}>Chat</Text>
// //             </View>
// //             <View style={styles.line}></View>
// //             <ScrollView>
// //               <ChatList/>
// //             </ScrollView>

// //             <Button
// //               style={styles.Button}
// //               onPress={() => this.props.navigation.navigate('Chat')}
// //               full>
// //               <Text style={styles.text2}>New Message</Text>
// //             </Button>
// //           </Card>
// // </Container>
// //     </Content>
// //       </LinearGradient>

//     )
//   }

// }

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000'
//   },
//   viewContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     backgroundColor: '#000',
//   },

//   icon: {
//     width: 24,
//     height: 24
//   },

//   boxContainer: {
//     width: Dimensions
//       .get('window')
//       .width / 3 - 5, //Review Dimensions Component
//     margin: 3,
//     alignItems: 'center'
//   },

//   cardContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     height: 130,
//     paddingTop: 22,
//     marginTop: 0,
//     backgroundColor: '#263238'
//   },

//   text: {
//     color: '#fafafa',
//     fontSize: 14,
//     paddingTop: 10,
//     paddingBottom: 10,
//     alignItems: 'center'
//   },
  
//   text2: {
//     color: '#263238',
//     fontSize: 14,
//     paddingTop: 10,
//     paddingBottom: 10,
//     alignItems: 'center'
//   },

//   counter: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontSize: 26,
//     color: '#fff'
//   },



//   heading: {
//     fontSize: 20,
//     fontWeight: '300',
//     color: '#0984e3',
//     textAlign: 'center'
//   },
//   notesContainer: {
//     flex: 1,
//     alignItems: 'stretch',
//     alignContent: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#263238',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//     elevation: 0
//   },
//   chatContainer: {
//     backgroundColor: '#263238',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//     marginTop: 13,
//     elevation: 0
//   },
//   Button: {
//     marginTop: 5,
//     marginLeft: 100,
//     marginRight: 100,
//     color: '#0984e3',
//     backgroundColor: '#cfd8dc',
//   }

// });