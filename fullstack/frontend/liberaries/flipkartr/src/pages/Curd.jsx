import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Curd1 from '../components/api/Curd1';
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
                        <Curd1 />
                    </Col>
                </Row>

                <br />
            </Container>
        </>
    );
}

export default Curd;
