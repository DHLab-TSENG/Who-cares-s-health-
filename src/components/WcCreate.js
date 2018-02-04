import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wcUpdate, wcCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import WcForm from './WcForm';
import DatePicker from 'react-native-datepicker';



 class WcCreate extends Component {
     constructor(props) {
        super(props)
        this.state = { datetime: '2017-10-18' }
       
    }
    state = { Date: 'this.props.Date' }

    onButtonPress() {
      const { Date } =this.state;
      const { 大小便狀況 } = this.props;

      this.props.wcCreate({ Date, 大小便狀況 });
    }
    

    render() {
    return (
      <Card>
        <CardSection> 
           
          
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.Date}
                        mode="datetime"
                        format="YYYY-MM-DD HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginRight: 4
                            },
                            dateInput: {
                                marginLeft: 60
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => { this.setState({ Date: datetime }); }}
                    />
                       
                </CardSection>
         
        <WcForm {...this.props}/>
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
  const { Date, 大小便狀況 } = state.wcForm;

  return  { Date, 大小便狀況 };
};

export default connect(mapStateToProps, { 
  wcUpdate, wcCreate
 })(WcCreate);