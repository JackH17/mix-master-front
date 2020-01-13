import axios from 'axios';
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, ITEMS_LOADING, READ_PROJECT } from './types';
import API from '../adapters/API';

export const getProjects = () => dispatch => {

    dispatch(setItemsLoading());

    API.getProjects().then(res => {
        
        dispatch({
            type: GET_PROJECTS,
            payload: res
        })

    }).catch((err) => {
        console.log(err)
    })

};

export const addProject = project => dispatch => {
    
    API.createProject(project).then(res => {
        dispatch({
            type: ADD_PROJECT,
            payload: res.project
        })
    }).catch((err) => {
        console.log(err)
    })

};

export const getProject = project => dispatch => {

    API.getProject(project).then(res => {
        dispatch({
            type: READ_PROJECT,
            payload: res
        })
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteProject = id => dispatch => {
    

    API.deleteProject(id).then(res =>{

        dispatch({
            type: DELETE_PROJECT,
            payload: res._id
        })
    }).catch((err) => {
        console.log(err)
    })
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}