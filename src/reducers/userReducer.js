import { VALIDATE_USER, ADD_USER, DELETE_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
    users: []
};

export default function(state = initialState, action){

    switch(action.type){
        case VALIDATE_USER:
            return {
                ...state,
                users: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.projects.filter(proj => proj._id !== action.payload)
            };
        case LOGIN_USER:
            return {
                ...state, 
                users: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                users: []
            }
        case ADD_USER:
            return {
                ...state,
                users: action.payload
            };
        default: 
            return state;
    }
}