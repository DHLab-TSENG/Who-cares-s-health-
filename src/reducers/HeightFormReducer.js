import {
    HEIGHT_UPDATE,
    HEIGHT_CREATE,
    HEIGHT_SAVE_SUCCESS
} from '../actions/types';



const INITIAL_STATE = {
   Date: '',
   Height: '',
    Weight: '',
    HeadCircumference: ''
};

export default ( state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case HEIGHT_UPDATE:
            //action.payload === { prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value };
        case HEIGHT_CREATE:
            return INITIAL_STATE;
        case HEIGHT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};