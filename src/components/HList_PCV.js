import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_PCV extends Component {
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
                 肺炎鏈球菌為人類重要且常見的細菌，有90幾種血清型別，可引起嚴重的肺炎(如膿胸、肺部壞死等)、菌血症、敗血症、腦膜炎等侵襲性感染與併發症，甚或導致死亡。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                任何人都可能感染肺炎鏈球菌，而我國侵襲性肺炎鏈球菌感染症主要發生在5歲以下的幼童和65歲以上老人，其中幼兒又以2- 5歲為主，1-5歲次之，其他高危險群則包括免疫功能不全、人工耳植入、慢性心臟或肺部疾病、腎功能衰竭、糖尿病、癌症、沒有脾臟、長期服用類固醇或是接受化學治療、腦脊髓液滲漏的人。
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
                13價結合型肺炎鏈球菌疫(PCV13)是一種相當安全的不活化疫苗，內含13種血清型(1、3、4、5、6A、6B、7F、9V、14、18C、19A、19F、23F)，接種後少數的人可能發生注射部位疼痛、紅腫的反應，一般於接種2天內恢復。發燒、倦怠等嚴重副作用則極少發生，接種後如有持續發燒、嚴重過敏反應，如呼吸困難、氣喘、眩昏、心跳加速等不適症狀，應儘速就醫，請醫師做進一步的判斷與處理。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=D9250718DA582AB4')}>
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
