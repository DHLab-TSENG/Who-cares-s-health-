import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Spinner, Footer } from './common';
import { Actions } from 'react-native-router-flux';


class Main extends Component {
     onButtonPress() {
       Actions.foodCreate();
    }

     onButtonPress1() {
       Actions.heightCreate();
    }
     onButtonPress2() {
       Actions.foodList();
    }
    render() {
       
        return (
            <View>
                
                <CardSection>
                    
                    <Button onPress={this.onButtonPress.bind(this)}>飲食</Button>
                     <Button onPress={this.onButtonPress1.bind(this)}>成長</Button>
                     <Button onPress={this.onButtonPress2.bind(this)}>總覽</Button>
                    <Button>睡眠</Button>
                    <Button>大小便</Button>
                </CardSection>

                 
            </View>
        );
    }
}

export default Main;