import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class FoodList extends Component {
    onButtonPress() {
        Actions.foodList()
    }

    render() {
        return (
            <Container>
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
                            <Icon name="ios-navigate-outline" />
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

export default Footer;