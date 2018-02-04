import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
//import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
//import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
//import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { foodUpdate, foodCreate } from '../actions';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner, Button } from './common';
import FoodForm from './FoodForm';
import DatePicker from 'react-native-datepicker'
//import Main from './Main';
//import moment from 'moment';
//import momentLocale from 'moment/locale/zh-tw';
//moment.updateLocale('zh-tw', momentLocale);



class FoodCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { datetime: '2017-10-18' }

    }
    state = { Date: 'this.props.Date' }
    //state = { Date: '' }
    //componentWillMount() {
    // const curDate = moment().format("YYYY-MM-DD h:mm")
    // this.setState({Date: curDate})
    // const Date = {
    //   "Date": curDate,
    //}

    // }
    onButtonPress() {
        const { Date } = this.state;
        const { 哺乳, 配方奶, 副食品, 飲食狀況 } = this.props;
        this.props.foodCreate({ Date, 哺乳, 配方奶, 副食品, 飲食狀況: 飲食狀況 || '普通' });
    }
    //onButtonPress1() {
    //  Actions.heightCreate();
    // }
    render() {


        return (


            <Card style={{ flex: 1 }}>

                <CardSection>
                     <DatePicker
                        style={{ width: 250 }}
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
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 100
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => { this.setState({ Date: datetime }); }}
                    />
                       

                </CardSection>
                <FoodForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        save
                  </Button>
                </CardSection>




                {/* <View height={140}/>
                <CardSection>
                   
                    <Button onPress={this.onButtonPress1.bind(this)}>成長</Button>
                    <Button>睡眠</Button>
                    <Button>大小便</Button>
                </CardSection> */}

            </Card>

        );
    }
}


const mapStateToProps = (state) => {
    const { Date, 哺乳, 配方奶, 副食品, 飲食狀況 } = state.foodForm;

    return { Date, 哺乳, 配方奶, 副食品, 飲食狀況 };
};

export default connect(mapStateToProps, { foodUpdate, foodCreate })(FoodCreate);