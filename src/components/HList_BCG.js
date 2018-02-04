import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_BCG extends Component {
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
                 結核病是感染結核桿菌所引起的疾病，結核菌侵入人體後，可在任何器官引起病變，如肺、腦膜、淋巴腺、骨骼、腸、泌尿及生殖器官等，其中以侵害肺部最多。

               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                早期的肺結核病人沒有什麼症狀，容易被忽略而延誤治療的時間，如出現咳嗽、咳痰、食慾不振、體重減輕、長期發燒、夜間盜汗、咳血等症狀，可能是中度或重度肺結核了。

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
                卡介苗是一種牛的分枝桿菌所製成的活性疫苗，經減毒後注入人體，可產生對結核病的抵抗力，一般對初期症候的預防效果約85％，主要可避免造成結核性腦膜炎等嚴重併發症。

                </Text>
                <Text>   </Text>
                <Text style={styles.titleStyle}> 
                選擇自費進行嚴重複合型免疫缺乏症(SCID)篩檢，應注意事項如下：
                一、嚴重複合型免疫缺乏症在每10萬人的發生率約為1.4例。
                二、嚴重複合型免疫缺乏症的寶寶若接種卡介苗(活性疫苗)，會因此感染(卡介苗性)結核菌，進而引發疾病造成後遺症或死亡。
                三、我國幼兒結核病發生率約為每10萬人口中1-2例，卡介苗適合接種年齡為出生滿5個月。但若嬰幼兒即將前往結核病高盛行國家或有結核病接觸史，請先前往地方衛生主管機關/小兒科評估，及早接種卡介苗或潛伏結核感染治療。
                四、請盡量不要讓寶寶接觸可能的結核病患者(如避免咳嗽中的親友來訪或照顧寶寶等)。

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=137574B1AE71668D')}>
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
