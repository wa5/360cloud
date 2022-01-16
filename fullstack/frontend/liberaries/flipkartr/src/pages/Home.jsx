import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card1 from '../components/cards/conatiners/Cards1';
import Navbar1 from '../components/navbar/caintainers/Navbar1';
import Sliders1 from '../components/sliders/constants/Sliders1';

import img1 from '../assets/img/1.jpeg';
import img2 from '../assets/img/4.jpg';
import img3 from '../assets/img/3.jpg';

function Home() {
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
                        <Sliders1 img={img1} img2={img2} img3={img3} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                </Row>

                <br />
                <Row>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                    <Col>
                        <Card1 />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
