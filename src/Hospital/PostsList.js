import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Navigator,
    ListView,
    TouchableOpacity,
} from 'react-native';
import { Container, Button, Header, Item, Footer, Left, Body, Right, Title, FooterTab, Input, Icon, Content, Card, CardItem, ListItem } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icon, colors } from 'react-native-elements';
//import {SearchBar} from 'react-native-search-bar';
import CustomMultiPicker from "react-native-multiple-select-list";
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
const loction_now = ''
class PostsList extends Component {
    constructor(props) {
        super(props);
        //console.log('propss',props)
        var gei = loction_now.split('@')[1]
        var wei = loction_now.split('@')[0]
        var i = 0
        //post[i].element.gei[0]第一筆醫院的經度
        //console.log('123',posts)
        try {
            for (i; i < props.posts.length; i++) {
                var distance = this.distance(gei, wei, props.posts[i].element.gei[0], props.posts[i].element.wei[0])
                //posts[i].element.gei[0];
                //var numberAsInt = parseInt(distance, 10);  
                props.posts[i].element.distance = parseInt(distance, 10);
            }

            //sort based on distance

            props.posts.sort(this.compare);
        }
        catch (err) {

        }
       
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),

        }
    }
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => loction_now = position.coords.latitude + '@' + position.coords.longitude,
            error => alert(JSON.stringify(error)), {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
        this.createDataSource(this.props);
    }
    createDataSource({ posts}) {
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 != r2
       });
   
       this.dataSource = ds.cloneWithRows(posts);
   }

    distance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km (change this constant to get miles)
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        if (d > 1) return Math.round(d) + "km";
        else if (d <= 1) return Math.round(d * 1000) + "m";
        return d;
    }

    compare(a, b) {
        let comparison = 0;
        if (a.element.distance > b.element.distance) {
            comparison = 1;
        } else if (b.element.distance > a.element.distance) {
            comparison = -1;
        }
        return comparison;
    }
    getDataSource(posts: Array<any>): ListView.DataSource {
        //if (!posts) return;
       // console.log(131231223, loction_now)
        var gei = loction_now.split('@')[1]
        var wei = loction_now.split('@')[0]
        var i = 0
        //post[i].element.gei[0]第一筆醫院的經度
        //console.log('123',posts)
        try {
            for (i; i < posts.length; i++) {
                var distance = this.distance(gei, wei, posts[i].element.gei[0], posts[i].element.wei[0])
                //posts[i].element.gei[0];
                //var numberAsInt = parseInt(distance, 10);  
                posts[i].element.distance = parseInt(distance, 10);
            }

            //sort based on distance

            posts.sort(this.compare);
        }
        catch (err) {

        }
        return this.state.dataSource.cloneWithRows(posts);
    }

    componentWillReceiveProps(props) {
     //   console.log('componentWillReceiveProps',props.posts)
        this.setState({ dataSource: this.getDataSource(props.posts) });
    }

    renderRow = (post) => {
        if (post.element[0] == "no") {
            return (
                <View>
                    <Image
                        style={{ marginLeft: 100, marginTop: 100 }}
                        source={require('./images/sorry.jpg')}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 55 }}>查無相關資料</Text>
                </View>
            );
        }
        navigator.geolocation.getCurrentPosition(
            position => loction = position.coords.latitude + '@' + position.coords.longitude,
            error => alert(JSON.stringify(error)), {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
      //  console.log(131231223, loction_now)
        var gei = loction_now.split('@')[1]
        var wei = loction_now.split('@')[0]
        post = post.element
      //  console.log("post",post)
        var distance = this.distance(gei, wei, post.gei[0], post.wei[0])
      //  console.log('123', post)
        if (post.pub == null)
            post.pub = ['no']
        if (post.self == null)
            post.self = ['no']
        var nowdate = new Date()
        var week = nowdate.getDay()
        var hour = nowdate.getHours()
        var openorclose = ['休診中']
        var opennum = week - 1
        try {
            if (9 <= hour && hour <= 12)
                openorclose = ([(post.opentime[opennum]).split('午')[1] + '中'])
            if (14 <= hour && hour <= 18)
                openorclose = ([(post.opentime[opennum + 7]).split('午')[1] + '中'])
            if (19 <= hour && hour <= 21)
                openorclose = ([(post.opentime[opennum + 14]).split('上')[1] + '中'])
        }
        catch (e) {
            openorclose = ['無資料']
        }
        return (
            <View style={{ margin: 0 }}>
                <ListItem>
                    <Body>
                        <Text style={{ lineHeight: 25, fontSize: 20 }}>  {post.hospitalname}</Text>
                        <Text style={{ lineHeight: 25, textAlign: 'right' }}>{Object.values(openorclose)}</Text>
                        <Text style={{ lineHeight: 25 }}>{post.address}</Text>
                        <Text style={{ lineHeight: 25 }}>* 公費疫苗：{Object.values(post.pub).join("、")}</Text>
                        <Text style={{ lineHeight: 25 }}>* 自費疫苗：{Object.values(post.self).join("、")}</Text>
                        <Text style={{ textAlign: 'right', lineHeight: 20, color: '#00BBFF' }}>距離：{distance}</Text>
                    </Body>
                </ListItem>

            </View>
        );
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
                            醫院清單
                        </Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>


                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
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
}

export default PostsList