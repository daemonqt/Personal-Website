import * as React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Email from './Pics/contact/gmail.png';
import Fb from './Pics/contact/fb.png';
import Twit from './Pics/contact/twit.png';
import Phone from './Pics/contact/num.png';
import Git from './Pics/contact/git.png';

import "./Contact.css"

function Contact() {
  
    return (
        <Container className="center">
            <Row>
                <h1 style={{color: 'white', textAlign: 'center'}}>CONTACTS</h1>
            </Row>
            <Row className="mt-5">
                <Col className="glassmorphism">
                    <Row className="mt-3" style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                        <h4 style={{color: "white"}}><Image src={Git} style={{ width: '50px' }}/> github.com/daemonqt</h4>
                    </Row>
                
                    <Row style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                        <h4 style={{color: "white"}}><Image src={Email} style={{ width: '50px' }}/> plascano@gbox.ncf.edu.ph</h4>
                    </Row>
                
                    <Row style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                        <h4 style={{color: "white"}}><Image src={Fb} style={{ width: '50px' }}/> facebook.com/PauloLascanoSmith01</h4>
                    </Row>
                
                    <Row style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                        <h4 style={{color: "white"}}><Image src={Twit} style={{ width: '50px' }}/> twitter.com/smith_lascano</h4>
                    </Row>
                
                    <Row style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                        <h4 style={{color: "white"}}><Image src={Phone} style={{ width: '50px' }}/> +639369388861</h4>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}

export default Contact;
