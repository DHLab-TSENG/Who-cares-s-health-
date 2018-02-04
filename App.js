// React Native Components
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// React Native Relative Packages
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

//test
import PhotoPro from './src/Album/PhotoPro';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCJjlZdoWTTBh_WSsp2tBrwJigenpNDm7o",
      authDomain: "babyapp-57d3e.firebaseapp.com",
      databaseURL: "https://babyapp-57d3e.firebaseio.com",
      projectId: "babyapp-57d3e",
      storageBucket: "babyapp-57d3e.appspot.com",
      messagingSenderId: "547089789338"
    };
    firebase.initializeApp(config);


  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
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
