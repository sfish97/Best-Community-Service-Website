import React from 'react';
import {Button, Carousel, Container} from 'react-bootstrap';
import logo from '../../logo.svg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic4.jpg';


export default function ControlledCarousel(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    width='100%'
                    height='600'
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption style={{textAlign: 'left'}}>
                    <h1>Join the community. Make a change.</h1>
                    <Button>Sign up</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block"
                width='100%'
                height='600'
                src={pic2}
                alt="Second slide"
                />
                <Container>
                    <Carousel.Caption style={{textAlign: 'left'}}>
                        <h2>A catering service using your favorite local businesses</h2>
                        <Button>Order a Catering Service</Button>
                    </Carousel.Caption>
                </Container>
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block"
                width='100%'
                height='600'
                src={pic3}
                alt="Third slide"
                />
                <Carousel.Caption style={{textAlign: 'left'}}>
                    <h1>Come learn a new skill today</h1>
                    <Button>View Available Classes</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}