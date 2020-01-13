import axios from 'axios';
import API from '../adapters/API';
import { ADD_USER, DELETE_USER, VALIDATE_USER, LOGIN_USER, LOGOUT_USER} from './types';

export const addUser = (user) => dispatch => {

    API.createUser(user).then(res => {

        dispatch({
            type: ADD_USER,
            payload: res
        })   

    }).catch((err) => {
        console.log(err)
    });

};

export const loginUser = (user) => dispatch => {

    API.loginUser(user).then(res => {
        
        dispatch({
            type: LOGIN_USER,
            payload: res
        })

    }).catch((err) => {
        console.log(err)
    })
};

export const logoutUser = (user) => dispatch => {

    API.logoutUser(user).then(res => {
        if(res.status === 200){

            dispatch({
                type: LOGOUT_USER
            })
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const validateUser = () => dispatch => {

    API.validateUser().then(res => {

        dispatch({
            type: VALIDATE_USER,
            payload: res
        })
    }).catch((err) => {
        console.log(err)
    })

};

export const deleteUser = id => dispatch => {
    
    axios.delete(`api/users/${id}`).then(res => {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    })
};