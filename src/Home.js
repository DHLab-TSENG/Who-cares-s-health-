// React Native Components
import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
//輪播圖
import Swiper from 'react-native-swiper';
import { Container, Content, Footer, FooterTab, Icon, Text, Header, Body, Button, Title, CardItem, Left, Tab, Tabs } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { AlbumsFetch } from './actions';
import { database } from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Card from './Card'

class Home extends Component {
  // componentWillMount() {
  //   const { currentUser } = firebase.auth();
  //   const Data = {
  //     "time" : "2017-09-04",
  //     "url" : "https://firebasestorage.googleapis.com/v0/b/babyapp-57d3e.appspot.com/o/Ababy%2FA%E7%9D%A1%E8%A6%BA.jpg?alt=media&token=846882b8-0bf9-4e2b-b7a8-511ff70eedbb"
  //   }
  //   const Key = firebase.database().ref(`/Users/${currentUser.uid}/tag/＃熟睡中`).push(Data);
  // }


  render() {
    console.log("現在的使用者是", firebase.auth().currentUser.email)
    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }}>
          <Body>
            <Text style={styles.headertext}>
              MaBao
            </Text>
          </Body>
        </Header>
        <Content padder >
          <Card
            title={'親子相簿'}
            image={require('./baby.png')}
            subTitle={'儲存寶寶每一刻'}
            imagePosition={'right'}
          />
          <Card
            title={'日常紀錄'}
            image={require('./re.png')}
            subTitle={'記錄寶寶生長狀況'}
            imagePosition={'left'}
          />
          <Card
            title={'健康存摺'}
            image={require('./he.png')}
            subTitle={'查看寶寶就醫紀錄'}
            imagePosition={'right'}
          />
          <Card
            title={'醫療機構'}
            image={require('./ba.png')}
            subTitle={'查詢就近診所'}
            imagePosition={'left'}
          />
        </Content>
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
              <Icon name="ios-navigate-outline" onPress={() => Actions.hoshome()} />
              <Text style={styles.btntext}>醫療機構</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
};

export default Home;