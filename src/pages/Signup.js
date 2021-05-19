import React, {useState} from 'react';
import {Form, Container, Button, Col} from 'react-bootstrap';
import { useAuth } from '../auth_handling/use-auth';
import { Redirect } from 'react-router';
import Home from './Home';

export default function Signup(){
    const auth = useAuth();
    const [emailVal, setEmailVal] = React.useState('');
    const [passwordVal, setPasswordVal] = React.useState('');
    const [accExist, setAccExist] = React.useState(false);
    const [isEmp, setIsEmp] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        var ret = auth.signUp(emailVal, passwordVal, isEmp);        
        if(!ret){
            setAccExist(true);
        }
    
    }

    const handleChange = (e) => {
        var type = e.target.type;
        if(type == 'email'){
            setEmailVal(e.target.value);
        }
        else if(type == 'password'){
            setPasswordVal(e.target.value);
        }
        else if(e.target.name == 'isEmp'){
            setIsEmp(!isEmp);
        }
    }

    return(
        <div>
            {!auth.user ? (
                <div>
                    <h1>Create Account</h1>
                    {accExist ? (<h5 style={{color: 'red', marginTop: '40px'}}>Account already exists</h5>) : (<h1/>)} 
                    <Container style={{maxWidth: 500, border: '1px round rgba(0,0,0,.1)', borderRadius: '5px', margin: '25px auto', padding: '10px 5px'}}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail"  style={{textAlign: 'left'}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={emailVal}/>
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword"  style={{textAlign: 'left'}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChange} value={passwordVal} />
                            </Form.Group>
                            <Form.Row>
                                <Col sm={1}><Form.Check label='Employee' name='isEmp' onChange={handleChange}/></Col>
                            </Form.Row>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                     </Container>
                     <Container style={{height: '40vh'}}/>
                </div>
            ) : 
            (<Home/>)}
        </div>
    )
}