import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_MMR extends Component {
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
                 麻疹：是一種急性、高傳染性的病毒性疾病，通常經由飛沫傳染，自感染至出疹約7-18天，前驅症狀會發高燒、咳嗽、結膜炎、鼻炎，且口腔的頰側黏膜會發現柯氏斑點，其後疹子最先出現在面頰及耳後，隨即散佈到四肢及全身，較嚴重者會併發中耳炎、肺炎或腦炎，而導致耳聾或智力遲鈍，甚至死亡。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                腮腺炎：俗稱〝豬頭皮〞，是一種經飛沫傳染的病毒性疾病。好侵犯唾液腺，尤其是耳下腺，病人可出現發燒、頭痛、耳下腺腫大，有些會引起腦膜炎、腦炎或聽覺受損。若在青春期感染，易併發睪丸炎或卵巢炎，可能影響生育能力。
                </Text>
                <Text>   </Text>
               <Text style={styles.titleStyle}> 
               德國麻疹：是一種經飛沫傳染的病毒性疾病，病人症狀輕微如微熱、鼻咽炎、耳後淋巴結腫大，疹子約維持 3 天。易併發關節炎、神經炎、血小板減少、腦炎。若在懷孕早期受到感染，會導致流產、死胎或畸型(先天性德國麻疹症候群)。
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
               MMR疫苗是用來預防麻疹、腮腺炎、德國麻疹的活性減毒疫苗，其預防效果平均可達95％以上，並可獲長期免疫。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=15D321B308D9A27F')}>
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
