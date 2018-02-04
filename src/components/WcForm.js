import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { wcUpdate } from '../actions';
import { CardSection, Input } from './common';
import CustomMultiPicker from "react-native-multiple-select-list";


const userList = {
  "尿尿":"尿尿",
  "1號便便":"1號便便",
  "2號便便":"2號便便",
  "3號便便":"3號便便",
  "4號便便":"4號便便",
  "5號便便":"5號便便",
  "6號便便":"6號便便",
  "7號便便":"7號便便",
  "8號便便":"8號便便",
  "9號便便":"9號便便",

}

class WcForm extends Component {
    render() {
        return(
        <View>
           <CardSection> 
           
                <Image
                source={require('../img/900.jpg')}
                style={{ height: 300, width: 250}}
                
                />
 
           <CustomMultiPicker
                options={userList}
                value={userList}
                selectedoptions={this.props.大小便狀況}
                onValueChange={ value => this.props.wcUpdate({ prop: '大小便狀況', value })}
                multiple={false} // 
                placeholder={"Search"}
                placeholderTextColor={'#757575'}
                returnValue={"value"} // label or value 
                //callback={(res)=>{ console.log(res) }} // callback, array of selected items 
                callback={value => this.props.wcUpdate({ prop: '大小便狀況', value })}
                rowBackgroundColor={"#eee"}
                rowHeight={35}
                rowRadius={5}
                iconColor={"#00a2dd"}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                scrollViewHeight={420}
                selected={[1,2]} // list of options which are selected by default 
                />
          
          
            </CardSection> 
        </View>
        );
}
}

const mapStateToProps = (state) => {
    const { Date, 大小便狀況 } = state.wcForm;

    return { Date, 大小便狀況 };
};

export default connect(mapStateToProps, {wcUpdate})(WcForm);