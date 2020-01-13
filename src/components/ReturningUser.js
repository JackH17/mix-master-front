import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const ReturningUser = ({getLoginDetails}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value.trim())
    }

    const handleNewUserSubmit = (e) => {
        e.preventDefault();
        
        const returningUser = {
            email,
            password
        };

        getLoginDetails(returningUser)
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleNewUserSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" placeholder="Email" style={{marginBottom: '1.5rem'}} onChange={handleEmailInputChange} value={email} required/>
                        <Label for="password">Password</Label>
                        <Input type="password" id="name" placeholder="Password" style={{marginBottom: '1.5rem'}} onChange={handlePasswordInputChange} value={password} required/>
                        <Button type="submit" color='dark' style={{marginTop : '2rem'}} block>Log In</Button>
                    </FormGroup>
                </Form>  
            </Container>
        </div>
    )
};

export default ReturningUser;
