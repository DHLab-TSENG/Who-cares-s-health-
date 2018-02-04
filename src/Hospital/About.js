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
  TextInput,
  Dimensions,
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
  "123": "B型肝炎免疫球蛋白",
  "124": "B型肝炎遺傳工程疫苗",
  "125": "卡介苗",
  "126": "五合一疫苗",
  "127": "13價結合型肺炎鏈球菌疫苗",
  "128": "麻疹腮腺炎德國麻疹混合疫苗",
  "129": "水痘疫苗",
  "130": "日本腦炎疫苗",
  "140": "日本腦炎活性減毒疫苗",
  "141": "減量破傷風白喉非細胞性百日咳\r\n及不活化小兒麻痺混合疫苗",
}
const { width, height } = Dimensions.get('window')
class About extends Component {

  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
    this.state = { text: '', post: [], item: [] };
  }

  navigate(name, val) {
    this.props.navigator.push({
      name: name,
      passProps: {
        keyword: val
      }
    })

  }

  _openPage(val) {
    var x = 1
    val = 'pub#' + val
    for (x; x < this.state.item.length; x++)
      val = val + '$' + this.state.item[x]
    //console.log(val)
    this.navigate('firebasePage', val)
  }

  render() {
    return (
      <Container>
        {/*         <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>公費疫苗</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Header searchBar rounded style={{ backgroundColor: '#ffffff', height: 50, padding: 15 }}>
              <Item style={{ backgroundColor: '#f7f7f7' }}>
                <Icon name="ios-search" style={{ color: '#95949a', fontsize: 12 }} />

                <TextInput
                  controlled={false}
                  keyboardType="ascii-capable"
                  placeholder="Hospital Name"
                  placeholderTextColor='#95949a'
                  style={{ fontsize: 12 }}
                  onChangeText={(text) => this.setState({ text })}
                />

              </Item>
              <Button transparent onPress={this._openPage.bind(this, this.state.text)}>
                <Text>Search</Text>
              </Button>
            </Header>
        <Header>
          <Button iconLeft transparent primary onPress={() => this.navigate('selfPage')}>
            <Icon name='calendar' style={{fontSize: 20, color: 'black'}}/>            
            <Text >自費疫苗</Text>
            
          </Button>
          <Button iconLeft transparent primary>
            <Icon name='eye' style={{fontSize: 20, color: 'black'}}/>            
            <Text style={{color: '#FF0000'}}>公費疫苗</Text>
          </Button>
        <Button iconLeft transparent primary onPress={() => this.navigate('sectionPage')}>
            <Icon name='eye' style={{fontSize: 20, color: 'black'}}/>            
            <Text >科別</Text>
          </Button>
           <Button iconLeft transparent primary onPress={() => this.navigate('opentimePage')}>
            <Icon name='nutrition' style={{fontSize: 20, color: 'gray'}}/>
            <Text >營業中</Text>
          </Button>
           </Header>  */}
        <CustomMultiPicker
          options={userList}
          search={false} // should show search bar? 
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
         <HosHome aboutitem={this.state.item}/>
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

export default About