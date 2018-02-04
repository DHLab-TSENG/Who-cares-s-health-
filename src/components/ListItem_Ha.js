import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { Container, Header, Content, Icon } from 'native-base';

class ListItem_Ha extends Component {
    render() {
        const { r1_5, r1_4, r1_9  } = this.props.r1;

        return (
            <View>
            <CardSection>
                <Icon name='md-browsers' />
                <Text style={styles.titleStyle}>
                    {r1_5}
                    {' \n'}
                    {'就醫診所:'}
                    {r1_4}
                    {'  '}
                    {'症狀:'}
                    {r1_9}
                    </Text>
            </CardSection>
            </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 12,
        paddingLeft: 15
    }
};

export default ListItem_Ha;