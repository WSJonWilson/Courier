import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  ListView,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Dimensions
} from "react-native";
import {
  Card,
  Form,
  Input,
  Label,
  Item,
  Icon,
  List,
  ListItem,
  Button,
  Container,
  Header,
  Footer,
  Content,
  Left,
  Right
} from 'native-base';
import CustomHeader from './CustomHeader';
import * as firebase from 'firebase';

var data = []
const firebaseConfig = {

  apiKey: "AIzaSyAVKTCqHlIxeorY_PNoVHiECHEO9v0z74A",
  authDomain: "websource-1524141603398.firebaseapp.com",
  databaseURL: "https://websource-1524141603398.firebaseio.com",
  projectId: "websource-1524141603398",
  storageBucket: "websource-1524141603398.appspot.com",
  messagingSenderId: "228322576913"
};

firebase.initializeApp(firebaseConfig);

var data = []

export default class ChatList extends React.Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      listViewData: data,
      newContact: ""
    }

  }

  componentDidMount() {

    var that = this

    firebase
      .database()
      .ref('/notes')
      .on('child_added', function (data) {

        var newData = [...that.state.listViewData]
        newData.push(data)
        that.setState({listViewData: newData})

      })

  }

  addRow(data) {

    var key = firebase
      .database()
      .ref('/notes')
      .push()
      .key
    firebase
      .database()
      .ref('/notes')
      .child(key)
      .set({name: data})
  }

  async deleteRow(secId, rowId, rowMap, data) {

    await firebase
      .database()
      .ref('notes/' + data.key)
      .set(null)

    rowMap[`${secId}${rowId}`]
      .props
      .closeRow();
    var newData = [...this.state.listViewData];
    newData.splice(rowId, 1)
    this.setState({listViewData: newData});

  }

  showInformation() {}

  renderSeparator = () => {
    return (<View
      style={{
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "14%"
    }}/>);
  };

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Notes"
          drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}/>
        <Content>
          <List
          style={{backgroundColor: '#263238'}}
            enableEmptySections
            dataSource={this
            .ds
            .cloneWithRows(this.state.listViewData)}
            renderRow={data => <Card style={styles.card}>
            <ListItem ItemSeparatorComponent={this.renderSeparator} style={styles.listItem}>
              <Text>
                {data
                  .val()
                  .name}</Text>
            </ListItem>
          </Card>}
            renderLeftHiddenRow={data => <Button full onPress={() => this.addRow(data)}>
            <Icon name="information-circle"/>
          </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
            <Icon name="trash"/>
          </Button>}
            leftOpenValue={-50}
            rightOpenValue={-60}/>

        </Content>
        <Footer>
          <Content>
            <Item>
              <Input
                style={styles.input}
                onChangeText={(newContact) => this.setState({newContact})}
                placeholder="Place note here"
                placeholderTextColor='#fff'/>
              <Button
                style={styles.button}
                onPress={() => this.addRow(this.state.newContact)}>
                <Icon name="add"/>
              </Button>
            </Item>
          </Content>
        </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#263238',
        flex: 1
  },
  input: {
    color: '#fff',
    backgroundColor: '#129fcb'
  },
  button: {
    backgroundColor: '#129fcb'
  },
  listItem: {
    paddingBottom: 20
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0984e3',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
})