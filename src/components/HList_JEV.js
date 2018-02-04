import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text,  Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_JEV extends Component {
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
                 日本腦炎是由日本腦炎病毒所引起的急性傳染病，病毒會經由蚊子叮咬而傳播給人類。臺灣傳播日本腦炎的病媒蚊以三斑家蚊為主，流行季節主要在每年的5至10月，病媒蚊叮咬人的高峰期一般在黎明和黃昏的時候。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                感染日本腦炎大部分是沒有症狀的，少部分的病患會有頭痛、發燒、無菌性腦膜炎或腦炎等症狀，嚴重者則會出現頭痛、高燒、痙攣、抽搐或昏迷，可能導致神經、精神性後遺症或死亡。
                </Text>
                <Text>   </Text>
               <Text style={styles.titleStyle}> 
               接種日本腦炎疫苗為有效的防治方法。
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
                國內長期使用不活化日本腦炎疫苗，接種效益及防治成效顯見。為順應疫苗產製技術轉變趨勢，自本（106）年5月22日起改採用細胞培養之日本腦炎活性減毒疫苗。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=4F83D0265075DCF8')}>
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
