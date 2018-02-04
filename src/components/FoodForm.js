import React, { Component } from 'react';
import { View, Text, Picker, Image } from 'react-native';
import { connect } from 'react-redux';
import { foodUpdate } from '../actions'; 
import { CardSection, Input } from './common';
//import moment from 'moment';
//import momentLocale from 'moment/locale/zh-tw';
//moment.updateLocale('zh-tw', momentLocale);

class FoodForm extends Component {
    
    //componentWillMount() {
       // const curDate = moment().format("YYYY-MM-DD h:mm")
       // this.setState({Date: curDate})
       // const Data = {
          //  "Date": curDate,
        //}
        
   // }
//state = { Date: 'this.props.Date' }

    render() {
        return(
            <View>
                

           
                <CardSection>
                    <Input
                        label= "哺乳"
                        placeholder= "180"
                        value= {this.props.哺乳}
                        onChangeText={value => this.props.foodUpdate({ prop: '哺乳', value })}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        label= "配方奶"
                        placeholder= "180"
                        value= {this.props.配方奶}
                        onChangeText={value => this.props.foodUpdate({ prop: '配方奶', value })}
                        />
                </CardSection>

                 <CardSection>
                   <Input
                        label= "副食品"
                        placeholder= "十倍粥粥"
                        value= {this.props.副食品}
                        onChangeText={value => this.props.foodUpdate({ prop: '副食品', value })}
                        />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>飲食狀況</Text>
                   <Picker
                     style={{ flex: 1 }}
                     selectedValue={this.props.飲食狀況}
                     onValueChange={ value => this.props.foodUpdate({ prop: '飲食狀況', value })}
                   >
                       <Picker.Item label="吃光光好棒" value="吃光光好棒" style={{ Color: 'red'}}/>
                       <Picker.Item label="普通" value="普通" />
                       <Picker.Item label="只有吃一半" value="只有吃一半" />
                       <Picker.Item label="吃一點而已" value="吃一點而已" />
                       <Picker.Item label="都不吃該打" value="都不吃該打" />
                       
                     

                   </Picker>
                </CardSection>

            </View>
        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 14,
        paddingLeft: 20
    }
};
const mapStateToProps = (state) => {
    const { Date, 哺乳, 配方奶, 副食品, 飲食狀況 } = state.foodForm;

    return { Date, 哺乳, 配方奶, 副食品, 飲食狀況 };
};

export default connect(mapStateToProps, { foodUpdate }) (FoodForm);