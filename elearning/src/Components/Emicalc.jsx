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
      <Card>
        <Row>
          <Col>
            <Form.Control
              type="number"
              placeholder="Principal"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Number of Years ?"
                onChange={(e) => setN(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Rate of Interest"
                onChange={(e) => setR(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleCalEmi}>
                Calculater
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col>
            <h1>EMI : {emi} </h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
