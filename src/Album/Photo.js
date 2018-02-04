import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';
//另外安裝套件
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Item,
  Input,
  StyleProvider,
  Left,
  Right,
  Fab
} from 'native-base';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
state = {
  p1:
    { uri: 'https://firebasestorage.googleapis.com/v0/b/babyapp-57d3e.appspot.com/o/Ababy%2FA%E7%99%BC%E5%91%86.jpg?alt=media&token=212610c6-321a-49c2-913f-bd367324ac74' },
}
class Photo extends Component {
  render(props) {
    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }}>
          <Left style={{ flex: 1.7 }}>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='ios-arrow-back' style={{ color: '#ffffff' }} />
            </Button>
          </Left>
          <Body flexDirection='row' style={{ flex: 1 }}>
            <Text style={styles.headertext} justifyContent='center'>
              相片
              </Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <CardItem style={styles.itemimg}>
        <Image styele={styles.img} 
        source={this.state.p1}/>
        </CardItem>
        <CardItem style={styles.itemlikebtn}>
          <Button transparent style={styles.btnlike}>
            <Icon name='ios-heart-outline' style={{ color: '#e6b6b0' }} />
          </Button>
        </CardItem>
        <Content style={styles.contenttxt}>
          <Button transparent onPress={() => Actions.phototag()}>
            <Text style={styles.hashtag}>＃睡</Text>
          </Button>
          <Text style={styles.moodtxt}>睡覺Ｚzz</Text>
          <Text style={styles.time}>2017-04-30</Text>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#ffffff" }}>
            <Button vertical onPress={() => Actions.photoalbum()}>
              <Icon name="ios-images-outline" />
              <Text style={styles.btntext}>親子相簿</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-bookmarks-outline" />
              <Text style={styles.btntext}>日常紀錄</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-pulse" />
              <Text style={styles.btntext}>健康存摺</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-navigate-outline" />
              <Text style={styles.btntext}>醫療機構</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500"
  },
  sbtntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 12
  },
  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },
  itemimg: {
    height: 350,
    alignSelf: 'center',
    marginVertical: 3,
    backgroundColor: 'white'
  },
  img: {
    height: 350,
    width: 350,
    backgroundColor: 'black',
    marginLeft: 2.5,
    marginRight: 2.5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  itemlikebtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    borderWidth: 0.5,
    borderColor: '#dcdddd',
    backgroundColor: 'white'
  },
  btnlike: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 20,
    height: 40,
    paddingBottom: 20
  },
  contenttxt: {
    backgroundColor: 'white',
    height: 120,
    marginLeft: 30,
    marginRight: 30
  },
  hashtag: {
    color: '#769ad4',
    justifyContent: 'center',
    fontSize: 12,
    paddingBottom: 10
  },
  moodtxt: {
    color: '#3C3C3C',
    justifyContent: 'center',
    fontSize: 12,
    paddingBottom: 10,
    marginLeft: 20,
  },
  time: {
    color: '#d2d2d2',
    fontSize: 10,
    marginLeft: 20,
  }
};

export default Photo;