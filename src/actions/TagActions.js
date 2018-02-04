import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    TAGS_FETCH_SUCCESS,
} from './types';

export const TagsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/tag/#變裝中`)
        .on('value', snapshot => {
            dispatch({ type: TAGS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
