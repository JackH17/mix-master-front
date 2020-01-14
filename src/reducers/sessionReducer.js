import { CREATE_SESSION, GET_SESSIONS } from '../actions/types';

const initialState = {
    sessions: [],
    loading: false
};

export default function(state = initialState, action){

    switch(action.type){
        
        case GET_SESSIONS: 
            return {
                ...state,
                sessions: action.payload
            }
        default: 
            return state;
    }
}