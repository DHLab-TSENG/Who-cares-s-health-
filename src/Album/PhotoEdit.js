import React, { Component } from 'react';
import { Platform, View, Image, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
//另外安裝套件
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Item,
  Input,
  StyleProvider,
  Left,
  Right
} from 'native-base';
import * as firebase from 'firebase';

import RNFetchBlob from 'react-native-fetch-blob';
// import RNSimpleShare from 'react-native-simple-share';
// 圖片選擇套件
import ImagePicker from 'react-native-image-picker';
//import imageToBlob from 'image-to-blob';
//import Camera from 'react-native-camera';
//import Share, { ShareSheet } from 'react-native-share';
import { Scene, Router, Actions } from 'react-native-router-flux';


class PhotoEdit extends Component {

  state = {
    imguri: null,
    imgName: null,
    avatarSource: null,
    videoSource: null
  };

  //點擊選擇照片時
  selectPhotoTapped() {
    const options = {
      title: '請選擇',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '選擇相冊',
      cameraType: 'back',
      mediaType: 'photo',
      durationLimit: 10,
      quality: 0.8,
      maxWidth: 600,
      maxHeight: 600,
      allowsEditing: false,
      noData: false,
      aspectX: 2, 
      aspectY: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    // showImagePicker 彈出選擇相機,相冊框
    // lauchImageLibrary  彈出相冊
    // ImagePicker.launchCamera 彈出相機
    
    ImagePicker.launchCamera(options, (response) => {
      //console.log('selectcamera: ', response);
      if (response.didCancel) {
        //console.log('用戶取消選擇!');
      }
      else if (response.error) {
        //console.log('相片選擇器發生錯誤:', response.error);
      }
      else if (response.customButton) {
        //console.log('自定義按鈕點擊:', response.customButton);
      }
      else {
        //console.log('URI: ', response.uri);
        let source = { uri: response.uri };

        //console.log('response: ', JSON.stringify(response));
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });

    ImagePicker.showImagePicker(options, (response) => {
      // format the image data 
      const image = {
        uri: response.uri,
        type: 'image/jpeg',
        name: 'myImage' + '-' + Date.now() + '.jpg'
      }
      //console.log('Response = ', response);

      if (response.didCancel) {
        //console.log('用戶取消選擇！');  //取消选择的时候，返回
      }
      else if (response.error) {
        //console.log('相片選擇器發生錯誤: ', response.error);
      }
      else if (response.customButton) {
        //console.log('自定義按鈕點擊: ', response.customButton);
      }
      else {
        //If it is ios, remove 'fi;e://' prefix
        let source = { uri: response.uri.replace('file://', ''), isStatic: true }
        //console.log('URI: ', response.uri);
        //let source = { uri: response.uri };
        //create reference to images folder and assing a name to the file that will be uploaded
        // let imageRef = storageRef.child('/img/').child(response.fileName)
        // console.log('response.fileName', response.fileName)
        //console.log('response: ', JSON.stringify(response));
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
          imguri: response.uri,
          imgName: response.fileName
        });

      }
    });
  }


  // 上傳Firebase
  uploadPhotoInput() {
    const uploadPhoto = this.state.avatarSource
    //console.log('uploadPhoto ', uploadPhoto)
    uploadPhoto.addEventListener("change", function () {
      var file = this.files[0];
      var uploadTask = storageRef.child('img/' + file.name).put(file);
      uploadTask.on('state_changed', function (snapshot) {
        // 觀察狀態變化，例如：progress, pause, and resume
        // 取得檔案上傳狀態，並用數字顯示
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            //console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            //console.log('Upload is running');
            break;
        }
      }, function (error) {
        // Handle unsuccessful uploads
      }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        var downloadURL = uploadTask.snapshot.downloadURL;
      });
    }, false);

  }

  render() {

    return (
      <Container>
        <Header style={{ backgroundColor: "#00a3af" }}>
          <Left style={{ flex: 1.7 }}>
            <Button transparent onPress={() => Actions.pop()}>
              <Text style={styles.headerbtntxt}>取消</Text>
            </Button>
          </Left>
          <Body flexDirection='row' style={{ flex: 1 }}>
            <Text style={styles.headertext} justifyContent='center'>
              編輯
            </Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={() => Actions.pop()}>
              <Text style={styles.headerbtntxt}>確定</Text>
            </Button>
          </Right>
        </Header>
        <CardItem style={styles.itemimg}>
            <Image style={styles.img}
              source={this.state.avatarSource}></Image>
        </CardItem>
        <CardItem style={styles.itemaddbtn}>
          <Button transparent onPress={this.selectPhotoTapped.bind(this)} style={styles.addbtn}>
            <Icon name='ios-add-circle-outline' style={{ fontSize: 40, color: '#e6e2e8' }} />
          </Button>
        </CardItem>
        <Content>
        </Content>
      </Container>
    );
  }
}
/**
        <CardItem>
          <Item rounded style={{ height: 150, width: 340 }}>
            <Input
              controlled={true}
              keyboardType="ascii-capable"
              placeholder="寫下心情吧！"
              placeholderTextColor='#95949a'
              style={{ fontSize: 12 }}
              onChangeText={(inputtxt) => { console.log(inputtxt); }}
              value={this.state.inputtxt} />
          </Item>
        </CardItem>
 */

const styles = {
  headertext: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    //fontWeight: "500"
  },
  headerbtntxt: {
    color: "#ffffff",
    fontFamily: "Heiti TC",
    //fontWeight: "500",
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
};


export default PhotoEdit;