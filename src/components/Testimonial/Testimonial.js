import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import toyota from '../../assets/images/toyota-logo.png'
import gm from '../../assets/images/General-Motors-logo.png'
import ford from '../../assets/images/ford-logo.png'
import michelin from '../../assets/images/michelin-logo.png'
import bridgestone from '../../assets/images/bridgestone-logo.png'

const Testimonial = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>

                    <Row className="text-center">
                        <h3>Trusted By 10+ Leading Brands, Companies, And Organizations. Featured & Mentioned In  Many More Companies</h3>
                    </Row>

                    <Row style={{alignItems: "center"}}>
                       
                        <Col><img className="w-75" src={toyota} alt=""/></Col>
                        <Col><img className="w-75" src={gm} alt=""/></Col>
                        <Col><img className="w-75" src={ford} alt=""/></Col>
                        <Col><img className="w-75" src={michelin} alt=""/></Col>
                        <Col><img className="w-75" src={bridgestone} alt=""/></Col>
        
                    </Row>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default Testimonial;