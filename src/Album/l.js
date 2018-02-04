import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { CardSection } from './ommo';
import {
    Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';
import firebase from 'firebase';
class L extends Component {
    render() {
        const { url, time, txt, tag } = this.props.babyImg;
        return (
            <View>
                <CardSection>
                    <TouchableOpacity>
                    <Image source={{ uri: url }} style={styles.picture} />
                    </TouchableOpacity>
                    <Text />
                    <Text style={styles.timetxt}>
                        {' '}{time}
                        {'\n '}
                        {tag}
                        {'\n '}
                        {txt}
                    </Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    viewDirection: {
        flexDirection: 'row',
    },
    timetxt: {
        color: '#2e2930',
        fontSize: 18
    },
    texttxt: {
        color: '#2e2930',
        fontSize: 18,
    },


    picture: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#e8ecef',
        marginRight: 3,
        marginVertical: 2,
        marginHorizontal: 5,
        height: 110,
        width: 110,
        backgroundColor: 'white'
    },
};

export default L;