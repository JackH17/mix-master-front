import { ADD_TASK, GET_TASKS } from '../actions/types';

const initialState = {
    tasks: [],
    loading: false
};

export default function(state = initialState, action){

    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            };
        case GET_TASKS: 
            return {
                ...state,
                tasks: action.payload
            }
        default: 
            return state;
    }
}