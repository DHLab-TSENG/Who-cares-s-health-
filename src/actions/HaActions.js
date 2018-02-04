import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MYHEALTHBANK_FETCH_SUCCESS
} from './types';

export const myhealthbankFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/myhealthbank/-KxD5NDMBdpm4vOHWNxa/r1`)
        .on('value', snapshot => {
            dispatch({ type: MYHEALTHBANK_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};


