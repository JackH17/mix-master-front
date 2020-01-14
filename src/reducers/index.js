import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import userReducer from './userReducer';
import taskReducer from './taskReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
    project: projectReducer,
    user: userReducer,
    task: taskReducer,
    session: sessionReducer
})