import React, { Component } from 'react';
//import { View } from 'react-native';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { heightUpdate, heightCreate } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';
//import { Text, TouchableOpacity, View } from 'react-native';
//import DateTimePicker from 'react-native-modal-datetime-picker';
//import { Actions } from 'react-native-router-flux';
//import Main from './Main';
import HeightForm from './HeightForm';
//import Time from './Time';
//import DateTimePicker from 'react-native-modal-datetime-picker';
//import styles from './Time.style';
import DatePicker from 'react-native-datepicker'



class HeightCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { datetime: '2017-10-18' }
       
    }
    state = { Date: 'this.props.Date' }
    
    
   
    onButtonPress() {
        const { Date } =this.state;
        const { Height, Weight, HeadCircumference } = this.props;
        this.props.heightCreate({ Date, Height, Weight, HeadCircumference });
    }
    
    render() {
        return (
                <Card>
                    <CardSection>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.Date}
                        mode="datetime"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 18
                            },
                            dateInput: {
                                marginLeft: 100
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => { this.setState({ Date: datetime }); }}
                    />
                       
                </CardSection>
                  
                    <HeightForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save
                        </Button>
                    </CardSection>
                
                </Card>

                
            
        );
    }
}

const mapStateToProps = (state) => {
    const { Date, Height, Weight, HeadCircumference} = state.heightForm;

    return { Date, Height, Weight, HeadCircumference};
};

export default connect(mapStateToProps, {
     heightUpdate, heightCreate
     }) (HeightCreate);