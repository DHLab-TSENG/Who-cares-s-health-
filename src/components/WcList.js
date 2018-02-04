import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { wcsFetch } from '../actions';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import ListItem_W from './ListItem_W';
import { Actions } from 'react-native-router-flux';

class WcList extends Component {
    componentWillMount() {
        this.props.wcsFetch();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ wcs }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2

        });
        this.dataSource = ds.cloneWithRows(wcs);
    }

    renderRow(wc) {
        return <ListItem_W wc={wc} />;
    }
    onButtonPress() {
        Actions.tList()
    }

    onButtonPress1() {
        Actions.healthCare()
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
    const wcs = _.map(state.wcs, (val, uid) => {
        return { ...val, uid };
    });
    return { wcs };
};

export default connect(mapStateToProps, { wcsFetch })(WcList);