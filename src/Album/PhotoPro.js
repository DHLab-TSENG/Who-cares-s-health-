import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
//另外安裝套件
import {
    Container,
    Header,
    Body,
    Content,
    Footer,
    FooterTab,
    Button,
    Tab, Tabs, TabHeading,
    Text,
    Title,
    Segment,
    Icon,
    Item,
    Input,
    Left,
    Right
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import PhotoAlbum from './PhotoAlbum';

import PhotoTag from './PhotoTag';
import firebase, { database } from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
// c3e8ec

class PhotoPro extends Component {
    state = {
        inputtxt: 'txt'
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
                            親子相簿
                        </Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent onPress={() => Actions.photoedit()}>
                            <Icon name='md-add' style={{ color: "#ffffff" }} />
                        </Button>
                    </Right>
                </Header>

               

                <Tabs style={styles.tabsbg}>
                    <Tab heading={
                        <TabHeading style={styles.tabbg}>
                            <Icon name="ios-image-outline"
                                style={styles.tabicon} />
                            <Text style={styles.tabbtntxt}>相簿</Text>
                        </TabHeading>}>
                        <PhotoAlbum />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabbg}>
                            <Icon name="ios-star-outline"
                                style={styles.tabicon} />
                            <Text style={styles.tabbtntxt}>標籤</Text>
                        </TabHeading>}>
                        <PhotoTag />
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
        fontSize: 12,
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

export default PhotoPro;