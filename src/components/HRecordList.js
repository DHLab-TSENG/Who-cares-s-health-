import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { hrecordsFetch } from '../actions';
import ListItem_HR from './ListItem_HR';

class HRecordList extends Component {
   componentWillMount() {
        this.props.hrecordsFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ hrecords }) {
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(hrecords);
    }
    renderRow(hrecord) {
        return <ListItem_HR hrecord={hrecord} />;
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
    const hrecords = _.map(state.hrecords, (val, uid) => {
        return { ...val, uid };
    });
    
    return { hrecords };
};

export default connect(mapStateToProps, { hrecordsFetch })(HRecordList);