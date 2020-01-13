import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../actions/userActions';
import Greeting from '../containers/Greeting';


const Landing = () => {

    const dispatch = useDispatch()

    const startUpChecks = async () => {
        dispatch(validateUser())
    }

    // be careful about adding the user here because it will keep you logged in.

    useEffect(() => {
        startUpChecks();
    }, [])

    const currentUser = useSelector((state) => state.user)

    const [myUser, setMyUser] = useState();

    useEffect(() => {
        console.log(currentUser)
        setMyUser(currentUser)
    }, [currentUser])


    const handleUser = () => (

        myUser.users.error ? <Greeting /> : <Redirect to="/home" />
    );

    return (
        <div>
            <Container>
                {myUser && myUser.users.length !== 0 && handleUser()}
            </Container>
        </div>
    )
};

export default Landing;
