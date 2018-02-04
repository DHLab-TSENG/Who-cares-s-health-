import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hrecordUpdate, hrecordCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class HRecordCreate extends Component {
    onButtonPress() {
        const { r1_5, r1_4, r1_9 } = this.props;

        this.props.hrecordCreate({ r1_5, r1_4, r1_9 });
    }
    
    render() {
        return (
            <Card> 
                
                <CardSection>
                    <Input 
                        label="就醫日期"
                        value={this.props.r1_5}
                        onChangeText={value => this.props.hrecordUpdate({ prop: 'r1_5', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="就醫診所"
                        value={this.props.r1_4}
                        onChangeText={value => this.props.hrecordUpdate({ prop: 'r1_4', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="疾病"
                        value={this.props.r1_9}
                        onChangeText={value => this.props.hrecordUpdate({ prop: 'r1_9', value })}
                    />
                </CardSection>

                <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       save
                   </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { r1_5, r1_4, r1_9 } = state.hrecordForm;

    return { r1_5, r1_4, r1_9 };
};

export default connect(mapStateToProps, { 
    hrecordUpdate, hrecordCreate
 })(HRecordCreate);