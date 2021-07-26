import React from 'react';
import { Row,Col,Form,Card } from 'react-bootstrap';

export const Forms = () => {
    return (
        <div>
            <Row>
                <Col md={2}></Col>
                <Col md={4}>
                    <Card>
                        <Row>
                            <Col>
                            <Form>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="First Name"
                                        ></Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                
                            </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            
        </div>
    );
};

