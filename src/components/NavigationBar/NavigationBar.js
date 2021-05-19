import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavigationBar.css'
import { useAuth } from '../../auth_handling/use-auth'

//SOme helpful stuff
/**
 * <NavDropdown.Divider />
 * <NavDropdown.Item id='links' as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
 * 
 */

export default function NavigationBar(){
    const auth = useAuth();

    return(
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand id='brand' as={Link} to="/">
                        <img id='brandImg' style={{width:75}} src={logo} alt='Logo Icon'/>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link id='links' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link id='links' as={Link} to="/about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item id='dropDownLink' as={Link} to="/services/classes">Classes</NavDropdown.Item>
                            <NavDropdown.Item id='dropDownLink' as={Link} to="/services/catering">Catering</NavDropdown.Item>
                            <NavDropdown.Item id='dropDownLink' as={Link} to="/services/shuttle">Shuttle</NavDropdown.Item>
                            <NavDropdown.Item id='dropDownLink' as={Link} to="/services/equipment-rental">Equipment Rental</NavDropdown.Item>
                            <NavDropdown.Item id='dropDownLink' as={Link} to="/services/home-care">Home Care</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        {auth.user ? (
                            <Nav>
                                <Nav.Link id='links' as={Link} to="/donate">Donate</Nav.Link>
                                <Nav.Link id='links' as={Link} to="/signout">Sign Out</Nav.Link>
                                {auth.isUserEmp && <Nav.Link id='links' as={Link} to='/account'>Account</Nav.Link>}
                            </Nav>
                            ) : (
                                <Nav>
                                    <Nav.Link id='links' as={Link} to="/donate">Donate</Nav.Link>
                                    <Nav.Link id='links' as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link id='links' as={Link} to="/signup">Sign Up</Nav.Link> 
                                </Nav>      
                            )}
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </div>
    )
}