import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Container, Content, Footer, FooterTab,
    Icon, Text, Card, Header, Body, Button,
    Title, CardItem, Right, Left, Tab, Tabs, TabHeading,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import FoodList from './FoodList';
import HeightList from './HeightList';
import WcList from './WcList';

class TList extends Component {

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
                            日常紀錄
                    </Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent onPress={() => Actions.List()}>
                            <Icon name='md-add' style={{ color: "#ffffff" }} />
                        </Button>
                    </Right>
                </Header>
                <Tabs style={styles.tabsbg}>
                    <Tab heading={
                        <TabHeading style={styles.tabbg}>
                            <Icon name="ios-restaurant"
                                style={styles.tabicon} />
                            <Text style={styles.tabbtntxt}>飲食紀錄</Text>
                        </TabHeading>}>
                        <FoodList />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabbg}>
                            <Icon name="md-walk"
                                style={styles.tabicon} />
                            <Text style={styles.tabbtntxt}>生長紀錄</Text>
                        </TabHeading>}>
                        <HeightList />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabbg}>
                            <Icon name="md-ionitron"
                                style={styles.tabicon} />
                            <Text style={styles.tabbtntxt}>廁所紀錄</Text>
                        </TabHeading>}>
                        <WcList />
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

export default TList;