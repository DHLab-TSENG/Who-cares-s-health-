import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    HRECORD_UPDATE,
    HRECORD_CREATE,
    HRECORDS_FETCH_SUCCESS
} from './types';



export const hrecordUpdate = ({ prop, value }) => {
    return {
        type: HRECORD_UPDATE,
        payload: { prop, value }
    };
};

export const hrecordCreate = ({ r1_5, r1_4, r1_9 }) => {
    //const { currentUser } = firebase.auth();


    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/hrecords`)
            .push({ r1_5, r1_4, r1_9 })
            .then(() => {
                dispatch({ type: HRECORD_CREATE });
                Actions.hRecordList({ type: 'reset' })
            });
    };
};

export const hrecordsFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/hrecords`)
        .on('value', snapshot => {
            dispatch({ type: HRECORDS_FETCH_SUCCESS, payload: snapshot.val() });
            console.log('a1', snapshot.val());
        });
    };
};

//https://babyapp-57d3e.firebaseio.com/Users/b0344244/