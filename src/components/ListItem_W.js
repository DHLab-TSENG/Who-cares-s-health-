import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem_W extends Component {
    onRowPress() {
        Actions.wcEdit({ wc: this.props.wc });
    }
    
    render() {
        const { Date, 時間, 大小便狀況 } = this.props.wc;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>    
                    <CardSection>
                        <Icon name='ios-water' />
                        <Text style={styles.titleStyle}>
                            { Date }
                            {' \n'}
                            { 大小便狀況 }
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

export default ListItem_W;

