import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CurrentUserSession = ({myTasks}) => {

    const [taskOne, setTaskOne] = useState();
    const [taskTwo, setTaskTwo] = useState();
    const [taskThree, setTaskThree] = useState();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleNewSessionSubmit = (e) => {
        e.preventDefault();
    }

    const handleTaskOneChange = (e) => {
        setTaskOne(e.target.value);
    }

    return (
        <div>
            <Container>
                <p>current session</p>
                <Form onSubmit={handleNewSessionSubmit}>
                    <FormGroup>
                        <Label for="taskOne">Name</Label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>Task One</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>All Tasks</DropdownItem>
                                    {
                                        myTasks && myTasks.tasks.map((task) => (
                                            <>
                                            <DropdownItem key={task.id} value={taskOne} onChange={handleTaskOneChange}>{task.name}</DropdownItem>
                                            <DropdownItem key={task.id} divider />
                                            </>
                                        ))
                                    }

                                </DropdownMenu>
                            </Dropdown>
                        <Button type="submit" color='dark' style={{marginTop : '2rem'}} block>Begin Session</Button>
                    </FormGroup>
                </Form> 
            </Container>
            
        </div>
    )
};

export default CurrentUserSession;
