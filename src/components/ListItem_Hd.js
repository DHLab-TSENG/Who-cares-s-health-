import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { Container, Header, Content, Icon } from 'native-base';

class ListItem_Hd extends Component {
    render() {
        const { r6_1, r6_3, r6_5  } = this.props.r6;

        return (
            <View>
            <CardSection>
                <Icon name='md-radio-button-on' />
                <Text style={styles.titleStyle}>
                    
                    {r6_1}
                    {' \n'}
                    {'接種疫苗：'}
                   {r6_3}
                   {' \n'}
                    {'接種醫院：'}
                   {r6_5}
                   
                   
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

export default ListItem_Hd;