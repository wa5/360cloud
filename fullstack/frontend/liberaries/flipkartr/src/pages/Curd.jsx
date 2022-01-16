import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar1 from '../components/navbar/caintainers/Navbar1';

function Curd() {
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
                        <h1>im soome information</h1>
                    </Col>
                </Row>

                <br />
            </Container>
        </>
    );
}

export default Curd;
