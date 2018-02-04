import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { abcFetch } from '../actions';
import ListItem_A from './ListItem_A';

class AbcList extends Component {
     componentWillMount() {
        this.props.abcFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ abc }) {
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(abc);
    }
    renderRow(abc) {
        return <ListItem_A abc={abc} />;
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
    const abc = _.map(state.abc, (val, uid) => {
        return { ...val, uid };
    });
    
    return { abc };
};

export default connect(mapStateToProps, { abcFetch })(AbcList);