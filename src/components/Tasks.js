import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Tasks = ({ myTasks }) => {



    const handleDeleteClick = (e) => {
        
    }


    return (
        <div>
            <Container> 
            {
                myTasks && myTasks.tasks.length === 0 && <p>You dont have any projects!</p>
            }
            <ListGroup>
                <TransitionGroup className="project-list">
                    {myTasks && myTasks.tasks.length !== 0  && myTasks.tasks.map(({ _id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                {name}
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

export default Tasks;