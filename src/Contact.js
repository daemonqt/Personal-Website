import * as React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Email from './Pics/contact/gmail.png';
import Fb from './Pics/contact/fb.png';
import Twit from './Pics/contact/twit.png';
import Phone from './Pics/contact/num.png';

function Contact() {
  
    return (
        <div>
            <Container className="mt-5" fluid>
                <Row>
                    <h1 style={{color: 'white', textAlign: 'center'}}>CONTACTS</h1>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex">
                        <Row className="mt-3" style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                            <Image src={Email} style={{ width: '50%' }}/>
                            <h5 className="mt-3" style={{color: "white"}}>Email:</h5>
                            <h6 className="mt-1" style={{color: "white"}}>plascano@gbox.ncf.edu.ph</h6>
                        </Row>
                    </Col>
                    <Col className="d-flex">
                        <Row className="mt-3" style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                            <Image src={Fb} style={{ width: '50%' }}/>
                            <h5 className="mt-3" style={{color: "white"}}>Facebook:</h5>
                            <h6 className="mt-1" style={{color: "white"}}>https://www.facebook.com/PauloLascanoSmith01/</h6>
                        </Row>
                    </Col>
                    <Col className="d-flex">
                        <Row className="mt-3" style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                            <Image src={Twit} style={{ width: '50%' }}/>
                            <h5 className="mt-3" style={{color: "white"}}>Twitter:</h5>
                            <h6 className="mt-1" style={{color: "white"}}>https://www.twitter.com/smith_lascano</h6>
                        </Row>
                    </Col>
                    <Col className="d-flex">
                        <Row className="mt-3" style={{textAlign: 'center', alignSelf: 'center', justifyContent: "center"}}>
                            <Image src={Phone} style={{ width: '50%' }}/>
                            <h5 className="mt-3" style={{color: "white"}}>Phone No.:</h5>
                            <h6 className="mt-1" style={{color: "white"}}>+639369388861</h6>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Contact;
