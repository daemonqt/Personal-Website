import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
//Routes
import './App.css';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <div className="app-container" fluid>
      <div className="background-layer"fluid></div>
      <Router>

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/home"} className="text-decoration-none text-white">DAEMON</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white">Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white">About</Nav.Link>
              <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white">Education</Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container fluid>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </Col>
        </Container>
      </Router>
    </div>
  );
}

export default App;