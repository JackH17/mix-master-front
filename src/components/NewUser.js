import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const NewUser = ({getSignUpDetails}) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const handleNameInputChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value.trim())
    }

    const handleConfirmPasswordInputChange = (e) => {
        setConfirmPassword(e.target.value.trim())
    }

    const handleNewUserSubmit = (e) => {
        e.preventDefault();
        
        if(password !== confirmPassword){
            window.alert('passwords must match')
            return;
        }

        const newUser = {
            name, 
            email,
            password

        };

        getSignUpDetails(newUser);
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleNewUserSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" placeholder="First Name" style={{marginBottom: '1.5rem'}} onChange={handleNameInputChange} value={name} required/>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" placeholder="Email" style={{marginBottom: '1.5rem'}} onChange={handleEmailInputChange} value={email} required/>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" style={{marginBottom: '1.5rem'}} onChange={handlePasswordInputChange} value={password} required/>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm Password" style={{marginBottom: '1.5rem'}} onChange={handleConfirmPasswordInputChange} value={confirmPassword} required/>
                        <Button type="submit" color='dark' style={{marginTop : '2rem'}} block>NewUser</Button>
                    </FormGroup>
                </Form>  
            </Container>
        </div>
    )
};

export default NewUser;

