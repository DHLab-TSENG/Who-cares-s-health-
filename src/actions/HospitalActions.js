import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  
  HOSPITALS_FETCH_SUCCESS
} from './types';


export const hospitalsFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/Users/b0344244/foods`)
        .on('value', snapshot => {
            dispatch({ type: HOSPITALS_FETCH_SUCCESS, payload: snapshot.val() });
        });
       
    };
};