import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Container, Button, Header, Item, Footer, Left, Body, Right, Title, FooterTab, Input, Icon, Content, Spinner } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icon } from 'react-native-elements';
//import {SearchBar} from 'react-native-search-bar';
import CustomMultiPicker from "react-native-multiple-select-list";
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import PostsList from './PostsList';
//import Test2 from '../index.ios'
import * as firebase from 'firebase';
class GetData extends Component {
  constructor(props) {
  //  console.log('cons')
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount(props) {
    /*    const config = {
         apiKey: "AIzaSyCJjlZdoWTTBh_WSsp2tBrwJigenpNDm7o",
         authDomain: "babyapp-57d3e.firebaseapp.com",
         databaseURL: "https://babyapp-57d3e.firebaseio.com",
         projectId: "babyapp-57d3e",
         storageBucket: "babyapp-57d3e.appspot.com",
         messagingSenderId: "547089789338"
       }; */
    var keyword = this.props.keyword
   // console.log('keywordddd', keyword)
    var wanthospital = [];
    var newwanthospital = [];
    var keyword_type
    var ddd = [];
    var whattype;
    var distance;

    if (keyword.split('#')[0] == 'section') {
      keyword_type = keyword.split('#')[1].split('@')
      whattype = 'section'
    }
    else if (keyword.split('#')[0] == 'self') {
      keyword_type = keyword.split('#')[1].split('!')
      whattype = 'self'
    }
    else if (keyword.split('#')[0] == 'pub') {
      keyword_type = keyword.split('#')[1].split('$')
      whattype = 'pub'
    }
    else
      keyword_type = [keyword]
    keyword = keyword_type[0]
    var i = 0
    var j
    // const firebaseApp = firebase.initializeApp(firebaseConfig);
    firebase.database().ref('hospital/').on('value', function (data) {
      Object.values(data.val()).forEach(function (element) {
       // console.log('123',element.hospitalname[0])
        if (element.hospitalname[0].match(keyword) != null) {
          if (keyword_type.length > 1) {
            var jj = 1
            var ii = 0
            if (whattype == 'section') {
              try {
                for (jj; jj < keyword_type.length; jj++) {
                  for (ii; ii < element.type.length; ii++) {
                    if (keyword_type[jj] == element.type[ii]) {
                      wanthospital[i] = { element }
                      i++
                      break;
                    }
                  }
                }
              }
              catch (err) { }
            }
            if (whattype == 'self') {
              try {
                for (jj; jj < keyword_type.length; jj++) {
                  for (ii; ii < element.self.length; ii++) {
                    if (keyword_type[jj] == element.self[ii]) {
                      wanthospital[i] = { element }
                      i++
                      break;
                    }
                  }
                }
              }
              catch (err) { }
            }
            if (whattype == 'pub') {
              try {
                for (jj; jj < keyword_type.length; jj++) {
                  for (ii; ii < element.pub.length; ii++) {
                    if (keyword_type[jj] == element.pub[ii]) {
                      wanthospital[i] = { element }
                      i++
                      break;
                    }
                  }
                }
              }
              catch (err) { }
            }
          }
          else {
            wanthospital[i] = { element }
            i++
          }
        }
      });
    //  console.log('234',wanthospital)
      if (wanthospital.length == 0)
        newwanthospital = [{ element: ['no'] }]
      else {
        var dd = []
        dd[0] = wanthospital[0].element.address[0]
        newwanthospital[0] = wanthospital[0]
        var ddi = 1
        for (j = 1; j < wanthospital.length; j++) {
          var dddnum = 0
          for (jj = 0; jj < dd.length; jj++) {
            if (wanthospital[j].element.address[0] == dd[jj]) {
              dddnum = 1
              break
            }
          }
          if (dddnum == 0) {
            dd[ddi] = wanthospital[j].element.address[0]
            newwanthospital[ddi] = wanthospital[j]
            ddi++
          }
        }
      }
      var answer = []
      for (j = 0; j < newwanthospital.length; j++)
        answer.push(newwanthospital[j])
      this.setState({ posts: answer });
      //console.log('ansss',answer)
    }.bind(this));

  }
  
  render() {
   // console.log('posts',this.state.posts)
    return <PostsList posts={this.state.posts} />
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },



});

export default GetData


