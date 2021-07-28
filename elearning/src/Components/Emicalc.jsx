import React, { useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import "./Emicalc.css";

export const Emicalc = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);
  const handleCalEmi = () => {
    const si = (p * r * n) / 100;
    const repayAmount = Number(p) + Number(si);
    const emilocal = repayAmount / (n * 12);
    setEmi(emilocal);
  };
  return (
    <div>
      <Card className="Calc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Principal"
              onClick={(e) => setP(e.target.value)}
            />
          </Col>

          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Number of Years"
              onClick={(e) => setN(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Rate of Interest"
              onClick={(e) => setR(e.target.value)}
            />
          </Col>

          <Col md={2}>
            <Button variant="primary">Calculater</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col md={3}></Col>
            <h1>Simple Interest : {emi} </h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
