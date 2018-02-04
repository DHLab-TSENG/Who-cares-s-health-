import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { heightUpdate } from '../actions';
import { CardSection, Input } from './common';
import DatePicker from 'react-native-datepicker'


class HeightForm extends Component {
    constructor(props) {
        super(props)
        this.state = { datetime: '2017-10-18 13:00' }
       
    }
    state = { Date: 'this.props.Date' }
    
    render() {
        return (
            <View>
              

                <CardSection>
                    <Input
                        label="身高"
                        placeholder="100 cm"
                        value={this.props.Height}
                        onChangeText={value => this.props.heightUpdate({ prop: 'Height', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="體重"
                        placeholder="10 kg"
                        value={this.props.Weight}
                        onChangeText={value => this.props.heightUpdate({ prop: 'Weight', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="頭圍"
                        placeholder="50 cm"
                        value={this.props.HeadCircumference}
                        onChangeText={value => this.props.heightUpdate({ prop: 'HeadCircumference', value })}
                    />
                </CardSection>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

const mapStateToProps = (state) => {
    const { Date, Height, Weight, HeadCircumference } = state.heightForm;

    return { Date, Height, Weight, HeadCircumference };
};

export default connect(mapStateToProps, { heightUpdate })(HeightForm);