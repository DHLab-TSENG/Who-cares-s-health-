import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    HEIGHT_UPDATE,
    HEIGHT_CREATE,
    HEIGHTS_FETCH_SUCCESS,
    HEIGHT_SAVE_SUCCESS
} from './types';

export const heightUpdate = ({ prop, value }) => {
    return {
        type: HEIGHT_UPDATE,
        payload: { prop, value}
    };
};

//Date, Height, Weight, HeadCircumference

export const heightCreate = ({ Date, Height, Weight, HeadCircumference }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/Users/${currentUser.uid}/growths`)
    .push({ Date, Height, Weight, HeadCircumference })
    .then(() => {
        dispatch({ type: HEIGHT_CREATE });
        Actions.tList();
    });
    };
};

export const heightsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/growths`)
        .on('value', snapshot => {
            dispatch({ type: HEIGHTS_FETCH_SUCCESS, payload: snapshot.val() });
            
        });
        console.log("生長紀錄")
    };
};

export const heightSave = ({ Date, Height, Weight, HeadCircumference, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/growths/${uid}`)
            .set({ Date, Height, Weight, HeadCircumference })
            .then(() => {
                dispatch({ type: HEIGHT_SAVE_SUCCESS });
                Actions.tList();
            });
    };
};

export const heightDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/Users/${currentUser.uid}/growths/${uid}`)
        .remove()
        .then(() => {
            Actions.tList();
        });
    };
 };