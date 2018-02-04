import {
    HRECORD_UPDATE,
    HRECORD_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    r1_5: '',
    r1_4: '',
    r1_9: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HRECORD_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case HRECORD_CREATE:
            return INITIAL_STATE;
        default: 
            return state;
    }
};

