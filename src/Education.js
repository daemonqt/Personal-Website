import * as React from "react";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Images
import bnom from "./Pics/educ/bnom.png";
import csnhs from "./Pics/educ/csnhs.png";
import usi from "./Pics/educ/usi.png";
import ncf from "./Pics/educ/ncf.png";
import "./Education.css"

function Education() {
  
    return (
        <Container className="center">
            <Row>
                <h1 style={{color: 'white', textAlign: 'center'}}>EDUCATION</h1>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Row>
                        <h3 style={{color: 'white', textAlign: 'center'}}>PRIMARY</h3>
                    </Row>
                    <Row className="mt-3" style={{alignSelf: 'center', justifyContent: "center"}}>
                        <Image src={bnom} style={{ width: '50%' }}/>
                    </Row>
                    <Row style={{textAlign: 'center', alignSelf: 'center'}}>
                        <h6 className="mt-3" style={{color: "white"}}>Blessed Name of Mary College, Inc.</h6>
                        <h6 style={{color: "white"}}>( 2006 - 2012 )</h6>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3 style={{color: 'white', textAlign: 'center'}}>SECONDARY</h3>
                    </Row>
                    <Row className="mt-3" style={{alignSelf: 'center', justifyContent: "center"}}>
                        <Image src={csnhs} style={{ width: '50%' }}/>
                    </Row>
                    <Row style={{textAlign: 'center', alignSelf: 'center'}}>
                        <h6 className="mt-3" style={{color: "white"}}>Camarines Sur National High School</h6>
                        <h6 style={{color: "white"}}>( 2016 - 2018 )</h6>
                    </Row>
                    <Row style={{alignSelf: 'center', justifyContent: "center"}} className="mt-3">
                        <Image src={usi} style={{ width: '50%' }}/>
                    </Row>
                    <Row style={{textAlign: 'center', alignSelf: 'center'}}>
                        <h6 className="mt-3" style={{color: "white"}}>Unibersidad de Sta. Isabel Pili Campus</h6>
                        <h6 style={{color: "white"}}>( 2012 - 2016 )</h6>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3 style={{color: 'white', textAlign: 'center'}}>TERTIARY</h3>
                    </Row>
                    <Row className="mt-3" style={{alignSelf: 'center', justifyContent: "center"}}>
                        <Image src={ncf} style={{ width: '50%' }}/>
                    </Row>
                    <Row style={{textAlign: 'center', alignSelf: 'center'}}>
                        <h6 className="mt-3" style={{color: "white"}}>Naga College Foundation Inc.</h6>
                        <h6 style={{color: "white"}}>( 2018 - Current )</h6>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}

export default Education;
