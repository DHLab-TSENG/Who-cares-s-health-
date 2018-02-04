import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MAPHOS_FETCH_SUCCESS,
} from './types';

export const MapHosFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref('hospital/')
        .on('value', snapshot => {
            dispatch({ type: MAPHOS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
