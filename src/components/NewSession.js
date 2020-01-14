import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';

const NewSession = ({handleCreateNewSession}) => {

    const handleNewSessionSubmit = (e) => {
        e.preventDefault();

        handleCreateNewSession()
    };

    return (
        <Container style={{textAlign: 'center'}}>
            <Button color="dark" style={{marginTop: '1rem', marginBottom: '2rem'}} onClick={handleNewSessionSubmit}> Create new Mix Session</Button>
        </Container>
    )
};

export default NewSession;