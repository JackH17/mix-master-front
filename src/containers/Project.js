import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { validateUser } from '../actions/userActions';
import { getProject } from '../actions/projectActions';
import { addTask, getTasks } from '../actions/taskActions';
import { createSession, getSessions } from '../actions/sessionActions';

import TaskModal from '../components/TaskModal';
import Tasks from '../components/Tasks';
import NewSession from '../components/NewSession';
import CurrentUserSession from '../components/CurrentUserSession';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Project = ({match}) => {
    

    const dispatch = useDispatch()

    const startUpChecks = async () => {
        dispatch(validateUser())
    }

    // be careful about adding the user here because it will keep you logged in.

    useEffect(() => {
        startUpChecks();
    }, [])

    const currentUser = useSelector((state) => state.user)
    const currentProject = useSelector((state) => state.project.currentProject)
    const currentTasks = useSelector((state) => state.task)
    const currentSession = useSelector((state) => state.session)

    const [myUser, setMyUser] = useState();
    const [myProject, setMyProject] = useState();
    const [myTasks, setMyTasks] = useState();
    const [mySession, setMySession] = useState();

    useEffect(() => {
        dispatch(getTasks(match.params.id))
    }, [])

    useEffect(() => {
        dispatch(getSessions(match.params.id))
    }, [])

    useEffect(() => {
        setMyUser(currentUser)
    }, [currentUser]);

    useEffect(() => {
        setMyProject(currentProject)
    }, [currentProject])

    useEffect(() => {
        setMyTasks(currentTasks)
    }, [currentTasks])

    useEffect(() => {
        setMySession(currentSession)
    }, [currentSession])


    useEffect(() => {
        if(myUser && myUser.users.length !== 0){
            dispatch(getProject(match.params.id))
        }
    }, [myUser]);

    const handleCreateNewTask = (task) => {

        const taskObj = {
            name: task,
            projectID: match.params.id
        }
        dispatch(addTask(taskObj))
    }

    const handleCreateNewSession = () => {

        const sessionObj = {
            projectID: match.params.id
        }
        dispatch(createSession(sessionObj))
    }

    return (

       <Container>
           {myProject && myProject.name}
           <TaskModal handleCreateNewTask={handleCreateNewTask}/>
           <Tasks myTasks={myTasks} />
           {currentSession && mySession && mySession.sessions.length === 0 && <NewSession handleCreateNewSession={handleCreateNewSession}/>}
           {currentSession && mySession && mySession.sessions.length !== 0 && <CurrentUserSession myTasks={myTasks}/>}
       </Container>
    )
};
export default Project;
