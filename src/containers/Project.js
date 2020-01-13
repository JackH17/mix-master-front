import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { validateUser } from '../actions/userActions';
import { getProject } from '../actions/projectActions';
import { addTask, getTasks } from '../actions/taskActions';

import TaskModal from '../components/TaskModal';
import Tasks from '../components/Tasks';

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

    const [myUser, setMyUser] = useState();
    const [myProject, setMyProject] = useState();
    const [myTasks, setMyTasks] = useState();

    useEffect(() => {
        dispatch(getTasks(match.params.id))
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

    return (

       <Container>
           {myProject && myProject.name}
           <TaskModal handleCreateNewTask={handleCreateNewTask}/>
           <Tasks myTasks={myTasks}/>
       </Container>
    )
};
export default Project;
