import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MYHEALTHBANKSS_FETCH_SUCCESS
} from './types';

export const myhealthbankssFetch = () => {
    const { currentUser } = firebase.auth();
    //${uid}
    //-KxD5NDMBdpm4vOHWNxa
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/myhealthbank/-KxD5NDMBdpm4vOHWNxa/r6`)
        .on('value', snapshot => {
            dispatch({ type: MYHEALTHBANKSS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};