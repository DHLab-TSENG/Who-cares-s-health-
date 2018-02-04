// React Native Components
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Header, Body, Container, Left, Right, Content, Item, InputGroup, Icon } from 'native-base';
import { Card, CardSection, Input, Button, Spinner } from './common';
import NewLogin from './NewLogin';
import firebase from 'firebase';


class LoginForm extends Component {
    static propTypes = {};
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: '#00a3af' }]} onPress={this.onButtonPress.bind(this)}>
                <Text style={styles.buttonText}>登入</Text>
            </TouchableOpacity>
        );
    }
    onButtonSignUp() {
        Actions.newlogin();
    }
    onButtonLogIn() {
        Actions.login();
    }

    render() {
        return (
            <Container>
                <Image style={styles.imgbackground} source={require('../backgroundImage/背景圖1.jpg')} />
                <View style={styles.container}>
                    <Text style={[styles.txttitle, { fontSize: 40 }]}>MaBao</Text>
                </View>
                <Content>
                    <Item rounded style={styles.itembackground}>
                        <Input
                            label="Email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </Item>
                    <Item rounded style={styles.itembackground}>
                        <Input
                            secureTextEntry
                            label="Paswword"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </Item>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </Content>
                <View style={styles.bottmContainer}>
                    {this.renderButton()}
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#83ccd2' }]} onPress={() => Actions.newlogin()}>
                        <Text style={styles.buttonText}>註冊</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = {
    errorTextStyle: {
        marginTop: 10,
        fontSize: 16,
        alignSelf: 'center',
        color: '#9ea1a3',
        textAlign: 'justify',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#9ea1a3'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottmContainer: {
        height: 60,
        flexDirection: 'row',
    },
    imgbackground: {
        height: 800,
        width: 600,
        position: 'absolute',
    },
    itembackground: {
        opacity: 0.8,
        marginTop: 10,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        height: 50,
        width: 350,
    },
    // itembackgrounderror: {
    //     opacity: 0.8,
    //     marginTop: 10,
    //     alignSelf: 'center',
    //     borderColor: 'transparent',
    //     borderWidth: 1,
    //     backgroundColor: 'transparent',
    //     height: 50,
    //     width: 350,
    // },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    txttitle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    // desc: {
    //     fontSize: 20,
    //     color: '#fff',
    //     backgroundColor: 'rgba(0,0,0,0)',
    //     textAlign: 'center'
    // }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
