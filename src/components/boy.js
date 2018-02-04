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
class boy extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            xAxis: {},
            yAxis: {}
        };
    }//線的粗細lineWidth？字的大小？標點符號全形半形？
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
                            label: 'length',//身高
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
                                    { x: 0, y: 46.3 },
                                    { x: 30, y: 51.1 },
                                    { x: 60, y: 54.7 },
                                    { x: 90, y: 57.6 },
                                    { x: 120, y: 60.0 },
                                    { x: 150, y: 61.9 },
                                    { x: 180, y: 63.6 },
                                    { x: 210, y: 65.1 },
                                    { x: 240, y: 66.5 },
                                    { x: 270, y: 67.7 },
                                    { x: 300, y: 69.0 },
                                    { x: 330, y: 70.2 },
                                    { x: 360, y: 71.3 },
                                    { x: 390, y: 72.3 },
                                    { x: 420, y: 73.3 },
                                    { x: 450, y: 74.2 },
                                    { x: 480, y: 75.1 },
                                    { x: 510, y: 76.0 },
                                    { x: 540, y: 76.8 },
                                    { x: 570, y: 77.7 },
                                    { x: 600, y: 78.4 },
                                    { x: 630, y: 79.2 },
                                    { x: 660, y: 80.5 },
                                    { x: 690, y: 81.3 },
                                    { x: 720, y: 82.1 },
                                ],

                            label: 'length',//身高
                            config: {
                                lineWidth: 2.5,
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
                                    { x: 0, y: 53.4 },
                                    { x: 30, y: 58.4 },
                                    { x: 60, y: 62.2 },
                                    { x: 90, y: 65.3 },
                                    { x: 120, y: 67.8 },
                                    { x: 150, y: 69.9 },
                                    { x: 180, y: 71.6 },
                                    { x: 210, y: 73.2 },
                                    { x: 240, y: 74.7 },
                                    { x: 270, y: 76.2 },
                                    { x: 300, y: 77.6 },
                                    { x: 330, y: 78.9 },
                                    { x: 360, y: 80.2 },
                                    { x: 390, y: 81.5 },
                                    { x: 420, y: 82.7 },
                                    { x: 450, y: 83.9 },
                                    { x: 480, y: 85.1 },
                                    { x: 510, y: 86.2 },
                                    { x: 540, y: 87.3 },
                                    { x: 570, y: 88.4 },
                                    { x: 600, y: 89.5 },
                                    { x: 630, y: 90.5 },
                                    { x: 660, y: 91.6 },
                                    { x: 690, y: 92.6 },
                                    { x: 720, y: 93.6 },
                                ],
                            label: 'boy97',
                            config: {
                                lineWidth: 2.5,
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
                }, data2: {
                    $set: {
                        dataSets: [{
                            values: this._WeightYValues(),
                            label: 'boy3',//體重
                            config: {
                                lineWidth: 1,
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
                                    { x: 0, y: 2.5 },
                                    { x: 30, y: 3.4 },
                                    { x: 60, y: 4.4 },
                                    { x: 90, y: 5.1 },
                                    { x: 120, y: 5.6 },
                                    { x: 150, y: 6.1 },
                                    { x: 180, y: 6.4 },
                                    { x: 210, y: 6.7 },
                                    { x: 240, y: 7.0 },
                                    { x: 270, y: 7.2 },
                                    { x: 300, y: 7.5 },
                                    { x: 330, y: 7.7 },
                                    { x: 360, y: 7.8 },
                                    { x: 390, y: 8.0 },
                                    { x: 420, y: 8.2 },
                                    { x: 450, y: 8.4 },
                                    { x: 480, y: 8.5 },
                                    { x: 510, y: 8.7 },
                                    { x: 540, y: 8.9 },
                                    { x: 570, y: 9.0 },
                                    { x: 600, y: 9.2 },
                                    { x: 630, y: 9.3 },
                                    { x: 660, y: 9.5 },
                                    { x: 690, y: 9.7 },
                                    { x: 720, y: 9.8 },
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
                                    { x: 0, y: 4.3 },
                                    { x: 30, y: 5.7 },
                                    { x: 60, y: 7.0 },
                                    { x: 90, y: 7.9 },
                                    { x: 120, y: 8.6 },
                                    { x: 150, y: 9.2 },
                                    { x: 180, y: 9.7 },
                                    { x: 210, y: 10.2 },
                                    { x: 240, y: 10.5 },
                                    { x: 270, y: 10.9 },
                                    { x: 300, y: 11.2 },
                                    { x: 330, y: 11.5 },
                                    { x: 360, y: 11.8 },
                                    { x: 390, y: 12.1 },
                                    { x: 420, y: 12.4 },
                                    { x: 450, y: 12.7 },
                                    { x: 480, y: 12.9 },
                                    { x: 510, y: 13.2 },
                                    { x: 540, y: 13.5 },
                                    { x: 570, y: 13.7 },
                                    { x: 600, y: 14.0 },
                                    { x: 630, y: 14.3 },
                                    { x: 660, y: 14.5 },
                                    { x: 690, y: 14.8 },
                                    { x: 720, y: 15.1 },
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
                }, data3: {
                    $set: {
                        dataSets: [{
                            values: this._HeadYValues(),
                            label: 'boy3',//頭圍
                            config: {
                                lineWidth: 1,
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
                                    { x: 0, y: 32.1 },
                                    { x: 30, y: 35.1 },
                                    { x: 60, y: 36.9 },
                                    { x: 90, y: 38.3 },
                                    { x: 120, y: 39.4 },
                                    { x: 150, y: 40.3 },
                                    { x: 180, y: 41.0 },
                                    { x: 210, y: 41.7 },
                                    { x: 240, y: 42.2 },
                                    { x: 270, y: 42.6 },
                                    { x: 300, y: 43.0 },
                                    { x: 330, y: 43.4 },
                                    { x: 360, y: 43.6 },
                                    { x: 390, y: 43.9 },
                                    { x: 420, y: 44.1 },
                                    { x: 450, y: 44.3 },
                                    { x: 480, y: 44.5 },
                                    { x: 510, y: 44.7 },
                                    { x: 540, y: 44.9 },
                                    { x: 570, y: 45.0 },
                                    { x: 600, y: 45.2 },
                                    { x: 630, y: 45.3 },
                                    { x: 660, y: 45.4 },
                                    { x: 690, y: 45.6 },
                                    { x: 720, y: 45.7 },
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
                                    { x: 0, y: 36.9 },
                                    { x: 30, y: 39.5 },
                                    { x: 60, y: 41.3 },
                                    { x: 90, y: 42.7 },
                                    { x: 120, y: 43.9 },
                                    { x: 150, y: 44.8 },
                                    { x: 180, y: 45.6 },
                                    { x: 210, y: 46.3 },
                                    { x: 240, y: 46.9 },
                                    { x: 270, y: 47.4 },
                                    { x: 300, y: 47.8 },
                                    { x: 330, y: 48.2 },
                                    { x: 360, y: 48.5 },
                                    { x: 390, y: 48.8 },
                                    { x: 420, y: 49.0 },
                                    { x: 450, y: 49.3 },
                                    { x: 480, y: 49.5 },
                                    { x: 510, y: 49.7 },
                                    { x: 540, y: 49.9 },
                                    { x: 570, y: 50.0 },
                                    { x: 600, y: 50.2 },
                                    { x: 630, y: 50.4 },
                                    { x: 660, y: 50.5 },
                                    { x: 690, y: 50.7 },
                                    { x: 720, y: 50.8 },
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
            var birth = new Date(this.props.birth)
            //console.log('bdbd', this.props.birthday)
            var xValue = this.Getdate(birth, record);
            if (xValue.AllDays > 730) {
                //console.log('abxd',xValue.AllDays);
                return;
            }
            var head = parseInt(this.props.growthData[count].HeadCircumference, 10);
            return { y: head, x: xValue.AllDays };
        });
    }

    Getdate(bd, rd) {
        var allDay = Math.floor((rd.getTime() - bd.getTime()) / 1000 / 60 / 60 / 24); // 取得所有天數
        //console.log('allday', allDay)
        return { AllDays: allDay };

    }

    render() {
        var data = this.props.growthData;
        //console.log('a', data)
        var arrayLength = this.props.growthData.length;
        for (var i = 0; i < arrayLength; i++) {
            data[i].Height;
            //console.log('0', data[0].Height)
        }

        //標點符號半形全形？
        return (

            <Container>
                <Header style={{ backgroundColor: "#00a3af" }} hasTabs>
                <Left style={{ flex: 1.4 }}>
                    <Button transparent onPress={() => Actions.home()}>
                        <Icon name='md-home' style={{ color: "#ffffff" }} />
                    </Button>
                </Left>
                <Body flexDirection='row' style={{ flex: 1 }}>
                    <Text style={styles.headertitle} >
                        日常紀錄
                </Text>
                </Body>
                <Right style={{ flex: 1 }}/>
            </Header>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text> ０－２歲百分位</Text>
                    </View>
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
                            legend={{ enabled: false }}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}
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
                            legend={{ enabled: false }}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}
                        />
                    </View>
                    <View style={styles.container}>
                        <View>
                            <Text> 頭圍（公分）</Text>
                        </View>
                        <LineChart
                            style={styles.chart}
                            data={this.state.data3}
                            chartDescription={{ text: '' }}
                            xAxis={this.state.xAxis}
                            yAxis={this.state.yAxis}
                            legend={{ enabled: false }}
                            chartDescription={{ text: '天' }}
                            touchEnabled={false}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            I am bold
                            <Text style={{ color: 'red' }}>
                                and red
                                 </Text>
                        </Text>
                        <Text> ０－２歲生長百分位，綠線為第９７百分位，紅線為第３百分位</Text>
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


export default boy;