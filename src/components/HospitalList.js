import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { hospitalsFetch } from '../actions';
import ListItem_Hospital from './ListItem_Hospital';

class HospitalList extends Component {
    componentWillMount() {
        this.props.hospitalsFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ foods }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        

        this.dataSource = ds.cloneWithRows(foods)
        //console.log('createDataSource, hospital, props: ',this.props);
        //console.log('createDataSource, hospital, dataSource: ',this.dataSource);
    }

     renderRow(food) {
        return <ListItem_Hospital food={food} />;
    }
    
    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const foods= _.map(state.foods, (val, uid) => {
        return { ...val, uid}
    });
    return { foods };
};

export default connect(mapStateToProps, { hospitalsFetch })(HospitalList);