import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, ITEMS_LOADING, READ_PROJECT } from '../actions/types';

const initialState = {
    projects: [],
    currentProject: [],
    loading: false
};

export default function(state = initialState, action){

    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(proj => proj._id !== action.payload)
            };
        case READ_PROJECT: 
            return {
                ...state, 
                currentProject: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}