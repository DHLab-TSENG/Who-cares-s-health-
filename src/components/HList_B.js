import React, { Component } from 'react';
import { Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Left, Right, Body, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HList_B extends Component {
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
                 Ｂ型肝炎是肝炎的一種，當肝臟受到病毒、細菌或寄生蟲之感染，或因酒精中毒、藥物或化學物質等之傷害，使肝組織內發生肝細胞變質、壞死、白血球浸潤等炎症反應，稱為肝炎，由Ｂ型肝炎病毒所引起的肝炎叫「Ｂ型肝炎」。
               </Text>
               <Text>   </Text>
               <Text style={styles.titleStyle}> 
                Ｂ型肝炎是經由含有Ｂ型肝炎病毒的血液或體液透過皮膚或黏膜進入體內而感染。其途徑包括：輸血、打針、血液透析、針灸、刺青、紋眉、穿耳洞及共用牙刷或刮鬍刀時、性行為的感染。帶原者的陰道分泌物、唾液及精液中可能帶有Ｂ型肝炎病毒，但平常不至因此造成感染，但病毒濃度高時則仍有可能引起感染。

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text>嬰兒Ｂ型肝炎預防接種的重要性</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.titleStyle}> 
                肝硬化與肝癌為國人主要死亡原因之一，且與Ｂ型肝炎慢性帶原者有密切關係。
                </Text>
                <Text>   </Text>
                <Text style={styles.titleStyle}> 
                臺灣地區為Ｂ型肝炎高感染地區，成人之帶原率達百分之20，年幼時期的感染易演變成慢性帶原者，按時完成預防接種能有效預防型肝炎的感染。
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <Icon name='logo-twitter' />
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://www.cdc.gov.tw/professional/info.aspx?treeid=5B0231BEB94EDFFC&nowtreeid=639B34B472ACC0CE&tid=D76D08D4B13EB623')}>
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
