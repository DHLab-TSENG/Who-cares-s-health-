/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Navigator,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Container, Button, Header, Item, Footer, Left, Body, Right, Title, Tabs, Tab, TabHeading, FooterTab, Input, Icon, Content } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CustomMultiPicker from "react-native-multiple-select-list";
import MapView from 'react-native-maps';
import {Scene, Router, Actions} from 'react-native-router-flux';

import About from './About'
import Find from './Find'
import Self from './Self'
import Section from './Section'
import GetData from './GetData'
import PostsList from './PostsList'


//const { width, height } = Dimensions.get('window')
// const marker = require('../assets/images/marker.png');
// const selectedMarker = require('../assets/images/marker-selected.png');
const item = ''
const itemtype = ''
class HosHome extends Component {
  // state = {
  //   region: {
  //     latitude: 1,
  //     longitude: 1,
  //     latitudeDelta: 0.0043, // hardcode zoom levels just for example
  //     longitudeDelta: 0.0034,
  //   },
  //   selectedMarkerIndex: 0,
  // };
  constructor(props) {
    super(props)
    //this.navigate = this.navigate.bind(this)
    this.state = { text: '', post: [] };
    //this.onPressMarker = this.onPressMarker.bind(this);
  }
  componentWillReceiveProps(props) {
    //console.log('propppp',props)
    key = Object.keys(props)
    key.forEach(element => {
      if (key == "selfitem") {
        itemtype = 'self#'
        var x = 1
        for (x; x < props.selfitem.length; x++)
        item = item + '!' + props.selfitem[x]
      }
      if (key == "aboutitem") {
        itemtype = 'pub#'
        var x = 1
        for (x; x < props.aboutitem.length; x++)
        item = item + '$' + props.aboutitem[x]
      }
      if (key == "sectionitem") {
        itemtype = 'section#'
        var x = 1
        for (x; x < props.sectionitem.length; x++)
        item = item + '@' + props.sectionitem[x]
      }
    });
  }

  //搜尋
/*   navigate(name, val) {
    this.props.navigator.push({
      name: name,
      passProps: {
        keyword: val
      }
    })

  } */

