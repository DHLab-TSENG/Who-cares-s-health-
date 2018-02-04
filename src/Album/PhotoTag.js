import React, { Component } from 'react';
import { View, Image, ListView, TouchableOpacity } from 'react-native';
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
import ImagePicker from 'react-native-image-picker';
import * as firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { AlbumsFetch } from '../actions';
import { database } from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';

import L from './l';

class PhotoTag extends Component {
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
    // const StorageRef = firebase.storage().ref('/img/');
    // //取得圖片網址
    // const pathReference = StorageRef.child('/baby1.png');
    // pathReference.getDownloadURL().then((url) => {
    //   this.setState({ photos: { uri: url } });
    // })
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: "#ffffff", height: 50, padding: 15 }}>
          <Item style={{ backgroundColor: '#f7f7f7' }}>
            <Icon name="ios-search" style={{ color: '#95949a', fontSize: 12 }} />
            <Input placeholder="#愛睡覺" style={{ color: '#95949a', fontSize: 12 }} />
          </Item>
          <Button transparent>
            <Text style={styles.sbtntext}>搜尋</Text>
          </Button>
        </Header>
        <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
    />
      </Container>
    );
  }
}

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
    marginHorizontal: 2,
    height: 120,
    width: 120,
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

const mapStateToProps = state => {
  const babyImg = _.map(state.babyImg, (val, uid) => {
      return { ...val, uid };
  });
  
  return { babyImg };
  };

export default connect(mapStateToProps, { AlbumsFetch })(PhotoTag);