import React, { Component } from 'react';
import {  TouchableWithoutFeedback, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Icon } from 'native-base';
//import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Card, CardSection, Button } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.foodEdit({ food: this.props.food });
    }
    
    render() {
        const { Date, 哺乳, 配方奶, 副食品, 飲食狀況 } = this.props.food;
        
        return (
              
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                <CardSection>
                    <Icon name='md-restaurant' />
                <Text style={styles.titleStyle}>
                   { Date }
                   {' \n'}
                   { '哺乳:'}
                    { 哺乳 }
                    { '  ' }
                    { '配方奶:'}
                    { 配方奶 }
                     { '  ' }
                     { '副食品:'}
                    { 副食品 }
                    
                    
                   




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

export default ListItem;