import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const TaskModal = ({handleCreateNewTask}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    const toggle = () => {
        setIsModalOpen(!isModalOpen)
    };

    const handleInputChange = (e) => {
        setName(e.target.value)
    };

    const handleNewTaskSubmit = (e) => {
        e.preventDefault();

        handleCreateNewTask(name)

        setName('');
        toggle();
    };

    return (
        <Container style={{textAlign: 'center'}}>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={toggle}>New Task</Button>
            <Modal isOpen={isModalOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Task Name</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleNewTaskSubmit}>
                            <FormGroup>
                                <Label for="task">Task Name</Label>
                                <Input type="text" id="task" placeholder="My New Task" onChange={handleInputChange} value={name}/>
                                <Button type="submit" color='dark' style={{marginTop : '2rem'}} block>Create Task</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
            </Modal>
        </Container>
    )
};

export default TaskModal;