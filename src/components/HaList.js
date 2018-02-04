import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { myhealthbankFetch } from '../actions';
import ListItem_Ha from './ListItem_Ha';

class HaList extends Component {
    componentWillMount() {
        this.props.myhealthbankFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ r1 }) {
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(r1);
    }
    //myhealthbank
    renderRow(r1) {
        return <ListItem_Ha r1={r1} />;
    }

    render() {
        console.log(this.props);
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
    const r1 = _.map(state.r1, (val, uid) => {
        return { ...val, uid };
    });
    
    return { r1 };
};

export default connect(mapStateToProps, { myhealthbankFetch })(HaList);