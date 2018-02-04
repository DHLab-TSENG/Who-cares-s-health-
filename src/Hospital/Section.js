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
  View,
  Dimensions,
  TextInput,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import { Container, Button, Header, Item, Footer, Left, Body, Right, Title, FooterTab, Input, Icon, Content } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icon } from 'react-native-elements';
//import {SearchBar} from 'react-native-search-bar';

import CustomMultiPicker from "react-native-multiple-select-list";
import HosHome from './HosHome'

const userList = {
  "123": "兒科",
  "124": "婦產科",
  "125": "不分科",
  "126": "家醫科",
  "127": "耳鼻喉科",
  "128": "西醫專科診所",

}
const { width, height } = Dimensions.get('window')
class Section extends Component {

  constructor() {
    super()

    //this.navigate = this.navigate.bind(this)
    this.state = { text: '', post: [], item: [] };
  }

  /* navigate(name, val) {
    this.props.navigator.push({
      name: name,
      passProps: {
        keyword: val
      }
    })

  }

  _openPage(val) {
    var x=1
    val='section#'+val
    for (x; x<this.state.item.length; x++)
      val=val+'@'+this.state.item[x]
    console.log(val)
    //this.navigate('firebasePage', val)
    Actions.firebase({ keyword: val })
  } */
  render() {
    return (
      <Container>

        <CustomMultiPicker
          options={userList}
          multiple={true} // 
          returnValue={"label"} // label or value 
          callback={(item) => this.setState({ item })} // callback, array of selected items 
          rowBackgroundColor={"#eee"}
          rowHeight={35}
          rowRadius={5}
          iconColor={"#00a2dd"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"ios-radio-button-off-outline"}
          scrollViewHeight={500}
        />

        <HosHome sectionitem={this.state.item} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Section