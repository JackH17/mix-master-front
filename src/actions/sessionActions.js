import API from '../adapters/API';
import { CREATE_SESSION, GET_SESSIONS} from '../actions/types';

export const createSession = project => dispatch => {
    
    API.createSession(project)
    // API.createTask(task).then(res => {
        
    //     dispatch({
    //         type: ADD_TASK,
    //         payload: res.task
    //     })

    // }).catch((err) => {
    //     console.log(err)
    // })
};

export const getSessions = (id) => dispatch => {

    API.getSessions().then(res => {
        
        dispatch({
            type: GET_SESSIONS,
            payload: res.filter(session => session.project === id)
        })
    }).catch((err) => {
        console.log(err)
    })
}