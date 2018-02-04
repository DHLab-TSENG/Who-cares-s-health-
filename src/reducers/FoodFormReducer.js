import {
    FOOD_UPDATE,
    FOOD_CREATE,
    FOOD_SAVE_SUCCESS
} from '../actions/types';



 
    
const INITIAL_STATE = {
    Date: '',
    哺乳: '',
    配方奶: '',
    副食品: '',
    飲食狀況: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  FOOD_UPDATE:
        //action.payload === { prop: 'name', value: 'jane'}
        return { ...state, [action.payload.prop]: action.payload.value}
        case FOOD_CREATE:
        return INITIAL_STATE;
        case FOOD_SAVE_SUCCESS:
            return INITIAL_STATE; 
        default: 
            return state;
    }
};