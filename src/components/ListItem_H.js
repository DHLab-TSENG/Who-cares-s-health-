import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Icon } from 'native-base';
import { CardSection } from './common';

class ListItem_H extends Component {
    onRowPress() {
        Actions.heightEdit({ growth: this.props.growth });
    }
    render() {
        const { Date, Height, Weight, HeadCircumference } = this.props.growth;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>    
            <CardSection>
                <Icon name='ios-body' />
                <Text style={styles.titleStyle}>
                    { Date }
                    {' \n'}
                     { '身高:'}
                    { Height }
                    { '  ' }
                    { '體重:'}
                    { Weight }
                     { '  ' }
                     { '頭圍:'}
                    { HeadCircumference }
                    
                </Text>
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle: {
        fontSize: 14,
        paddingLeft: 15
    }
};

export default ListItem_H;
