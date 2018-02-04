import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { heightsFetch } from '../actions';
import ListItem_H from './ListItem_H';
import firebase from 'firebase';


class HeightList extends Component {
    constructor() {
        super();
        this.state = {
            gender: ''
            
        };
    }
    componentWillMount() {
        // const { currentUser } = firebase.auth();
        // console.log("currentUser:", currentUser)
        this.props.heightsFetch();
        this.createDataSource(this.props);
        const rootRef = firebase.database().ref(`/Users/QBaby`);
        const birthRef = rootRef.child('birthday');
        const genderRef = rootRef.child('gender');
        // const rootRef = firebase.database().ref(`/Users/${currentUser.uid}/information`);
        // const birthRef = rootRef.child('birth');
        // const genderRef = rootRef.child('gender');
        birthRef.on('value', snap => {
            this.setState({
                birthday: snap.val()
            });
            console.log('bdbd',this.state.birth)
        });
        genderRef.on('value', snap => {
            this.setState({
                gender: snap.val()
            });
            //console.log('gendergender',this.state.gender)
        });
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ growths }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(growths);
    }
    renderRow(growth) {
        return <ListItem_H growth={growth} />;
    }

    onButtonPress = () => {

        console.log('gender', this.state.gender)
        if (this.state.gender === "Boy") {
            Actions.boy({ growthData: this.props.growths, birthday: this.state.birthday });
            console.log('b',this.state.gender);
        }
        else {
            Actions.girl({ growthData: this.props.growths, birthday: this.state.birthday });
            console.log('g',this.state.gender);
        }
    };


    render() {

        return (
            <Container>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableHighlight style={styles.addButton}
                    underlayColor='#83ccd2' onPress={() => this.onButtonPress()}>
                    <Text style={{ fontSize: 12, color: 'white' }}>生長曲線</Text>
                </TouchableHighlight>
            </Container>

        );
    }
}
const mapStateToProps = state => {
    const growths = _.map(state.growths, (val, uid) => {
        return { ...val, uid };
    });
    return { growths };
};

const styles = {
    addButton: {
        backgroundColor: '#f2a0a0',
        borderColor: '#f2a0a0',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
}

export default connect(mapStateToProps, { heightsFetch })(HeightList);