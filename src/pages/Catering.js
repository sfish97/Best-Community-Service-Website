import React, {useState} from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { useAuth } from "../auth_handling/use-auth"
import PaymentForm from '../components/PaymentForm/PaymentForm';

export default function Catering(){
    const auth = useAuth();
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [paymentCompleted, setPaymentCompleted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormValid(true);
    }

    const reset = () => {
        setIsFormValid(false);
        setPaymentCompleted(false);
    }

    return(
        <div>
            {auth.user ? (
                <div>
                    <h1>Order our Catering Service</h1>
                    <h4>Wheather its for a wedding or a party, we have the best catering service to offer!</h4>

                    <Form style={{maxWidth: 900, margin: '50px auto', padding: '5px 5px'}} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Email:</Form.Label></Col>
                            <Col><Form.Control type='email'/></Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Event Type:</Form.Label></Col>
                            <Col>
                                <Form.Control as='select'>
                                    <option>Wedding</option>
                                    <option>Party</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Location Address:</Form.Label></Col>
                            <Col>
                                <Form.Control type='text' placeholder='123 Main St'/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Date:</Form.Label></Col>
                            <Col sm={1}>
                                <input type='date'/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Time:</Form.Label></Col>
                            <Col sm={1}>
                                <input type='time' min='9:00' max='18:00'/>
                            </Col>
                            <Col sm={3}><Form.Label style={{padding: 5}}>Example: 2:00 PM</Form.Label></Col>
                        </Form.Row>
                        {!isFormValid ? (<Button type='submit'>Submit</Button>) : (<div></div>)}
                    </Form>

                    <div>
                        {isFormValid ? (
                            <div>
                                {paymentCompleted ? (
                                    <div>
                                        <h3>Your payment has been processed. Thank you</h3>
                                        <Button onClick={reset}>Make another request.</Button>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>Card Information</h3>
                                        <PaymentForm amountDue='200' isDone={setPaymentCompleted}/>
                                    </div>
                                )}

                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>


                </div>
            ) : (
                <div>
                    <Redirect to='/login'/>
                </div>
            )}
        </div>
    )
}