import React, { Component } from 'react'
import { Container, Header, Body, Left, Right,Tab, Tabs, TabHeading, Icon, Text, Content, Footer, FooterTab, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HaList from './HaList';
import HbList from './HbList';
//import HcList from './HcList';
import HdList from './HdList';



class HealthCare extends Component {

  onButtonPress() {
    Actions.tList();
  }


  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
          <Left style={{ flex: 1.4 }}>
            <Button transparent onPress={() => Actions.home()}>
              <Icon name='md-home' style={{ color: "#ffffff" }} />
            </Button>
          </Left>
          <Body flexDirection='row' style={{ flex: 1 }}>
            <Text style={styles.headertitle} >
              健康存摺
            </Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={() => Actions.wbList()}>
            <Icon name='ios-information-circle-outline' style={{ color: 'white' }} />
            </Button>
          </Right>
        </Header>
        <Tabs style={styles.tabsbg}>
          <Tab heading={
            <TabHeading style={styles.tabbg}>
              <Icon name="md-calendar"
                style={styles.tabicon} />
              <Text style={styles.tabbtntxt}>就醫紀錄</Text>
            </TabHeading>}>
            <HaList />
          </Tab>
          <Tab heading={
            <TabHeading style={styles.tabbg}>
              <Icon name="md-document"
                style={styles.tabicon} />
              <Text style={styles.tabbtntxt}>檢驗結果</Text>
            </TabHeading>}>
            <HbList />
          </Tab>
          <Tab heading={
            <TabHeading style={styles.tabbg}>
              <Icon name="md-color-filter"
                style={styles.tabicon} />
              <Text style={styles.tabbtntxt}>預防接種</Text>
            </TabHeading>}>
            <HdList />
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab style={{ backgroundColor: "#ffffff" }}>
            <Button vertical>
              <Icon name="ios-images-outline" onPress={() => Actions.photopro()} />
              <Text style={styles.btntext}>親子相簿</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-bookmarks-outline" onPress={() => Actions.tList()} />
              <Text style={styles.btntext}>日常紀錄</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-pulse" onPress={() => Actions.healthCare()} />
              <Text style={styles.btntext}>健康存摺</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-navigate-outline" onPress={() => Actions.hoshome()}/>
              <Text style={styles.btntext}>醫療機構</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    fontWeight: "500"
},
headertitle: {
  color: "#ffffff",
  fontFamily: "Heiti TC",
  fontWeight: "500",
  justifyContent: "center",
},

  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },
  tabsbg: {
    backgroundColor: "#ffffff",
    height: 10,
    padding: 0,
  },
  tabbg: {
    backgroundColor: "#ffffff",
    height: 10,
    padding: 0,
  },
  tabicon: {
    color: '#95949a',
    fontSize: 25,
  },
  tabbtntxt: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 12,
  },
  btntext: {
    color: "#95949a",
    fontFamily: "Heiti TC",
    fontSize: 10
  },

};

export default HealthCare;