import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

export const Emicalc = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Principal" />
          </Col>
          <Form.Control type="text" placeholder="Number of Years" />
          <Form.Control type="text" placeholder="Rate of Interest" />
          <Button variant="primary">Calculater</Button>
        </Row>
      </Card>
    </div>
  );
};
