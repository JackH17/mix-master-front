import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Projects = ({currentUserProjects, myProjects, handleDeleteProject}) => {



    const handleDeleteClick = (e) => {
        handleDeleteProject(e.target.value)
    }

    console.log('this is a different comment')

    return (
        <div>
            <Container> 
            {
                currentUserProjects.projects.length === 0 && <p>You dont have any projects!</p>
            }
            <ListGroup>
                <TransitionGroup className="project-list">
                    {myProjects.map(({ _id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Link to={{pathname: `/projects/${_id}`}}>{name}</Link>
                                <Button value={_id}
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={handleDeleteClick}>
                                    &times;
                                </Button>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            </Container> 
        </div>
    )
};

export default Projects;
