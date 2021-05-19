import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import Home from './Home';

export default function Donate(){
    const [email, setEmail] = React.useState('');
    const [fullName, setFullName] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [cardNum, setCardNum] = React.useState('')
    const [cvv, setCvv] = React.useState('')
    const [exMonth, setExMonth] = React.useState('')
    const [exYear, setExYear] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [cityname, setCityname] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [isComplete, setIsComplete] = React.useState(false);
    const [goHome, setGoHome] = React.useState(false);

    const handleChange = (e) => {
        var name = e.target.name;
        var val = e.target.val;
        switch(name){
            case 'email':
                setEmail(val);
                break;
            case 'fullName':
                break;
            case 'amount':
                break;
            case 'cardNum':
                break;
            case 'cvv':
                break;
            case 'exMonth':
                break;
            case 'exYear':
                break;
            case 'address':
                break;
            case 'cityname':
                break;
            case 'zip':
                break;
        
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setIsComplete(true);
    }

    const makeNewPayment = () => {
        <Redirect to='/donate'/>
    }

    return(
        <div style={{height: '100vh'}}>
            {goHome ? (<Home/>) : 
            (   
                <div>
                {isComplete ? (
                    <div>
                        <h1 style={{marginTop: 100}}>Thank you for your donation.</h1>
                        <Button onClick={() => setIsComplete(false)} style={{marginRight: 30, marginTop: 100}}>Make another donation</Button>
                        <Button onClick={() => setGoHome(true)} style={{marginRight: 30, marginTop: 100}}>Go Home</Button>
                    </div>
                ) : 
                (            <Container style={{marginTop: 50}}>
                    <h1>Make a Donation Today!</h1>
                    <h3>
                        Your help will make sure we can keep serving the best community out there.<br/>
                        The donation you make now will go towards new and exciting events to bring<br/>
                        the people of this community together.
                    </h3>
    
                    <Form style={{maxWidth: '600px', border: '1px solid gray', borderRadius: 5, padding: '5px 15px', margin: '100px auto'}} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail"  style={{textAlign: 'left'}}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} value={email}/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicName"  style={{textAlign: 'left'}}>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='fullName' type="text" placeholder="Full Name"/>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicAmount"  style={{textAlign: 'left'}}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control name='amount' type="number" min={0} placeholder="$0.00"/>
                        </Form.Group>
                        
                        <Form.Label>Card Information</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control name='cardNum' type="number" min={0} placeholder="Card number"/>
                            </Col>
                            <Col style={{maxWidth: 150}}>
                                <Form.Control name='cvv' type="number" min={0} placeholder="CVV"/>
                            </Col>
                        </Form.Row>
    
                        <Form.Row style={{float: 'left', marginTop: 10}}>
                            <Col>
                                <Form.Control name='exMonth' as="select" custom style={{maxWidth: 175}}>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control name='exYear' as="select" custom>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                        <option>2031</option>
                                        <option>2032</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
    
                        <Form.Group controlId="formGridAddress1" style={{marginTop: 100}}>
                            <Form.Label style={{textAlign: 'left'}}>Address</Form.Label>
                            <Form.Control name='address' placeholder="1234 Main St" />
                        </Form.Group>
    
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name='city' placeholder='city' />
                            </Form.Group>
    
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control name='state' as="select">
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>
    
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control name='zip' placeholder='Zip' />
                            </Form.Group>
                        </Form.Row>
    
                        <Form.Row style={{marginTop: 20}}>
                            <Col>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                        
                    </Form>
                </Container>)}
                </div>
            )}


        </div>
    )
}