   //搜尋 導入firebase
  /* _openPage(val) {
    if (itemtype == "self") {
      var x = 1
      val = 'self#' + val
      for (x; x < item.length; x++)
        val = val + '!' + item[x]
    }
    if (itemtype == "about") {
      var x = 1
      val = 'pub#' + val
      for (x; x < item.length; x++)
        val = val + '$' + item[x]
    }
    if (itemtype == "section") {
      var x = 1
      val = 'section#' + val
      for (x; x < item.length; x++)
        val = val + '@' + item[x]
    }
    //this.navigate('firebasePage', val) 
  //   return(){
 Actions.Firebase({ keyword: val })
  // }
  } */
  //map
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => this.setState({
  //       region: {
  //         ...this.state.region,
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       }
  //     }),
  //     error => alert(JSON.stringify(error)), {
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 1000
  //     }
  //   );
  // }

  // onPressMarker(e, index) {
  //   console.log(`marker pressed! ${e}, markerIndex: ${index}`);
  //   this.setState({ selectedMarkerIndex: index });
  // }
  // onChangeText={(userinput) => this.setState({ userinput })}
  // value={this.state.text}
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
          <Left style={{ flex: 1.4 }}>
            <Button transparent onPress={() => Actions.home()}>
              <Icon name='md-home' style={{ color: "#ffffff" }} />
            </Button>
          </Left>
          <Body flexDirection='row' style={{ flex: 1 }}>
            <Text style={styles.headertitle} >
              醫療機構
                    </Text>
          </Body>
          <Right style={{ flex: 1 }}>
          </Right>
        </Header>

        <Header searchBar rounded style={styles.searchbarbg}>
          <Item style={styles.searchbaritem}>
            <Icon name="ios-search" style={styles.searchbaricon} />
            <TextInput
              controlled={false}
              keyboardType="ascii-capable"
              placeholder="Hospital Name"
              placeholderTextColor='#95949a'
              style={{ fontSize: 12 }}
              onChangeText={(text) => this.setState({ text })}
            />

          </Item>
          <Button transparent onPress={() => Actions.getdata({keyword: itemtype+this.state.text+item})}>
            <Text style={styles.searchbarbtntxt}>搜尋</Text>
          </Button>
        </Header>

        <Tabs>
          <Tab heading={<TabHeading>
            <Icon name='paw' style={{ fontSize: 20, color: 'black' }} />
            <Text style={{ color: '#444444' }}>找醫院</Text>
          </TabHeading>}>
            <Find />
          </Tab>
          <Tab heading={<TabHeading>
            <Icon name='nutrition' style={{ fontSize: 20, color: 'black' }} />
            <Text style={{ color: '#444444' }}>公費疫苗</Text>
          </TabHeading>}>
            <About />
          </Tab>
          <Tab heading={<TabHeading>
            <Icon name='calendar' style={{ fontSize: 20, color: 'black' }} />
            <Text style={{ color: '#444444' }}>自費疫苗</Text>
          </TabHeading>}>
            <Self />
          </Tab>
          <Tab heading={<TabHeading>
            <Icon name='bulb' style={{ fontSize: 20, color: 'black' }} />
            <Text style={{ color: '#444444' }}>科別</Text>
          </TabHeading>}>
            <Section />
          </Tab>
        </Tabs>



        {/*         <Header>
          <Button iconLeft transparent primary onPress={() => this.navigate('selfPage')}>
            <Icon name='calendar' style={{ fontSize: 25, color: 'black' }} />
            <Text style={{ fontSize: 15 }}>自費疫苗</Text>

          </Button>
          <Button iconLeft transparent primary onPress={() => this.navigate('aboutPage')}>
            <Icon name='eye' style={{ fontSize: 20, color: 'black' }} />
            <Text >公費疫苗</Text>
          </Button>
          <Button iconLeft transparent primary onPress={() => this.navigate('sectionPage')}>
            <Icon name='eye' style={{ fontSize: 20, color: 'black' }} />
            <Text >科別</Text>
          </Button>
          <Button iconLeft transparent primary onPress={() => this.navigate('opentimePage')}>
            <Icon name='nutrition' style={{ fontSize: 20, color: 'black' }} />
            <Text >營業中</Text>
          </Button>
        </Header> 

       
        <View style={styles.root}>
        <MapView style={styles.map}
                 showsUserLocation={true}
                 followsUserLocation={true}
                 initialRegion={this.state.region}
        >
        </MapView>
      </View>*/}
        <Footer>
          <FooterTab style={{ backgroundColor: "#ffffff" }}>
            <Button vertical>
              <Icon name="ios-images-outline" onPress={() => Actions.photopro()} />
              <Text style={styles.btntext}>親子相簿</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-bookmarks-outline" onPress={() => Actions.tList()} />
              <Text style={styles.btntext}>日常紀錄</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-pulse" onPress={() => Actions.healthCare()} />
              <Text style={styles.btntext}>健康存摺</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-navigate-outline" onPress={() => Actions.hoshome()}/>
              <Text style={styles.btntext}>醫療機構</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  headertitle: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500",
    justifyContent: "center",
  },
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500"
  },
  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },
  tabsbg: {
    backgroundColor: "#ffffff",
    height: 10,
    padding: 0,
  },
  tabbg: {
    backgroundColor: "#ffffff",
    height: 10,
    padding: 0,
  },
  tabicon: {
    color: '#95949a',
    fontSize: 25,
  },
  tabbtntxt: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 12,
  },
  searchbarbg: {
    backgroundColor: "#ffffff",
    height: 50,
    padding: 15,
  },
  searchbaritem: {
    backgroundColor: '#f7f7f7',
  },
  searchbaricon: {
    color: '#95949a',
    fontSize: 12,
  },
  searchbarbtntxt: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 12,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

export default HosHome