import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/img/footer-logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";
function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/ali-agpak-003472208/'><img src={navIcon1}/></a>
                        <a href=''><img src={navIcon2}/></a>
                        <a href=''><img src={navIcon3}/></a>
                    </div>
                    <p>Copyright 2023, All right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer