import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    ABC_FETCH_SUCCESS
} from './types';

export const abcFectch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/abc`)
        .on('value', snapshot => {
            dispatch({ type: ABC_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};