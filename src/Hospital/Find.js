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
import { Container, Button, Header, Item, Footer, Left, Body, Right, Title, Tabs, Tab, TabHeading,FooterTab, Input, Icon, Content } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icon } from 'react-native-elements';
//import {SearchBar} from 'react-native-search-bar';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CustomMultiPicker from "react-native-multiple-select-list";
//import Popup from 'react-native-popup';
import MapView from 'react-native-maps';
import * as firebase from 'firebase';
import { MapHosFetch } from '../actions';
import _ from 'lodash';
import { connect } from 'react-redux';

//const { width, height } = Dimensions.get('window')
/* const RESTAURANTS = [
  {
    key: '林口長庚醫院',
    title: '林口長庚醫院',
    description: '桃園市龜山區復興街5號',
    latLong: {
      latitude: 25.029887,
      longitude: 121.38957 ,
    },
  },
    {
    key: '黃紹基診所',
    title: '黃紹基診所',
    description: '新北市林口區民有街156號',
    latLong: {
      latitude: 25.0760769,
      longitude: 121.37253320000002 ,
    },
  },
    {
    key: '劉乃豪診所',
    title: '劉乃豪診所',
    description: '新北市林口區文化二路一段90號',
    latLong: {
      latitude: 25.0694736,
      longitude: 121.36659340000006 ,
    },
  },
]; */
 const marker = require('./images/marker.png');
 const selectedMarker = require('./images/marker-selected.png');
 const loction_now = ''
class Find extends Component {
  state = {
    region: {
      latitude: 1,
      longitude: 1,
      latitudeDelta: 0.0043, // hardcode zoom levels just for example
      longitudeDelta: 0.0034,
    },
    selectedMarkerIndex: 0,
  };
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = { text: '' ,post:[],posts:[]};
    this.onPressMarker = this.onPressMarker.bind(this);
    //Actions.getdata({keyword: ""});
  }
componentWillReceiveProps(props) {
  //console.log('propppp',props)
  var k=0;
  var gei = 121.389534
  var wei = 25.029787
   for(k;k<props.hospital.length;k++){
     var distance = this.distance(gei, wei, props.hospital[k].gei[0], props.hospital[k].wei[0])
     //posts[i].element.gei[0];
     //var numberAsInt = parseInt(distance, 10);  
     props.hospital[k].distance = parseInt(distance, 10);
   }
   props.hospital.sort(this.compare); 
   //console.log('datasource',props.hospital)
  this.createDataSource(props);
        //console.log('propppp',props)
    }

    componentWillMount(props) {
      this.props.MapHosFetch();
      
          this.createDataSource(this.props);
          //console.log('asd',this.dataSource)
      navigator.geolocation.getCurrentPosition(
        position => loction_now = position.coords.latitude + '@' + position.coords.longitude,
        error => alert(JSON.stringify(error)), {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
      /*    const config = {
           apiKey: "AIzaSyCJjlZdoWTTBh_WSsp2tBrwJigenpNDm7o",
           authDomain: "babyapp-57d3e.firebaseapp.com",
           databaseURL: "https://babyapp-57d3e.firebaseio.com",
           projectId: "babyapp-57d3e",
           storageBucket: "babyapp-57d3e.appspot.com",
           messagingSenderId: "547089789338"
         }; */
      var keyword = '';
      //console.log('1231213', keyword)
      var wanthospital = [];
      var newwanthospital = [];
      var keyword_type
      var ddd = [];
      var whattype;
      var distance;

      //var i = 0
      var j
      //var gei = loction_now.split('@')[1]
      //var wei = loction_now.split('@')[0]
     
      var i = 0
      // const firebaseApp = firebase.initializeApp(firebaseConfig);
      firebase.database().ref('hospital/').on('value', function (data) {
        var answer = []
        Object.values(data.val()).forEach(function (element) {

          answer.push(element)
          
          
        });
        
        
      //answer.sort(this.compare);

      this.setState({ posts: answer });
      var k=0;
      var gei = 121.389534
      var wei = 25.029787
      for(k;k<this.state.posts.length;k++){
        var distance = this.distance(gei, wei, this.state.posts[k].gei[0], this.state.posts[k].wei[0])
        //posts[i].element.gei[0];
        //var numberAsInt = parseInt(distance, 10);  
        this.state.posts[k].distance = parseInt(distance, 10);
      }
      this.state.posts.sort(this.compare); 
      //console.log('inside getdata log',this.state.posts)
      }.bind(this));
      
      //console.log('getdata log',this.state.posts)
      

    }

  navigate(name,val) {
    this.props.navigator.push({
      name:name,
       passProps: {
      keyword: val
    }
    })

  }

    _openPage(val) {
          this.navigate('firebasePage',val)
    }
//map
createDataSource({ hospital }) {
  const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 != r2
 });

 this.dataSource = ds.cloneWithRows(hospital);
// console.log('data',this.dataSource)
//  var k=0;
//  for(k;k<this.dataSource._dataBlob.s1.length;k++){
//    var distance = this.distance(gei, wei, this.dataSource._dataBlob.s1[k].gei[0], this.dataSource._dataBlob.s1[k].wei[0])
//    //posts[i].element.gei[0];
//    //var numberAsInt = parseInt(distance, 10);  
//    this.dataSource._dataBlob.s1[k].distance = parseInt(distance, 10);
//  }
//  this.dataSource._dataBlob.s1.sort(this.compare); 
//  console.log('datasource',this.dataSource._dataBlob.s1)
 
 
}
componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({
        region: {
          ...this.state.region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
      }),
      error => alert(JSON.stringify(error)), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }
  distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1) return Math.round(d) + "km";
    else if (d <= 1) return Math.round(d * 1000) + "m";
    return d;
}

compare(a, b) {
    let comparison = 0;
    if (a.distance > b.distance) {
        comparison = 1;
    } else if (b.distance > a.distance) {
        comparison = -1;
    }
    return comparison;
}


  onPressMarker(e, index) {
   // console.log(`marker pressed! ${e}, markerIndex: ${index}`);
    this.setState({selectedMarkerIndex: index});
  }
// onChangeText={(userinput) => this.setState({ userinput })}
// value={this.state.text}
  render() {
    
    return (
      <Container>
        <View style={styles.root}>
        <MapView style={styles.map}
                 showsUserLocation={true}
                 followsUserLocation={true}
                 region={{
                   latitude:25.029787,
                   longitude:121.389534,
                   latitudeDelta:0.1,
                   longitudeDelta:0.1,

                 }}
                 //onRegionChangeComplete={}
        >
        {
         
         this.dataSource._dataBlob.s1.slice(0,10).map((r, i) => {
             // console.log('12',this.dataSource._dataBlob.s1[1])
             // console.log(r)
              //console.log(parseFloat(r.wei[0], 10))
              return <MapView.Marker
                coordinate={{
                  latitude:parseFloat(r.wei[0], 10),
                  longitude: parseFloat(r.gei[0], 10),
                }}
                title={r.hospitalname[0]}
                description={r.address[0]}
                key={`marker-${i}`}
                onPress={e => this.onPressMarker(e, i)}
                image={this.state.selectedMarkerIndex === i ? selectedMarker : marker}
              />
            })
          }
        </MapView>
      </View>


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
        </Header> */}
      
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const hospital = _.map(state.hospital, (val, uid) => {
      return { ...val, uid };
  });
  
  return { hospital };
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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

export default connect(mapStateToProps, { MapHosFetch })(Find);
//export default Find