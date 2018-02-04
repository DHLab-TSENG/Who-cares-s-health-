import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    ALBUMS_FETCH_SUCCESS,
} from './types';

export const AlbumsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/Users/${currentUser.uid}/babyImg/`)
        .on('value', snapshot => {
            dispatch({ type: ALBUMS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
