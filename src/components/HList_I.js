import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_I extends Component {
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
                 流感為急性病毒性呼吸道疾病，主要致病原為流感病毒，常引起發燒、頭痛、肌肉痛、疲倦、流鼻涕、喉嚨痛以及咳嗽等，但通常均在2～7天內會康復。流感病毒可分為A、B、C三種型別，其中只有A型及B型可以引起季節性流行。台灣主要流行的季節性流感病毒有A型流感病毒的H3N2亞型與H1N1亞型，以及B型流感病毒等3類。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                臨床上所謂的感冒、喉炎、支氣管炎、病毒性肺炎以及無法區分之急性呼吸道疾患均有可能為感染流感病毒所引起。而估計每年流行時，約有10％受感染的人有噁心、嘔吐以及腹瀉等腸胃道症狀伴隨呼吸道症狀而來。
                </Text>
                <Text>   </Text>
               <Text style={styles.titleStyle}> 
              流感之重要性在於其爆發流行快速、散播範圍廣泛以及併發症嚴重，尤其是細菌性及病毒性肺炎。爆發流行時，重症及死亡者多見於老年人，以及患有心、肺、腎臟及代謝性疾病，貧血或免疫功能不全者。
                </Text>
                 <Text>   </Text>
               <Text style={styles.titleStyle}> 
              定期接種流感疫苗，是預防流感併發症最有效的方式。
                </Text>
              </Body>
            </CardItem>
        
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=296153E7C9151E1C')}>
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
