import {
  HOSPITALS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOSPITALS_FETCH_SUCCESS:
            console.log('method: ',action.payload);
            return action.payload;
        default:
            return state;    
    }
};