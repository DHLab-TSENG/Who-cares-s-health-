import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput
} from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Header, Body, Container, Left, Right, Content, Item, Input, Icon } from 'native-base';
//import{ Firebase } from '../service/Firebase.js';
import DatePicker from 'react-native-datepicker';
export default class NewLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      repassword: '',
      gender: '',
      birth: ''
    }
    this.register = this.register.bind(this)
  }

  register() {
    const email = this.state.email
    const pwd = this.state.password
    const gender = this.state.gender
    const birth = this.state.birth

    if (this.state.password == this.state.repassword) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function (user) {
        alert("Success!")
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/Users/${currentUser.uid}/information/email`).push(email).
          then((data) => {
            dispatch({ type: "FULFILLED" })
            //success
          }).
          catch((err) => {
            dispatch({ type: "REJECTED" })
            //error
          });
        firebase.database().ref(`/Users/${currentUser.uid}/information/pwd`).push(pwd).
          then((data) => {
            dispatch({ type: "FULFILLED" })
            //success
          }).
          catch((err) => {
            dispatch({ type: "REJECTED" })
            //error
          });
        firebase.database().ref(`/Users/${currentUser.uid}/information/gender`).push(gender).
          then((data) => {
            dispatch({ type: "FULFILLED" })
            //success
          }).
          catch((err) => {
            dispatch({ type: "REJECTED" })
            //error
          });
        firebase.database().ref(`/Users/${currentUser.uid}/information/birth`).push(birth).
          then((data) => {
            dispatch({ type: "FULFILLED" })
            //success
          }).
          catch((err) => {
            dispatch({ type: "REJECTED" })
            //error
          });
        Actions.login()
      }).catch(function (e) {
        alert(e)
      })

    } else {
      alert("Passwords did not match");
    }
  }

  render() {
    return (
      <Container>
        <Image style={styles.imgbackground} source={require('../backgroundImage/背景圖1.jpg')} />
        <View style={styles.container}>
          <Text style={[styles.txttitle, { fontSize: 40 }]}>SING UP</Text>
        </View>
        <Content>
          <Item rounded style={styles.itembackground}>
            <Input
              label="Email"
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              placeholder="email@email.com"
              //placeholderTextColor='black'
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
            />
          </Item>
          <Item rounded style={styles.itembackground}>
            <Input
              label="Password"
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              placeholder="Password"
              //placeholderTextColor='black'
              secureTextEntry={true}
              returnKeyType="next"
              ref={(input) => this.passwordInput = input}
              onSubmitEditing={() => this.repasswordInput.focus()}
            />
          </Item>
          <Item rounded style={styles.itembackground}>
            <Input
              label="Confirm Password"
              onChangeText={(text) => this.setState({ repassword: text })}
              value={this.state.repassword}
              placeholder="Confirm Password"
              //placeholderTextColor='black'
              secureTextEntry={true}
              returnKeyType="go"
              ref={(input) => this.repasswordInput = input}
            />
          </Item>
          <Item rounded style={styles.itembackground}>
            <Input
              label="Gender"
              onChangeText={(text) => this.setState({ gender: text })}
              value={this.state.gender}
              placeholder="boy or girl"
              //placeholderTextColor='black'
              //secureTextEntry={true}
              returnKeyType="go"
              ref={(input) => this.genderInput = input}
              onSubmitEditing={() => this.birthInput.focus()}
            />
          </Item>
          <Item rounded style={styles.itembackground}>
            <DatePicker
              style={{ width: 250 }}
              date={this.state.birth}
              mode="datetime"
              format="YYYY-MM-DD"
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
              onDateChange={(datetime) => { this.setState({ birth: datetime }); }}
            />
          </Item>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </Content>
        <View style={styles.bottmContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#00a3af' }]} onPress={this.register}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#83ccd2' }]} onPress={() => Actions.pop()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imgbackground: {
    height: 800,
    width: 600,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txttitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
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
  bottmContainer: {
    height: 60,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingVertical: 10,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});