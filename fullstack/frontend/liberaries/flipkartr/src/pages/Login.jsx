import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Otp from '../components/auth/Otp';
import Navbar1 from '../components/navbar/caintainers/Navbar1';

function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Navbar1 />
                    </Col>
                </Row>

                <br />
                <Row>
                    <Col>
                        <Otp />
                    </Col>
                </Row>

                <br />
            </Container>
        </>
    );
}

export default Login;
