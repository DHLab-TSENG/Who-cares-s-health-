import React, { Component } from 'react';
//import { View} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Button, Body } from 'native-base';
import FoodCreate from './FoodCreate';
import HeightCreate from './HeightCreate';
import WcCreate from './WcCreate';
import { Actions } from 'react-native-router-flux';
class List extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
                    <Left style={{ flex: 1.4 }}>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Text style={styles.headerbtntxt}>取消</Text>
                        </Button>
                    </Left>
                    <Body flexDirection='row' style={{ flex: 1 }}>
                        <Text style={styles.headertitle} >
                            編輯紀錄
                    </Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="ios-restaurant" /><Text style={{ fontSize: 12 }}>飲食</Text></TabHeading>}>
                        <FoodCreate />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-walk" /><Text style={{ fontSize: 12 }}>成長</Text></TabHeading>}>
                        <HeightCreate />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-ionitron" /><Text style={{ fontSize: 12 }}>大小便</Text></TabHeading>}>
                        <WcCreate />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = {
    headerbtntxt: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500",
        fontSize: 14
      },
    headertitle: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500",
        justifyContent: "center",
    },
    searchbarbg: {
        backgroundColor: "#ffffff",
        height: 50,
        padding: 15,
    },
    searchbaritem: {
        backgroundColor: '#f7f7f7',
    },
    searchbaricon: {
        color: '#95949a',
        fontsize: 12,
    },
    searchbarbtntxt: {
        color: "#95949a",
        fontFamily: "Heiti TC",
        fontSize: 12,
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

export default List;