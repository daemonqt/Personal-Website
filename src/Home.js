import * as React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import "./Home.css";
import pic1 from "./Pics/Pic1.svg";

function Home() {
  
    return (
        <Container className="center">
            <Row>
                <Col className="image-container">
                    <Image className="home-image" src={pic1} roundedCircle/>
                </Col>
                <Col className="text-container">
                    <h1 className="greeting">Hi There!</h1>
                    <h1 className="greeting">I'M
                        <span className="name"> PAULO LASCANO</span></h1>
                    <p className="description">This is my personal website.</p>
                </Col>
            </Row>
        </Container>
    );

}

export default Home;
