import {
    WC_UPDATE,
    WC_CREATE,
    WC_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    Date: '',
    大小便狀況: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WC_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case WC_CREATE:
            return INITIAL_STATE;
        case WC_SAVE_SUCCESS:
            return INITIAL_STATE;
        default: 
            return state;
    }
};