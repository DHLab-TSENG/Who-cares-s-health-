import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem_Hospital extends Component {
    render() {
         const { Date } = this.props.food;
       
         return (
             <CardSection>
                <Text style={styles.titleStyle}>
                     {Date}
                     
                 </Text>
             </CardSection>
             
         );
    }
}

const styles = {
    titleStyle: {
        fontSize: 14, 
        paddingLeft: 15
    }    
};

export default ListItem_Hospital;