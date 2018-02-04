import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Left, Right, Body, View, Header, Content, List, ListItem, Text, Icon, SwipeRow, Button } from 'native-base';

class HcList extends Component {

  onRowPress1() {
    Actions.tList();
  }
  onRowPress2() {
    Actions.hList_B();
  }
  onRowPress3() {
    Actions.hList_BCG();
  }
  onRowPress4() {
    Actions.hList_IPV();
  }
  onRowPress5() {
    Actions.hList_PCV();
  }
  onRowPress6() {
    Actions.hList_V();
  }
  onRowPress7() {
    Actions.hList_MMR();
  }
  onRowPress8() {
    Actions.hList_JEV();
  }
  onRowPress9() {
    Actions.hList_I();
  }
  onRowPress10() {
    Actions.hList_A();
  }

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
            <Text style={styles.headertitle} >
              疫苗資訊
            </Text>
          </Body>
          <Right style={{ flex: 1 }}/>
        </Header>
        <Content >
          <List>
            <ListItem itemDivider onPress={this.onRowPress1.bind(this)}>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>24小時內</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress2.bind(this)}>
            <Text style={styles.titleStyle}>B型肝炎（第一劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>1個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress2.bind(this)}>
              <Text style={styles.titleStyle}>B型肝炎（第二劑）</Text>

            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>2個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress4.bind(this)}>
              <Text style={styles.titleStyle}>白喉破傷風非細胞性百日咳、b型嗜血桿菌及不活化小兒麻痺五合一疫苗（第一劑）</Text>

            </ListItem>
            <ListItem onPress={this.onRowPress5.bind(this)}>
              <Text style={styles.titleStyle}>結合型肺炎鏈球菌（第一劑）</Text>

            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>4個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress4.bind(this)}>
              <Text style={styles.titleStyle}>白喉破傷風非細胞性百日咳、b型嗜血桿菌及不活化小兒麻痺五合一疫苗（第二劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress5.bind(this)}>
              <Text style={styles.titleStyle}>結合型肺炎鏈球菌（第二劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>5個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress3.bind(this)}>
              <Text style={styles.titleStyle} >卡介苗</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>6個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress2.bind(this)}>
              <Text style={styles.titleStyle}>B型肝炎（第三劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress4.bind(this)}>
              <Text style={styles.titleStyle}>白喉破傷風非細胞性百日咳、b型嗜血桿菌及不活化小兒麻痺五合一疫苗（第三劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>6個月～國小學童</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress9.bind(this)}>
              <Text style={styles.titleStyle}>流感疫苗（初次接種二劑，之後每年一劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>12個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress6.bind(this)}>
              <Text style={styles.titleStyle}>水痘疫苗</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress7.bind(this)}>
              <Text style={styles.titleStyle}>麻疹腮腺炎德國麻疹混合疫苗（第一劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress10.bind(this)}>
              <Text style={styles.titleStyle}>Ａ型肝炎疫苗（第一劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>12個月～15個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress5.bind(this)}>
              <Text style={styles.titleStyle}>結合型肺炎鏈球菌（第三劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>15個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress8.bind(this)}>
              <Text style={styles.titleStyle}>日本腦炎疫苗（第一劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>18個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress4.bind(this)}>
              <Text style={styles.titleStyle}>白喉破傷風非細胞性百日咳、b型嗜血桿菌及不活化小兒麻痺五合一疫苗（第四劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress10.bind(this)}>
              <Text style={styles.titleStyle}>Ａ型肝炎疫苗（第二劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>27個月</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress8.bind(this)}>
              <Text style={styles.titleStyle}>日本腦炎疫苗（第二劑）</Text>
            </ListItem>

            <ListItem itemDivider>
              <Icon name='ios-planet' />
              <Text style={styles.titleStyle1}>滿5歲至國小前</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress7.bind(this)}>
              <Text style={styles.titleStyle}>麻疹腮腺炎德國麻疹混合疫苗（第二劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress8.bind(this)}>
              <Text style={styles.titleStyle}>日本腦炎疫苗（第三劑）</Text>
            </ListItem>
            <ListItem onPress={this.onRowPress4.bind(this)}>
              <Text style={styles.titleStyle}>白喉破傷風非細胞性百日咳、b型嗜血桿菌及不活化小兒麻痺五合一疫苗（第五劑）</Text>
            </ListItem>

          </List>
        </Content>
      </Container>

    );
  }
}
const styles = {
  headertitle: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500",
    justifyContent: "center",
},
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500"
},

  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },
  titleStyle: {
    fontSize: 12,
    paddingLeft: 15
  },
  titleStyle1: {
    fontSize: 12,
    paddingLeft: 15
  }
};

export default HcList;