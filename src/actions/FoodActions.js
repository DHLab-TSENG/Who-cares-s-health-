import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    FOOD_UPDATE,
    FOOD_CREATE,
    FOODS_FETCH_SUCCESS,
    FOOD_SAVE_SUCCESS
} from './types';

export const foodUpdate = ({ prop, value, state }) => {
    return { 
        type: FOOD_UPDATE,
        payload: { prop, value, state }
    };
};

export const foodCreate = ({ Date, 哺乳, 配方奶, 副食品, 飲食狀況 }) => {
    const { currentUser } = firebase.auth();
    
    return(dispatch) => {
    firebase.database().ref(`/Users/${currentUser.uid}/foods`)
    .push({ Date, 哺乳, 配方奶, 副食品, 飲食狀況  })
    .then(() => {
        dispatch({ type: FOOD_CREATE });
        Actions.tList()
    });
    };
};

export const foodsFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/foods`)
        .on('value', snapshot => {
            dispatch({ type: FOODS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const foodSave = ({ Date, 哺乳, 配方奶, 副食品, 飲食狀況, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/foods/${uid}`)
            .set({ Date, 哺乳, 配方奶, 副食品, 飲食狀況 })
            .then(() => {
                dispatch({ type: FOOD_SAVE_SUCCESS });
                Actions.tList();
            });
    };
 };

 export const foodDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/Users/${currentUser.uid}/foods/${uid}`)
        .remove()
        .then(() => {
            Actions.tList();
        });
    };
 };