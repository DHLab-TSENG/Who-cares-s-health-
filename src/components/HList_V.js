import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Left, Right, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_V extends Component {
  render() {
    return (
      <Container>
         <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
         <Left style={{ flex: 1.4 }}>
           <Button transparent onPress={() => Actions.pop()}>
             <Icon name='ios-arrow-back' style={{ color: "#ffffff" }} />
           </Button>
         </Left>
         <Body flexDirection='row' style={{ flex: 1 }}>
         </Body>
         <Right style={{ flex: 1 }}/>
       </Header>
        <Content>
          <Card>
            <CardItem header>
                <Icon name='logo-twitter' />
              <Text>疾病簡介</Text>
            </CardItem>
            <CardItem>
              <Body>
               <Text style={styles.titleStyle}>
                 水痘是一普遍之兒童疾病，通常症狀輕微，亦可能嚴重，好發於幼童，近來水痘發生的年齡層則有延後的趨勢，一般年齡愈大，症狀愈嚴重。水痘是由水痘-帶狀疱疹病毒（varicella-zoster virus）感染所引起的傳染病，具有高度傳染力，可經由飛沫在人與人間散佈，或經由接觸水痘的液體傳染，感染後會引發紅疹、水泡、發癢、發燒及疲倦等，可能併發嚴重的皮膚感染、疤痕、肺炎、腦炎或死亡，亦可能因病毒再活化而得到帶狀疱疹。
               </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text>認識疫苗</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.titleStyle}> 
                水痘疫苗是一種活性減毒疫苗，可有效避免嚴重之水痘症狀，接種水痘疫苗後若仍感染水痘，其症狀亦較輕微，可能會產生較少的水痘，且較不會發燒，復原較快。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=9E196231CA2CD020')}>
                參考更多資訊
                </Text>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/list.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE')}>
                國內常規疫苗簡介
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
  }
};
