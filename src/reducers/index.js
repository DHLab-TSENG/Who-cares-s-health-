import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FoodFormReducer from './FoodFormReducer';
import FoodReducer from './FoodReducer';
import HeightFormReducer from './HeightFormReducer';
import HeightReducer from './HeightReducer';
import WcFormReducer from './WcFormReducer';
import WcReducer from './WcReducer';
import HospitalReducer from './HospitalReducer';
import HaReducer from './HaReducer';
import HbReducer from './HbReducer';
import HdReducer from './HdReducer';
import HRecordFormReducer from './HRecordFormReducer';
import HRecordReducer from './HRecordReducer';

import AbcReducer from './AbcReducer';

import AlbumReducer from './AlbumReducer';
import MapHosReducer from './MapHosReducer';
import TagsReducer from './TagsReducer';

export default combineReducers({
    auth: AuthReducer,
    foodForm: FoodFormReducer,
    foods: FoodReducer,
    heightForm: HeightFormReducer,
    growths: HeightReducer,
    wcForm: WcFormReducer,
    wcs: WcReducer,
    hospitals: HospitalReducer,
    r1: HaReducer,
    r7: HbReducer,
    r6: HdReducer,
    hrecordForm: HRecordFormReducer,
    hrecords: HRecordReducer,
    abc: AbcReducer,
    babyImg: AlbumReducer,
    hospital:MapHosReducer,
    tag: TagsReducer
});
