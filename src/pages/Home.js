import React from 'react'
import './Home.css'
import { Container, Jumbotron, Button, Image, Card, Row, Col, CardGroup, CardDeck } from "react-bootstrap"
import ControlledCarousel from "../components/ControlledCarousel/ControlledCarousel"
import ControlledJumbotron from '../components/JumboTron/ControlledJumbotron';
import pic1 from '../images/picHome1.jpg'
import cardClassPic from '../images/classPic.jpeg'
import cardCateringPic from '../images/cateringPic.jpeg'
import cardShuttlePic from '../images/shuttlePic.jpg'
import cardRoomsPic from '../images/emptyRoom.jpg'
import cardRentalPic from '../images/equipmentPic.jpeg'
import cardNewServicePic from '../images/newServicePic.jpeg'
import {Link} from 'react-router-dom';
import { useAuth } from '../auth_handling/use-auth';

export default function Home(props){
    const auth = useAuth();
    if(props.auth == false){
        auth.signOut();
    }

    return(
        <div>
            <Container>
                <ControlledCarousel/>
            </Container>

            <Container className='mission'>
                <Row>
                    <Col>
                        <h1 style={{textDecoration: 'underline'}}>Our Mission</h1>
                        <h4 style={{textAlign: 'left'}}>
                            We want to bring the best service possible to our community. Our
                            goal is to bring people together to help those in need. With many services possible,
                            we can help whoever and whenever. We strive to make sure that every person has access to 
                            resources that they can't get anywhere else. Our group of volunteers strive to help
                            every person they can. 
                        </h4>
                    </Col>
                    <Col>
                        <Image src={pic1} width='100%' height='300'/>
                    </Col>
                </Row>
            </Container>

            <Container className='services-container'>
                <hr/>
                <h1 id='header'>Available Services</h1>
                <CardDeck>
                    <Card>
                        <Card.Img src={cardClassPic} height='250'></Card.Img>
                        <Card.Title>Need a ride?</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">View Available Class</Card.Link>
                    </Card>

                    <Card>
                        <Card.Img src={cardCateringPic} height='250'></Card.Img>
                        <Card.Title>Need a ride?</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">Order Catering Service</Card.Link>
                    </Card>

                    <Card>
                        <Card.Img src={cardShuttlePic} height='250'></Card.Img>
                        <Card.Title>Need a ride?</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">Request Shuttle Service</Card.Link>
                    </Card>
                </CardDeck>
                <br/>
                <br/>
                <CardDeck>
                    <Card>
                        <Card.Img src={cardRoomsPic} height='250'></Card.Img>
                        <Card.Title>Get a room, just for you.</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">Rent A Room</Card.Link>
                    </Card>

                    <Card>
                        <Card.Img src={cardRentalPic} height='250'></Card.Img>
                        <Card.Title>Rent equipement.</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">Rent Equipment</Card.Link>
                    </Card>

                    <Card>
                        <Card.Img src={cardNewServicePic} height='250'></Card.Img>
                        <Card.Title>Don't have what you want?</Card.Title>
                        <Card.Text>
                            We have classes that can help you in any subject.
                            From trying to pass the GED, to learning a new 
                            language, to even learning a new life skill. Our
                            volunteers can help you learn
                        </Card.Text>
                        <Card.Link id='cardLink' as={Link} to="/about">Contact Us</Card.Link>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}