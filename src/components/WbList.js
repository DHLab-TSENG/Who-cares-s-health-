import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class WbList extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='ios-arrow-back' style={{ color: "#ffffff" }} />
            </Button>
          </Left>
          <Body flexDirection='row' style={{ flex: 1 }}>
            <Text style={styles.headertitle} >
              健康存摺相關資訊
     </Text>
          </Body>
          <Right style={{ flex: 0.7 }} />
        </Header>
        <Content>
          <Card>
            <CardItem footer>
              <Icon name='md-arrow-dropright' />
              <Text>
                首次使用健康存摺功能，
                {'\n'}
                須先使用電腦進入健康存摺上傳平台，
                {'\n'}
                上傳個人健康存摺資料。
                </Text>
            </CardItem>
          </Card>
          <Card>
          <CardItem footer>
              <Icon name='md-arrow-dropright' />
              <Text>
                健康存摺上傳平台網址：mabao.gq
                </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 14,
    paddingLeft: 15,
    flex: 1,
    lineHeight: 25
  },
  titleStyle1: {
    fontSize: 12,
    paddingLeft: 15
  },
  headertitle: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500",
    justifyContent: "center",
  },
};
