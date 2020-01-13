import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const ProjectModal = ({handleCreateProject}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    const toggle = () => {
        setIsModalOpen(!isModalOpen)
    };

    const handleInputChange = (e) => {
        setName(e.target.value)
    };

    const handleNewProjectSubmit = (e) => {
        e.preventDefault();

        const newProject = {
            name: name
        };

        handleCreateProject(newProject)

        setName('');
        toggle();
    };

    return (
        <Container style={{textAlign: 'center'}}>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={toggle}>New Project</Button>
            <Modal isOpen={isModalOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Project Name</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleNewProjectSubmit}>
                            <FormGroup>
                                <Label for="project">Project Name</Label>
                                <Input type="text" id="project" placeholder="My New Project" onChange={handleInputChange} value={name}/>
                                <Button type="submit" color='dark' style={{marginTop : '2rem'}} block>Create Project</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
            </Modal>
        </Container>
    )
};

export default ProjectModal;
