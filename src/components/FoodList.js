import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListView } from 'react-native';
import { foodsFetch } from '../actions';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Right, Body } from 'native-base';
import { Card, CardSection } from './common';
import ListItem from './ListItem';
//import Footer from './Footer';

class FoodList extends Component {
    componentWillMount() {
        this.props.foodsFetch();
        this.createDataSource(this.props);

    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ foods }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(foods);
    }

    renderRow(food) {
        return <ListItem food={food} />;
    }


    render() {
        return (
            <Container>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Container>
        );
    }
}
const mapStateToProps = state => {
    const foods = _.map(state.foods, (val, uid) => {
        return { ...val, uid };
    });
    return { foods };


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

export default connect(mapStateToProps, { foodsFetch })(FoodList);
