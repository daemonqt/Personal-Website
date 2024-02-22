import * as React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./About.css";
//about-modals
import one from "./Pics/animated/a1.gif";
import two from "./Pics/animated/a2.gif";
import three from "./Pics/animated/a3.gif";
import four from "./Pics/animated/a4.gif";
//personalinfo
import PI from "./Pics/lascano.png"
//hobby-gaming
import gameone from "./Pics/hobbies/gaming/nnk.png";
import gametwo from "./Pics/hobbies/gaming/ml.png";
import gamethree from "./Pics/hobbies/gaming/mir.png";
import gamexone from "./Pics/hobbies/gaming/g1.png";
import gamextwo from "./Pics/hobbies/gaming/g2.png";
import gamexthree from "./Pics/hobbies/gaming/g3.png";
import gamexfour from "./Pics/hobbies/gaming/g4.png";
import gamexfive from "./Pics/hobbies/gaming/g5.jpg";
import gamexsix from "./Pics/hobbies/gaming/g6.png";
//hobby-photo
import done from "./Pics/hobbies/photoedit/p1.png";
import dtwo from "./Pics/hobbies/photoedit/p2.png";
import dthree from "./Pics/hobbies/photoedit/p3.png";
import dfour from "./Pics/hobbies/photoedit/p4.png";
import dfive from "./Pics/hobbies/photoedit/p5.jpg";
import dsix from "./Pics/hobbies/photoedit/p6.jpg";
import dsev from "./Pics/hobbies/photoedit/p7.png";
//hobby-video
import v1 from "./Pics/hobbies/videdit/v1.mp4";
import v2 from "./Pics/hobbies/videdit/v2.mp4";
import v3 from "./Pics/hobbies/videdit/v3.mp4";
//achievement
import achone from "./Pics/ach1.png";

