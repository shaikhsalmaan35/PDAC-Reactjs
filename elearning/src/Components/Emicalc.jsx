import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./Components/Emicalc.css";

export const Emicalc = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Principal" />
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Number of Years" />
          </Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Rate of Interest" />
          </Col>
          <Col md={2}>
            <Button variant="primary">Calculater</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
