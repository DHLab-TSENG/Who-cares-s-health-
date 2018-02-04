// React Native Components
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
// LogIn and LogOut
import LoginForm from './components/LoginForm';
import NewLogin from './components/NewLogin';
// Home Page
import Home from './Home';
// Record Food
import FoodList from './components/FoodList';
import FoodCreate from './components/FoodCreate';
import FoodEdit from './components/FoodEdit';
// Record Height
import HeightCreate from './components/HeightCreate';
import HeightList from './components/HeightList';
import HeightEdit from './components/HeightEdit';
import girl from './components/girl';
import boy from './components/boy';
// Record Growth
import WcCreate from './components/WcCreate';
import WcList from './components/WcList';
import WcEdit from './components/WcEdit';
// Show Record
import TList from './components/TList';
import List from './components/List';
//健康存摺下載
import WbList from './components/WbList';
//健康存摺首頁
import HealthCare from './components/HealthCare';
import HospitalList from './components/HospitalList';
//就醫紀錄資訊
import HaList from './components/HaList';
//檢驗結果
import HbList from './components/HbList';
//疫苗衛教
import HcList from './components/HcList';
//預防接種疫苗紀錄
import HdList from './components/HdList';
//各疫苗衛教
import HList_B from './components/HList_B';
import HList_BCG from './components/HList_BCG';
import HList_IPV from './components/HList_IPV';
import HList_PCV from './components/HList_PCV';
import HList_V from './components/HList_V';
import HList_MMR from './components/HList_MMR';
import HList_JEV from './components/HList_JEV';
import HList_I from './components/HList_I';
import HList_A from './components/HList_A';
import HRecordCreate from './components/HRecordCreate';
import HRecordList from './components/HRecordList';
import AbcList from './components/AbcList';
// Album 
import Photo from './Album/Photo';
import PhotoAlbum from './Album/PhotoAlbum';
import PhotoEdit from './Album/PhotoEdit';
import PhotoPro from './Album/PhotoPro';
import PhotoTag from './Album/PhotoTag';
//找醫院
import HosHome from './Hospital/HosHome';
import GetData from './Hospital/GetData';
import Find from './Hospital/Find';
import About from './Hospital/About';
import Section from './Hospital/Section';
import Self from './Hospital/Self';
import PostsList from './Hospital/PostsList';


// 統一背景色白色
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        backgroundColor: 'white'
    };
    return style;
};

const RouterComponent = () => {
    return (
        <Router hideNavBar="true" getSceneStyle={getSceneStyle}>
            <Scene key="root" hideNavBar="true">
                <Scene key="login" hideNavBar='true' component={LoginForm} title="登入" initial='true' />
                <Scene key="newlogin" hideNavBar='true' component={NewLogin} title="新增" />
                <Scene key="home" hideNavBar="true" title="主畫面" component={Home} />
                <Scene key="tList" component={TList} title="日常紀錄" />
                <Scene key="List" component={List} title="編輯紀錄" />
                <Scene key="foodList" component={FoodList} title="飲食紀錄" />
                <Scene key="foodCreate" component={FoodCreate} title="編輯飲食紀錄" />

                <Scene key="foodEdit" component={FoodEdit} title="Edit Food" />
               
                <Scene key="photopro" hideNavBar="true" title="相簿" component={PhotoPro} />
                <Scene key="photoalbum" hideNavBar="true" title="相簿頁" component={PhotoAlbum} />
                <Scene key="photo" hideNavBar="true" title="相片" component={Photo} />
                <Scene key="phototag" hideNavBar="true" title="標籤" component={PhotoTag} />
                <Scene key="photoedit" hideNavBar="true" title="編輯相片" component={PhotoEdit} />
                

                <Scene key="heightCreate" component={HeightCreate} title="成長記錄" />
                <Scene key="heightList" component={HeightList} title="成長總覽" />
                <Scene key="heightEdit" component={HeightEdit} title="成長編輯" />

                <Scene key="girl"   component={girl} title="生長曲線" />
                <Scene key="boy"   component={boy} title="生長曲線" /> 

                <Scene key="wcCreate" component={WcCreate} title="大小便紀錄" />
                <Scene key="wcList" component={WcList} title="大小便總覽" />
                <Scene key="wcEdit" component={WcEdit} title="大小便編輯" />

                <Scene key="healthCare" component={HealthCare} title="健康存摺" />
                <Scene key="hospitalList" component={HospitalList} title="就醫紀錄" />
                <Scene key="haList" component={HaList} title="hh紀錄" />
                <Scene key="hbList" component={HbList} title="hb紀錄" />
                <Scene key="hcList" component={HcList} title="疫苗衛教" />
                <Scene key="hdList" component={HdList} title="hd紀錄" />
                <Scene key="wbList" component={WbList} title="健康存摺下載" />

                <Scene key="hList_B" component={HList_B} title="Ｂ型肝炎疫苗" />
                <Scene key="hList_BCG" component={HList_BCG} title="卡介苗" />
                <Scene key="hList_IPV" component={HList_IPV} title="五合一疫苗" />
                <Scene key="hList_PCV" component={HList_PCV} title="結合型肺炎鏈球菌疫苗" />
                <Scene key="hList_V" component={HList_V} title="水痘疫苗" />
                <Scene key="hList_MMR" component={HList_MMR} title="麻疹腮腺炎德國麻疹混合疫苗" />
                <Scene key="hList_JEV" component={HList_JEV} title="日本腦炎疫苗" />
                <Scene key="hList_I" component={HList_I} title="流感疫苗" />
                <Scene key="hList_A" component={HList_A} title="A型肝炎疫苗" />


                <Scene key="hRecordCreate" component={HRecordCreate} title="hr紀錄" />
                <Scene key="hRecordList" component={HRecordList} title="就診紀錄" />
                <Scene key="abcList" component={AbcList} title="ABC紀錄" />

                <Scene key="hoshome" component={HosHome} title="醫療機構" />
                <Scene key="getdata" component={GetData} title="取得資料" /> 
                <Scene key="postslist" component={PostsList} title="醫院清單" /> 
                <Scene key="about" component={About} title="公費疫苗" /> 
                <Scene key="self" component={Self} title="自費疫苗" /> 
                <Scene key="find" component={Find} title="找醫院" /> 
                <Scene key="section" component={Section} title="科別" /> 
                 
            </Scene>
        </Router>
    );
};

export default RouterComponent;
