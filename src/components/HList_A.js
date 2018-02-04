import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text,  Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_A extends Component {
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
                 A型肝炎為一存在已久的疾病，其流行與環境有密切關係，好發於衛生條件不佳的地區。其主要的傳染途徑是經口（亦稱糞口）感染，亦即食用遭A型肝炎病毒汙染之食物或水而感染。潛伏期約2至6星期，感染後之症狀包括疲倦、厭食、發燒，黃疸、尿的顏色變濃、上腹部疼痛等。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                許多人感染後只有輕微的症狀或沒有症狀，大多數都會自然痊癒，然後產生抗體。惟極少數病例會發生猛爆型肝炎，嚴重的話可能致死，A型肝炎的致死率約千分之一。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text>認識疫苗</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.titleStyle}> 
               接種A型肝炎疫苗為預防A型肝炎病毒感染相當有效的方法之一。目前國內上市的A型肝炎疫苗有兩種廠牌，均為不活化疫苗，核准的接種年齡為出生滿12個月以上，接種劑次無論成人或兒童都是2劑，2劑間隔至少6個月（未滿19歲每劑疫苗的劑量是0.5 ml，而滿19歲以上的成人則是1 ml）。接種1劑後約95%以上可產生保護抗體，完成2劑後，可提升抗體效價。一般而言，免疫力約可持續20年。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=88ADC7445F7182B5')}>
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
