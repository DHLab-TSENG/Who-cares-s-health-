import React, { Component } from 'react';
import { View, Image, ListView, ScrollView, TouchableOpacity } from 'react-native';
//另外安裝套件
import {
  Container,
  Header,
  Body,
  Content,
  Footer,
  FooterTab,
  Button,
  Tab, Tabs, TabHeading,
  Text,
  Title,
  Segment,
  Icon,
  Item,
  Input,
  Left,
  Right
} from 'native-base';
import * as firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

import Photo from './Photo';

import { Scene, Router, Actions } from 'react-native-router-flux';
import { AlbumsFetch } from '../actions';
import { database } from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';

import L from './l';


class PhotoAlbum extends Component {

componentWillMount() {
    this.props.AlbumsFetch();

    this.createDataSource(this.props);
}
componentWillReceiveProps(nextProps) {

    this.createDataSource(nextProps);
}

createDataSource({ babyImg }) {
     const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
    });

    this.dataSource = ds.cloneWithRows(babyImg);
}
//myhealthbank
renderRow(babyImg) {
    return <L babyImg={babyImg} />;
}

render() {
    return (
        <ListView 
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
    );
}
}

const mapStateToProps = state => {
const babyImg = _.map(state.babyImg, (val, uid) => {
    return { ...val, uid };
});

return { babyImg };
};




const styles = {
  innerlayer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  picture: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e8ecef',
    marginRight: 3,
    marginVertical: 2,
    marginHorizontal: 5,
    height: 110,
    width: 110,
    backgroundColor: 'white'
  },
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500"
  },
  sbtntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 12,
  },
  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },

};

export default connect(mapStateToProps, { AlbumsFetch })(PhotoAlbum);