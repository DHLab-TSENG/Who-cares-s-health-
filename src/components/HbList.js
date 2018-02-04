import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { myhealthbanksFetch } from '../actions';
import ListItem_Hb from './ListItem_Hb';

class HbList extends Component {
    componentWillMount() {
        this.props.myhealthbanksFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ r7 }) {
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(r7);
    }
    //myhealthbank
    renderRow(r7) {
        return <ListItem_Hb r7={r7} />;
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
    const r7 = _.map(state.r7, (val, uid) => {
        return { ...val, uid };
    });
    
    return { r7 };
};

export default connect(mapStateToProps, { myhealthbanksFetch })(HbList);