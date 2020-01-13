import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../actions/userActions';
import UserHomePage from '../containers/UserHomePage';

const Home = () => {

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
        setMyUser(currentUser)

        if(currentUser.users.length === 0){
            currentUser.users.tokens = '';
            startUpChecks();
        }
    }, [currentUser]);

    const handleUser = () => (
        myUser.users.error ?  <Redirect to="/" /> : <UserHomePage />
    );


    return (
        <div>
            {myUser && myUser.users.length !== 0 && handleUser()}
        </div>
    )
};

export default Home;