function PersonalModal(props) {
    return (
        <Modal data-bs-theme='dark'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-decoration-none text-white"
            
        >
            <Modal.Header style={{justifyContent: 'center'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Personal Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Table striped="columns" responsive>
                        <tbody>
                            <tr>
                                <td>Fullname</td>
                                <td>Paulo V. Lascano</td>
                            </tr>
                            <tr>
                                <td>Nickame</td>
                                <td>Pau, Smith</td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td>January 25, 2001</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>23 y/o</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>Filipino</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Zone 1, New San Roque, Pili, Camarines Sur, 4418, Philippines</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <center><Image className='personal-image' src={PI} roundedCircle></Image></center>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function SkillsModal(props) {
    return (
        <Modal data-bs-theme='dark'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-decoration-none text-white"
        >
            <Modal.Header style={{justifyContent: 'center'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                   Skills
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <tbody style={{textAlign: "right"}}>
                        <tr>
                            <td className="col-6 col-md-3">Digital Art</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="success" now={80} label='80%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Photo Editing</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="success" now={80} label='80%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Video Editing</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="success" now={80} label='80%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">MySQL</td>
                            <td className="col-6 col-md-9"><ProgressBar animated now={70} label='70%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Backend Development</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="info" now={45} label='45%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Frontend Development</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="info" now={45} label='45%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">C++</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="warning" now={30} label='30%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Javascript</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="warning" now={30} label='30%'/></td>
                        </tr>
                        <tr>
                            <td className="col-6 col-md-3">Python</td>
                            <td className="col-6 col-md-9"><ProgressBar animated variant="warning" now={30} label='30%'/></td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function HobbiesModal(props) {
    return (
        <Modal data-bs-theme='dark'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-decoration-none text-white"
        >
            <Modal.Header style={{justifyContent: 'center'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Hobbies
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Gaming</Accordion.Header>
                    <Accordion.Body>
                    <Row>
                        <Col>
                            <center>
                                <Image className="game-icon-one" src={gameone}/>
                                <Image className="game-icon-two" src={gametwo}/>
                                <Image className="game-icon-three" src={gamethree}/>
                            </center>
                        </Col>
                        <Col style={{alignSelf: "center"}}>
                            <Carousel fade>
                                <Carousel.Item>
                                    <Image className="gamex-one d-block w-100" src={gamexone}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Mir4</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="gamex-two d-block w-100" src={gamextwo}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Mir4</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="gamex-three d-block w-100" src={gamexthree}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Mir4</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="gamex-four d-block w-100" src={gamexfour}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Ni no kuni: Crossworlds</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="gamex-five d-block w-100" src={gamexfive}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Ni no kuni: Crossworlds</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="gamex-six d-block w-100" src={gamexsix}/>
                                    <Carousel.Caption>
                                    <h5 style={{color: "white"}}>Ni no kuni: Crossworlds</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Creating Digital Arts / Photo Editing</Accordion.Header>
                    <Accordion.Body>
                        <Container fluid>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <Image src={done} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dtwo} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dthree} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dfour} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dfive} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dsix} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image src={dsev} style={{ height: '300px' }}/>
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Video Editing</Accordion.Header>
                    <Accordion.Body>
                    <Container fluid>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <video src={v1} width="750" height="400" controls/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <video src={v2} width="750" height="400" controls/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                             <video src={v3} width="750" height="400" controls/>
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function AchievementsModal(props) {
    return (
        <Modal data-bs-theme='dark'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-decoration-none text-white"
            
        >
            <Modal.Header style={{justifyContent: 'center'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Achievements
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Row style={{alignSelf: 'center'}}>
                            <Image className="ach-one d-block w-100" src={achone} style={{ height: '100%' }}/>
                        </Row>
                        <Row style={{textAlign: 'center', alignSelf: 'center'}}>
                            <h6 style={{color: "white"}}>Microsoft Office Specialist: PowerPoint Associate (Microsoft 365 Apps)</h6>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function About() {
    const [personalModalShow, setPersonalModalShow] = React.useState(false);
    const [skillsModalShow, setSkillsModalShow] = React.useState(false);
    const [hobbiesModalShow, setHobbiesModalShow] = React.useState(false);
    const [achievementsModalShow, setAchievementsModalShow] = React.useState(false);

    return (
        <div>
            <Container className="mt-5" fluid>
                <Row>
                    <h1 style={{color: 'white', textAlign: 'center'}}>ABOUT ME</h1>
                </Row>
                <Row className="mt-5">
                </Row>
                <Row className="mt-5">
                    <Col style={{textAlign: 'center', alignSelf: 'center'}}>
                        <Button variant="outline-info" onClick={() => setPersonalModalShow(true)}>
                        <center><Image className="icon-one" src={one}></Image></center>
                        <h4 className="mt-2" style={{color: 'white'}}>Personal Info</h4>
                        </Button>
                        
                        <PersonalModal
                            show={personalModalShow}
                            onHide={() => setPersonalModalShow(false)}
                        />
                    </Col>
                    <Col style={{textAlign: 'center', alignSelf: 'center'}}>
                        <Button variant="outline-danger" onClick={() => setSkillsModalShow(true)}>
                        <center><Image className="icon-two" src={two}></Image></center>
                        <h1> </h1>
                        <h4 style={{color: 'white'}}>Skills</h4>
                        </Button>
                        <SkillsModal
                            show={skillsModalShow}
                            onHide={() => setSkillsModalShow(false)}
                        />
                    </Col>
                    <Col style={{textAlign: 'center', alignSelf: 'center'}}>
                        <Button variant="outline-warning" onClick={() => setHobbiesModalShow(true)}>
                        <center><Image className="icon-three" src={three}></Image></center>
                        <h1> </h1>
                        <h4 style={{color: 'white'}}>Hobbies</h4>
                        </Button>
                        <HobbiesModal
                            show={hobbiesModalShow}
                            onHide={() => setHobbiesModalShow(false)}
                        />
                    </Col>
                    <Col style={{textAlign: 'center', alignSelf: 'center'}}>
                        <Button variant="outline-success" onClick={() => setAchievementsModalShow(true)}>
                        <center><Image className="icon-four" src={four}></Image></center>
                        <h1> </h1>
                        <h4 style={{color: 'white'}}>Achievements</h4>
                        </Button>
                        <AchievementsModal
                            show={achievementsModalShow}
                            onHide={() => setAchievementsModalShow(false)}
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                </Row>
            </Container>
        </div>
    );

}

export default About;
