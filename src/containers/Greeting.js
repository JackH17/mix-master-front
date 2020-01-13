import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, loginUser } from '../actions/userActions';
import NewUser from '../components/NewUser';
import ReturningUser from '../components/ReturningUser';


const Greeting = () => {

    const linkOptions = ['New to Mix Master? Sign up here', 'Already a member? Login Here'];
    const [newUser, setNewUser] = useState(false);

    const dispatch = useDispatch();

    const handleUserAction = () => {
        console.log('click')
        setNewUser(!newUser)
    };

    const getSignUpDetails = (details) => {
        dispatch(addUser(details))
    }

    const getLoginDetails = (details) => {
        console.log(details)
        dispatch(loginUser(details))
    }

    return (
        <div>
            <p>{newUser ? <h3>Sign up</h3> : <h3>Log In</h3>}</p>
            {newUser ? <NewUser getSignUpDetails={getSignUpDetails}/> : <ReturningUser getLoginDetails={getLoginDetails}/>}
            <p onClick={handleUserAction}>{newUser ? linkOptions[1] : linkOptions[0]}</p>  
        </div>
    )
};

export default Greeting;
