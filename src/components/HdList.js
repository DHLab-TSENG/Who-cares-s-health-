import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, TouchableHighlight, Text } from 'react-native';
import { myhealthbankssFetch } from '../actions';
import ListItem_Hd from './ListItem_Hd';
import { Actions } from 'react-native-router-flux';

class HdList extends Component {
    componentWillMount() {
        this.props.myhealthbankssFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ r6 }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(r6);
    }
    //myhealthbank
    renderRow(r6) {
        return <ListItem_Hd r6={r6} />;
    }

    render() {
        console.log(this.props);
        return (
            <View>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            <TouchableHighlight style={styles.addButton}
                underlayColor='#83ccd2' onPress={() =>  Actions.hcList() }>
                <Text style={{ fontSize: 12, color: 'white' }}>疫苗資訊</Text>
            </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const r6 = _.map(state.r6, (val, uid) => {
        return { ...val, uid };
    });

    return { r6 };
};

const styles = {
    addButton: {
    backgroundColor: '#f2a0a0',
    borderColor: '#f2a0a0',
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
}

export default connect(mapStateToProps, { myhealthbankssFetch })(HdList);