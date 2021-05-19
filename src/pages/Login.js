import React, {useState} from 'react'
import {Form, Button, Container, Col} from 'react-bootstrap';
import { Redirect } from 'react-router';
import { useAuth } from '../auth_handling/use-auth';
import Home from './Home';

export default function Login(){
    const auth = useAuth();
    const [emailVal, setEmailVal] = React.useState("");
    const [passwordVal, setPasswordVal] = React.useState("");
    const [isEmp, setIsEmp] = React.useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signIn(emailVal, passwordVal, isEmp);
        
        if(auth.user){
            <Redirect to='/'/>
        }
    }

    return(
        <>
        {!auth.user ? (
            <div>
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

        ) : <Home/>}
        </>


        
    )
}