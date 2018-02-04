import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    WC_UPDATE,
    WC_CREATE,
    WCS_FETCH_SUCCESS,
    WC_SAVE_SUCCESS
} from './types';

export const wcUpdate = ({ prop, value }) => {
    return {
        type: WC_UPDATE,
        payload: { prop, value}
    };
};

export const wcCreate = ({ Date, 大小便狀況 }) => {
    const { currentUser } = firebase.auth();
    //${currentUser.uid}=b0344244
    
    return (dispatch) => {
    firebase.database().ref(`/Users/${currentUser.uid}/wcs`)
        .push({ Date, 大小便狀況 })
        .then(() => {
            dispatch({ type: WC_CREATE });
            Actions.tList();
        });
    };
};

export const wcsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
    firebase.database().ref(`/Users/${currentUser.uid}/wcs`)
        .on('value', snapshot => {
            dispatch({ type: WCS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const wcSave = ({ Date, 大小便狀況, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/wcs/${uid}`)
            .set({ Date, 大小便狀況 })
            .then(() => {
                dispatch({ type: WC_SAVE_SUCCESS }); 
                Actions.tList();
            });
    };
};

export const wcDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/Users/${currentUser.uid}/wcs/${uid}`)
        .remove()
        .then(() => {
            Actions.tList({ type: 'reset'});
        });
    };
};

