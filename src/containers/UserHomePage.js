import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Projects from '../components/Projects';
import ProjectModal from '../components/ProjectModal';
import { getProjects, addProject, deleteProject } from '../actions/projectActions';

const UserHomePage = () => {

    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user)
    const currentUserProjects = useSelector((state) => state.project)

    const [myUser, setMyUser] = useState();
    const [myProjects, setMyProjects] = useState(currentUserProjects.projects)

    useEffect(() => {
        setMyUser(currentUser.users)
    }, [currentUser]);



    useEffect(() => {
        const initProjects = dispatch(getProjects())

        setMyProjects(initProjects);
    }, []);


    useEffect(() => {
        setMyProjects(currentUserProjects.projects)
    }, [currentUserProjects]);

    const handleCreateProject = (proj) => {
        dispatch(addProject(proj));
    };

    const handleDeleteProject = (proj) => {
        setMyProjects(myProjects.filter(project => project.id !== proj))
        dispatch(deleteProject(proj));
    }


    return (
        <div>
            {myUser && <h1>{myUser.name}</h1>}
            <ProjectModal handleCreateProject={handleCreateProject}/>
            <Projects currentUserProjects={currentUserProjects} myProjects={myProjects} handleDeleteProject={handleDeleteProject}/>
        </div>
    )
};

export default UserHomePage;
