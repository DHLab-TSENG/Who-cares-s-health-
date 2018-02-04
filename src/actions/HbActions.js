import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MYHEALTHBANKS_FETCH_SUCCESS
} from './types';

export const myhealthbanksFetch = () => {
    const { currentUser } = firebase.auth();
    //${uid}
    //-KxD5NDMBdpm4vOHWNxa
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/myhealthbank/-KxD5NDMBdpm4vOHWNxa/r7`)
        .on('value', snapshot => {
            dispatch({ type: MYHEALTHBANKS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
