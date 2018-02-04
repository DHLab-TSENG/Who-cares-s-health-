import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem_A extends Component {
    render() {
        const { r1_4 } = this.props.abc;

        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {r1_4}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem_A;