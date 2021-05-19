
import { Form, Col, Button } from "react-bootstrap";

export default function PaymentForm({amountDue, isDone}){
    
    const handleSubmit = (e) => {
        e.preventDefault();
        isDone(true);
    }

    return (
        <div>
            <Form style={{maxWidth: 600, margin: '10px auto'}} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName"  style={{textAlign: 'left'}}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='fullName' type="text" placeholder="Full Name" defaultValue='Steven Fishbough'/>
                </Form.Group>
    
                <Form.Group controlId="formBasicAmount"  style={{textAlign: 'left'}}>
                    <Form.Label>Amount</Form.Label>
                    {amountDue>0 ? (<Form.Control name='amount' type="number" min={0} value={amountDue} readOnly/>) : (<Form.Control name='amount' type="number" min={0} placeholder="$0.00"/>)}
                </Form.Group>
                        
                <Form.Label>Card Information</Form.Label>
                <Form.Row>
                    <Col>
                        <Form.Control name='cardNum' type="number" min={0} placeholder="Card number" defaultValue='1234123412341234'/>
                    </Col>
                    <Col style={{maxWidth: 150}}>
                        <Form.Control name='cvv' type="number" min={0} placeholder="CVV" defaultValue='123'/>
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
                    <Form.Control name='address' placeholder="1234 Main St" defaultValue='1234 Main St' />
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
        </div>
    )
}