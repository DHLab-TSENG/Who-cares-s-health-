import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { Container, Header, Content, Icon } from 'native-base';

class ListItem_Hb extends Component {
    render() {
        const { r7_6, r7_4, r7_10, r7_11, r7_12  } = this.props.r7;

        return (
            <View>
            <CardSection>
                <Icon name='md-list-box' />
                <Text style={styles.titleStyle}>
                   
                    {r7_6}
                    {' \n'}
                    {'醫事機構: '}
                    {r7_4} 
                    {'  '}
                    {'項目名稱: '}
                    {r7_10}
                    {' \n'}
                    {'結果值: '}
                    {r7_11}
                    {' ('}
                    {'參考值: '}
                    {r7_12}
                    {')'}
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

export default ListItem_Hb;