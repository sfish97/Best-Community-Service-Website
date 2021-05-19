import React, {useState} from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";
import { useAuth } from "../auth_handling/use-auth"
import PaymentForm from '../components/PaymentForm/PaymentForm';
import Login from "./Login";

export default function EquipmentRental(){
    const auth = useAuth();
    const [redirectToLogin, setRedirectToLogin] = React.useState(false);
    const [isRentalValid, setIsRentalValid] = React.useState(false);
    const [value, setValue] = React.useState(false);

    const handleRedirect = () => {
        setRedirectToLogin(true);
    }

    const handleRentalFormSubmit = (e) => {
        e.preventDefault();
        setIsRentalValid(true);
    }

    const newRequest = () => {
        setValue(false);
        setIsRentalValid(false);
    }
    return(
    
        <div>

            {redirectToLogin ? (
                <Redirect to='/login'/>
            ) : (
            <div> 
                {auth.user ? (
                    <div>
                        <h1>Equipment Rental Form</h1>
                        <p>Here, you can make a request for rental equipment. All items shown are available to registered users only.</p>

                        <Form style={{maxWidth: 600, margin: 'auto'}} onSubmit={handleRentalFormSubmit}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Item</Form.Label>
                                <Col sm={10}>
                                    <Form.Control as='select'>
                                        <option value='tables'>Tables</option>
                                        <option value='chair'>Chairs</option>
                                        <option value='saw'>Saw</option>
                                        <option value='toopack'>Toolpack(Hammer, Screwdrivers, etc..)</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Pickup Date</Form.Label>
                                <Col sm={9}>
                                    <input type='date' style={{marginRight: 840, marginTop: 5}}/>
                                </Col>
                                <Form.Label column sm={3}>Return Date</Form.Label>
                                <Col sm={9}>
                                    <input type='date' style={{marginRight: 840, marginTop: 5}}/>
                                </Col>
                            </Form.Group>
                            {!isRentalValid ? (<Button variant="primary" type="submit">Submit</Button>) : (<div></div>)}
                        </Form>
                        {value ? (
                            <div>
                                <h1>Thanks</h1>
                                <Button onClick={newRequest}>Make new Request</Button>
                            </div>
                            ) : (
                            <div>
                                <h3 style={{marginTop: 50}}>Card Information</h3>
                                {isRentalValid ? (<PaymentForm amountDue={60} isDone={setValue}/>) : (<div></div>)}
                            </div>
                            
                        )}
                        

                    </div>
                ) : (
                    <div>
                        <h3>Sorry, you must have an account to use this form.</h3>
                        <Button onClick={handleRedirect}>Login</Button>
                    </div>
                )}
            </div>)}


        </div>
    )
}