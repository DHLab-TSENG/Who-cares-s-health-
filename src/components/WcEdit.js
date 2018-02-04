import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WcForm from './WcForm';
import { wcUpdate, wcSave, wcDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';
import { Container, Header, Body, Left, Right, Icon,Text } from 'native-base';
class WcEdit extends Component {
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.wc, (value, prop) => {
            this.props.wcUpdate({ prop, value });
        });
    }

    //constructor(props) {
       // super(props)
       // this.state = { datetime: '2017-10-18' }
       
    //}
    //state = { Date: 'this.props.Date' }

    onButtonPress() {
        const { Date } =this.state;
        const { 大小便狀況 } = this.props;

        this.props.wcSave({ Date, 大小便狀況, uid: this.props.wc.uid });
    }

    onAccept() {
        const { uid } = this.props.wc;

        this.props.wcDelete({ uid });
        this.setState({ showModal: false});
        
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Container>
            <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
                <Left style={{ flex: 1.4 }}>
                <Button transparent onPress={() => Actions.pop()}>
                <Text style={styles.headerbtntxt}>取消</Text>
              </Button>
                </Left>
                <Body flexDirection='row' style={{ flex: 1 }}>
                    <Text style={styles.headertitle} >
                        編輯紀錄
                </Text>
                </Body>
                <Right style={{ flex: 1 }}>
              </Right>
            </Header>
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
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => { this.setState({ Date: datetime }); }}
                    />
                       
                </CardSection>
                <WcForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { Date, 大小便狀況 } = state.wcForm;

    return { Date, 大小便狀況 };
};

const styles = {
    headertext: {
      color: "#ffffff",
      fontFamily: "Heiti TC",
      fontWeight: "500"
    },
    headerbtntxt: {
      color: "#ffffff",
      fontFamily: "Heiti TC",
      fontWeight: "500",
      fontSize: 14
    },
    itemimg: {
      height: 350,
      alignSelf: 'center',
      marginVertical: 11,
      backgroundColor: 'white'
    },
    img: {
      height: 350,
      width: 350,
      borderColor: '#e6e2e8',
      borderWidth: 0.5,
      marginLeft: 2.5,
      marginRight: 2.5,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    itemaddbtn: {
      justifyContent: 'center',
      alignSelf: 'center',
      height: 35,
      fontWeight: "500"
    },
    addbtn: {
      justifyContent: 'center',
      alignSelf: 'flex-start',
      height: 15,
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    instructions: {
      marginTop: 20,
      marginBottom: 20,
    },
  };

export default connect(mapStateToProps, { 
    wcUpdate, wcSave, wcDelete 
})(WcEdit);