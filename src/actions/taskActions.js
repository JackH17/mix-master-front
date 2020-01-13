import API from '../adapters/API';
import { ADD_TASK, GET_TASKS } from '../actions/types';

export const addTask = task => dispatch => {
    

    API.createTask(task).then(res => {
        
        dispatch({
            type: ADD_TASK,
            payload: res.task
        })

    }).catch((err) => {
        console.log(err)
    })
};

export const getTasks = (project) => dispatch => {

    API.getTasks().then(res => {

        dispatch({
            type: GET_TASKS,
            payload: res.filter(task => task.project === project)
        })
        
    }).catch((err) => {
        console.log(err)
    });
}