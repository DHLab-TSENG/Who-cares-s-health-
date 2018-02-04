import _ from 'lodash';
import React, { Component } from 'react';
import {
    Container, Content, Footer, FooterTab,
    Icon, Text, Card, Header, Body, Button,
    Title, CardItem, Right, Left, Tab, Tabs, TabHeading,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    processColor
} from 'react-native';
import update from 'immutability-helper';
import { LineChart } from 'react-native-charts-wrapper';


class girl extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            xAxis: {},
            yAxis: {}
        };
    }

    componentDidMount() {
        this.setState(
            update(this.state, {
                xAxis: {
                    $set: {
                        drawGridLines: false,
                        textColor: processColor('black'),
                        textSize: 12,
                        gridColor: processColor('black'),
                        gridLineWidth: 1,
                        axisLineColor: processColor('darkgray'),
                        axisLineWidth: 1,
                        gridDashedLine: {
                            lineLength: 10,
                            spaceLength: 0
                        },
                        avoidFirstLastClipping: true,
                        position: 'BOTTOM'
                    }
                },
                yAxis: {
                    $set: {
                        left: {
                            drawGridLines: false,

                        },
                        right: {
                            enabled: false
                        }
                    }
                },
                data1: {
                    $set: {
                        dataSets: [{
                            values: this._LengthYValues(),
                            label: '身高',//身高
                            config: {
                                lineWidth: 2.5,
                                drawCircles: true,
                                circleRadius: 1.5,
                                circleColor: processColor('black'),
                                highlightColor: processColor('darkgray'),
                                color: processColor('darkgray'),
                                drawFilled: false,
                                fillColor: processColor('white'),
                                fillAlpha: 100,
                                valueTextSize: 0,
                                valueFormatter: "##.00",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 0
                                }
                            }
                        },
                        {
                            values:
                                [
                                    { x: 0, y: 45.6 },
                                    { x: 30, y: 50.0 },
                                    { x: 60, y: 53.2 },
                                    { x: 90, y: 55.8 },
                                    { x: 120, y: 58.0 },
                                    { x: 150, y: 59.9 },
                                    { x: 180, y: 61.5 },
                                    { x: 210, y: 62.9 },
                                    { x: 240, y: 64.3 },
                                    { x: 270, y: 65.6 },
                                    { x: 300, y: 66.8 },
                                    { x: 330, y: 68.0 },
                                    { x: 360, y: 69.2 },
                                    { x: 390, y: 70.3 },
                                    { x: 420, y: 71.3 },
                                    { x: 450, y: 72.4 },
                                    { x: 480, y: 73.3 },
                                    { x: 510, y: 74.3 },
                                    { x: 540, y: 75.2 },
                                    { x: 570, y: 76.2 },
                                    { x: 600, y: 77.0 },
                                    { x: 630, y: 77.9 },
                                    { x: 660, y: 78.7 },
                                    { x: 690, y: 79.6 },
                                    { x: 720, y: 80.3 },
                                ],

                            label: 'length',//身高
                            config: {
                                lineWidth: 1,
                                drawCircles: false,
                                highlightColor: processColor('darkgray'),
                                color: processColor('lightpink'),
                                drawFilled: false,
                                fillColor: processColor('blue'),
                                fillAlpha: 60,
                                valueTextSize: 0,
                                valueFormatter: "##.000",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }, {
                            values:
                                [
                                    { x: 0, y: 52.7 },
                                    { x: 30, y: 57.4 },
                                    { x: 60, y: 60.9 },
                                    { x: 90, y: 63.8 },
                                    { x: 120, y: 66.2 },
                                    { x: 150, y: 68.2 },
                                    { x: 180, y: 70.0 },
                                    { x: 210, y: 71.6 },
                                    { x: 240, y: 73.2 },
                                    { x: 270, y: 74.7 },
                                    { x: 300, y: 76.1 },
                                    { x: 330, y: 77.5 },
                                    { x: 360, y: 78.9 },
                                    { x: 390, y: 80.2 },
                                    { x: 420, y: 81.4 },
                                    { x: 450, y: 82.7 },
                                    { x: 480, y: 83.9 },
                                    { x: 510, y: 85.0 },
                                    { x: 540, y: 86.2 },
                                    { x: 570, y: 87.3 },
                                    { x: 600, y: 88.4 },
                                    { x: 630, y: 89.4 },
                                    { x: 660, y: 90.5 },
                                    { x: 690, y: 91.5 },
                                    { x: 720, y: 92.5 },
                                ],
                            label: 'boy97',
                            config: {
                                lineWidth: 1,
                                highlightColor: processColor('darkgray'),
                                color: processColor('#00B8CC'),
                                valueTextSize: 0,
                                drawCircles: false,
                                drawFilled: false,
                                fillColor: processColor('green'),
                                fillAlpha: 60,
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }],
                    },
                }, data2: {
                    $set: {
                        dataSets: [{
                            values: this._WeightYValues(),
                            label: 'weight',//體重
                            config: {
                                lineWidth: 2.5,
                                drawCircles: true,
                                circleRadius: 1.5,
                                circleColor: processColor('black'),
                                highlightColor: processColor('darkgray'),
                                color: processColor('darkgray'),
                                drawFilled: false,
                                fillColor: processColor('white'),
                                fillAlpha: 100,
                                valueTextSize: 0,
                                valueFormatter: "##.00",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 0
                                }
                            }
                        },
                        {
                            values:
                                [
                                    { x: 0, y: 2.4 },
                                    { x: 30, y: 3.2 },
                                    { x: 60, y: 4.0 },
                                    { x: 90, y: 4.6 },
                                    { x: 120, y: 5.1 },
                                    { x: 150, y: 5.5 },
                                    { x: 180, y: 5.8 },
                                    { x: 210, y: 6.1 },
                                    { x: 240, y: 6.3 },
                                    { x: 270, y: 6.6 },
                                    { x: 300, y: 6.8 },
                                    { x: 330, y: 7.0 },
                                    { x: 360, y: 7.1 },
                                    { x: 390, y: 7.3 },
                                    { x: 420, y: 7.5 },
                                    { x: 450, y: 7.7 },
                                    { x: 480, y: 7.8 },
                                    { x: 510, y: 8.0 },
                                    { x: 540, y: 8.2 },
                                    { x: 570, y: 8.3 },
                                    { x: 600, y: 8.5 },
                                    { x: 630, y: 8.7 },
                                    { x: 660, y: 8.8 },
                                    { x: 690, y: 9.0 },
                                    { x: 720, y: 9.2 },
                                ],
                            label: 'baby',
                            config: {
                                lineWidth: 1,
                                drawCircles: false,
                                highlightColor: processColor('darkgray'),
                                color: processColor('lightpink'),
                                drawFilled: false,
                                fillColor: processColor('blue'),
                                fillAlpha: 60,
                                valueTextSize: 0,
                                valueFormatter: "##.000",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }, {
                            values:
                                [
                                    { x: 0, y: 4.2 },
                                    { x: 30, y: 5.4 },
                                    { x: 60, y: 6.5 },
                                    { x: 90, y: 7.4 },
                                    { x: 120, y: 8.1 },
                                    { x: 150, y: 8.7 },
                                    { x: 180, y: 9.2 },
                                    { x: 210, y: 9.6 },
                                    { x: 240, y: 10.0 },
                                    { x: 270, y: 10.4 },
                                    { x: 300, y: 10.7 },
                                    { x: 330, y: 11.0 },
                                    { x: 360, y: 11.3 },
                                    { x: 390, y: 11.6 },
                                    { x: 420, y: 11.9 },
                                    { x: 450, y: 12.2 },
                                    { x: 480, y: 12.5 },
                                    { x: 510, y: 12.7 },
                                    { x: 540, y: 13.0 },
                                    { x: 570, y: 13.3 },
                                    { x: 600, y: 13.5 },
                                    { x: 630, y: 13.8 },
                                    { x: 660, y: 14.1 },
                                    { x: 690, y: 14.3 },
                                    { x: 720, y: 14.6 },
                                ],
                            label: 'boy97',
                            label: 'boy97',
                            config: {
                                lineWidth: 1,
                                highlightColor: processColor('darkgray'),
                                color: processColor('#00B8CC'),
                                valueTextSize: 0,
                                drawCircles: false,
                                drawFilled: false,
                                fillColor: processColor('white'),
                                fillAlpha: 60,
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }],
                    },
                }, data3: {
                    $set: {
                        dataSets: [{
                            values: this._HeadYValues(),
                            label: 'boy3',//頭圍
                            config: {
                                lineWidth: 2.5,
                                drawCircles: true,
                                circleRadius: 1.5,
                                circleColor: processColor('black'),
                                highlightColor: processColor('darkgray'),
                                color: processColor('darkgray'),
                                drawFilled: false,
                                fillColor: processColor('white'),
                                fillAlpha: 100,
                                valueTextSize: 0,
                                valueFormatter: "##.00",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 0
                                }
                            }
                        },
                        {
                            values:
                                [
                                    { x: 0, y: 31.7 },
                                    { x: 30, y: 34.3 },
                                    { x: 60, y: 36.0 },
                                    { x: 90, y: 37.2 },
                                    { x: 120, y: 38.2 },
                                    { x: 150, y: 39.0 },
                                    { x: 180, y: 39.7 },
                                    { x: 210, y: 40.4 },
                                    { x: 240, y: 40.9 },
                                    { x: 270, y: 41.3 },
                                    { x: 300, y: 41.7 },
                                    { x: 330, y: 42.0 },
                                    { x: 360, y: 42.3 },
                                    { x: 390, y: 42.6 },
                                    { x: 420, y: 42.9 },
                                    { x: 450, y: 43.1 },
                                    { x: 480, y: 43.3 },
                                    { x: 510, y: 43.5 },
                                    { x: 540, y: 43.6 },
                                    { x: 570, y: 43.8 },
                                    { x: 600, y: 44.0 },
                                    { x: 630, y: 44.1 },
                                    { x: 660, y: 44.3 },
                                    { x: 690, y: 44.4 },
                                    { x: 720, y: 44.6 },
                                ],
                            label: 'baby',
                            config: {
                                lineWidth: 1,
                                drawCircles: false,
                                highlightColor: processColor('darkgray'),
                                color: processColor('lightpink'),
                                drawFilled: false,
                                fillColor: processColor('blue'),
                                fillAlpha: 60,
                                valueTextSize: 0,
                                valueFormatter: "##.000",
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }, {
                            values:
                                [
                                    { x: 0, y: 36.1 },
                                    { x: 30, y: 38.8 },
                                    { x: 60, y: 40.5 },
                                    { x: 90, y: 41.9 },
                                    { x: 120, y: 43.0 },
                                    { x: 150, y: 43.9 },
                                    { x: 180, y: 44.6 },
                                    { x: 210, y: 45.3 },
                                    { x: 240, y: 45.9 },
                                    { x: 270, y: 46.3 },
                                    { x: 300, y: 46.8 },
                                    { x: 330, y: 47.1 },
                                    { x: 360, y: 47.5 },
                                    { x: 390, y: 47.7 },
                                    { x: 420, y: 48.0 },
                                    { x: 450, y: 48.2 },
                                    { x: 480, y: 48.5 },
                                    { x: 510, y: 48.7 },
                                    { x: 540, y: 48.8 },
                                    { x: 570, y: 49.0 },
                                    { x: 600, y: 49.2 },
                                    { x: 630, y: 49.4 },
                                    { x: 660, y: 49.5 },
                                    { x: 690, y: 49.7 },
                                    { x: 720, y: 49.8 },
                                ],
                            label: 'boy97',
                            config: {
                                lineWidth: 1,
                                highlightColor: processColor('darkgray'),
                                color: processColor('#00B8CC'),
                                valueTextSize: 0,
                                drawCircles: false,
                                drawFilled: false,
                                fillColor: processColor('green'),
                                fillAlpha: 60,
                                dashedLine: {
                                    lineLength: 11,
                                    spaceLength: 3
                                }
                            }
                        }],
                    },
                },
            })
        );
    }

    _LengthYValues() {
        let dataSize = this.props.growthData.length;
        var count = -1;
        return _.times(dataSize, () => {
            count++;
            var record = new Date(this.props.growthData[count].Date);

            var birthday = new Date(this.props.birthday)
            //console.log('bdbd', this.props.birthday)
            var xValue = this.Getdate(birthday, record);
            console.log('led',xValue.AllDays)
            if (xValue.AllDays > 730) {
                //console.log('abxd',xValue.AllDays);
                return;
            }

            var height = parseInt(this.props.growthData[count].Height, 10);

            return { y: height, x: xValue.AllDays };
        });

    }



    _WeightYValues() {
        let dataSize = this.props.growthData.length;
        var count = -1;
        return _.times(dataSize, () => {
            count++;
            var record = new Date(this.props.growthData[count].Date);

            var birthday = new Date(this.props.birthday)
            //console.log('bdbd', this.props.birthday)
            var xValue = this.Getdate(birthday, record);
            console.log('wed',xValue.AllDays)
            if (xValue.AllDays > 730) {
                //console.log('abxd',xValue.AllDays);
                return;
            }
            var weight = parseInt(this.props.growthData[count].Weight, 10);

            return { y: weight, x: xValue.AllDays };
        });

    }


    _HeadYValues() {
        let dataSize = this.props.growthData.length;
        var count = -1;
        return _.times(dataSize, () => {
            count++;
            var record = new Date(this.props.growthData[count].Date);
            var birthday = new Date(this.props.birthday)
            //console.log('bdbd', this.props.birth)
            var xValue = this.Getdate(birthday, record);
            console.log('hed',xValue.AllDays)
            if (xValue.AllDays > 730) {
                //console.log('abxd',xValue.AllDays);
                return;
            }
            var head = parseInt(this.props.growthData[count].HeadCircumference, 10);

            return { y: head, x: xValue.AllDays };
        });
    }





    //_randomYValues() {
    // var data = this.props.growthData;
    // console.log('a', data)
    // var arrayLength = this.props.growthData.length;
    // for (var i = 0; i < arrayLength; i++) {
    //     data[i].Height;
    //     console.log('0', data[0].Height)
    // }

    //const nextValueMaxDiff = 0.2;
    //let lastValue = range / 2;



    //     let dataSize = this.props.growthData.length;
    //     var count = -1;
    //     return _.times(dataSize, () => {
    //         count++;
    //         var record = new Date(this.props.growthData[count].Date);

    //         var birthday = new Date(this.props.birthday)
    //         console.log('bdbd', this.props.birthday)
    //         var xValue = this.Getdate(birthday, record);
    //         //get birthday
    //         //get record date
    //         var height = parseInt(this.props.growthData[count].Height, 10);

    //         return { y: height, x: xValue.AllDays };
    //     });
    // }


    Getdate(bd, rd) {

        var allDay = Math.floor((rd.getTime() - bd.getTime()) / 1000 / 60 / 60 / 24); // 取得所有天數
        //var getYear = Math.floor(allDay / 365); // 取得年份
        //var getMonth = Math.floor((allDay - getYear * 365) / 30); // 取得月份
        //var getDay = allDay - getYear * 365 - getMonth * 30; // 取得天數
        //console.log('allday', allDay)
        return { AllDays: allDay };

    }





    // handleSelect(event) {
    //     let entry = event.nativeEvent
    //     if (entry == null) {
    //         this.setState({ ...this.state, selectedEntry: null })
    //     } else {
    //         this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    //     }
    // }

    render() {
        var data = this.props.growthData;
        //console.log('a', data)
        var arrayLength = this.props.growthData.length;
        for (var i = 0; i < arrayLength; i++) {
            data[i].Height;
            //console.log('0', data[0].Height)
        }

        // const { Date, Height, Weight, HeadCircumference } = this.props.growthData[1];
        //console.log('a', this.props.growthData)//[]
        // console.log('b',this.props.growthData.Height)//undefined
        // console.log('c',Height)//62
        return (

            <Container>
                <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
                <Left style={{ flex: 1.4 }}>
                <Button transparent onPress={() => Actions.pop()}>
                  <Icon name='ios-arrow-back' style={{ color: "#ffffff" }} />
                </Button>
              </Left>
                    <Body flexDirection='row' style={{ flex: 1 }}>
                        <Text style={styles.headertitle} >
                            生長曲線
                    </Text>
                    </Body>
                    <Right style={{ flex: 1 }}/>
                </Header>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text> 身高（公分）</Text>
                    </View>
                    <View style={styles.container}>

                        <LineChart
                            style={styles.chart}
                            data={this.state.data1}
                            chartDescription={{ text: '' }}
                            xAxis={this.state.xAxis}
                            yAxis={this.state.yAxis}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}


                            legend={{ enabled: false }}
                        // onSelect={this.handleSelect.bind(this)}
                        />
                    </View>
                    <View>
                        <Text> 體重（公斤）</Text>
                    </View>
                    <View style={styles.container}>

                        <LineChart
                            style={styles.chart}
                            data={this.state.data2}
                            chartDescription={{ text: '' }}
                            xAxis={this.state.xAxis}
                            yAxis={this.state.yAxis}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}
                            legend={{ enabled: false }}
                        //onSelect={this.handleSelect.bind(this)}
                        />
                    </View>
                    <View>
                        <Text> 頭圍（公分）</Text>
                    </View>
                    <View style={styles.container}>
                        {/* <Text> 頭圍（公分） </Text> */}
                        <LineChart
                            style={styles.chart}
                            data={this.state.data3}
                            chartDescription={{ text: '' }}
                            xAxis={this.state.xAxis}
                            yAxis={this.state.yAxis}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}
                            legend={{ enabled: false }}
                        //onSelect={this.handleSelect.bind(this)}
                        />
                    </View>
                    <View>
                        <Text>
                            ０－２歲生長百分位，
                            <Text style={{ color: '#00B8CC' }}>
                                綠線
                                 </Text>
                            第９７百分位，
                            <Text style={{ color: 'lightpink' }}>
                                紅線
                                 </Text>
                            為第３百分位
                                 </Text>

                        <Text> 資料來源:世界衛生組織(WHO)兒童生長曲線圖</Text>
                    </View>
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: "#ffffff" }}>
                        <Button vertical>
                            <Icon name="ios-images-outline" onPress={() => Actions.photopro()} />
                            <Text style={styles.btntext}>親子相簿</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="ios-bookmarks-outline" onPress={() => Actions.tList()} />
                            <Text style={styles.btntext}>日常紀錄</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="ios-pulse" onPress={() => Actions.healthCare()} />
                            <Text style={styles.btntext}>健康存摺</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="ios-navigate-outline" />
                            <Text style={styles.btntext}>醫療機構</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

        );
    }
}



const styles = StyleSheet.create({
    headertitle: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500",
        justifyContent: "center",
    },
    headertext: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500"
    },
    btntext: {
        color: "#95949a",
        fontFamily: "Heiti TC",
        fontSize: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
    },
    headertext: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500"
    },
    headerbtntxt: {
        color: "#ffffff",
        fontFamily: "Heiti TC",
        fontWeight: "500",
        fontSize: 14
    },
    itemimg: {
        height: 350,
        alignSelf: 'center',
        marginVertical: 11,
        backgroundColor: 'white'
    },
    img: {
        height: 350,
        width: 350,
        borderColor: '#e6e2e8',
        borderWidth: 0.5,
        marginLeft: 2.5,
        marginRight: 2.5,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    itemaddbtn: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 35,
        fontWeight: "500"
    },
    addbtn: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        height: 15,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
    },
    btntext: {
        color: "#95949a",
        fontFamily: "Heiti TC",
        fontSize: 10
    },
});





export default girl;