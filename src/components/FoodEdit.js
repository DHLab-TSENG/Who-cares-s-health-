import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Communications from 'react-native-communications';
import FoodForm from './FoodForm';
import { Actions } from 'react-native-router-flux';
import { foodUpdate, foodSave, foodDelete } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';
import DatePicker from 'react-native-datepicker'
import { Container, Header, Body, Left, Right, Icon, Text } from 'native-base';

class FoodEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.food, (value, prop, state) => {
            this.props.foodUpdate({ prop, value, state });
        });
    }
    onButtonPress() {
        const { Date } = this.state;
        const { 哺乳, 配方奶, 副食品, 飲食狀況 } = this.props;

        this.props.foodSave({ Date, 哺乳, 配方奶, 副食品, 飲食狀況, uid: this.props.food.uid })
    }

    onAccept() {
        const { uid } = this.props.food;

        this.props.foodDelete({ uid });
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
                    <FoodForm />
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

const mapStateToProps = (state) => {
    const { Date, 哺乳, 配方奶, 副食品, 飲食狀況 } = state.foodForm;

    return { Date, 哺乳, 配方奶, 副食品, 飲食狀況 };
};

export default connect(mapStateToProps, {
    foodUpdate, foodSave, foodDelete
})(FoodEdit);