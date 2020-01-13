import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

const AppNavbar = (props) => {


   const [isOpen, setIsOpen] = useState(false)
   const dispatch = useDispatch()

   const toggle = () => {
    setIsOpen(!isOpen)
   };

   const currentUser = useSelector((state) => state.user)

   const [myUser, setMyUser] = useState()

   useEffect(() => {
       setMyUser(currentUser.users)
   }, [currentUser]);

   const handleUserLogout = () => {
       const logoutUserObject = currentUser;
       logoutUserObject.tokens = localStorage.token;
       dispatch(logoutUser(logoutUserObject));
   }


    return(
           
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                        <NavbarBrand href="/">Mix-Master</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink >
                                        {myUser && myUser.name}
                                    </NavLink>
                                </NavItem>
                                {myUser &&
                                <NavItem>
                                    <NavLink >
                                        My Projects
                                    </NavLink>
                                </NavItem>
                                }
                                {myUser && 
                                <NavItem>
                                    <NavLink onClick={handleUserLogout}>
                                        Log out
                                    </NavLink>
                                </NavItem>
                                }
                                
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
    )
};

export default AppNavbar;