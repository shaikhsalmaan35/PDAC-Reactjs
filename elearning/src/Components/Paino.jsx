import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./Paino.css";

export const Paino = () => {
  return (
    <div>
      <Card>
        <Row className="top">
          <Col>low</Col>
          <Col>medium</Col>
          <Col>high</Col>
        </Row>
        <Row>
          <Col className="but">
            <Button className="sound">sa</Button>
            <Button className="sound">re</Button>
            <Button className="sound">ga</Button>
            <Button className="sound">ma</Button>
            <Button className="sound">pa</Button>
            <Button className="sound">da</Button>
            <Button className="sound">ni</Button>
            <Button className="sound">sa</Button>
          </Col>
          <Col className="but">
            <Button className="sound">sa</Button>
            <Button className="sound">re</Button>
            <Button className="sound">ga</Button>
            <Button className="sound">ma</Button>
            <Button className="sound">pa</Button>
            <Button className="sound">da</Button>
            <Button className="sound">ni</Button>
            <Button className="sound">sa</Button>
          </Col>
          <Col className="but">
            <Button className="sound">sa</Button>
            <Button className="sound">re</Button>
            <Button className="sound">ga</Button>
            <Button className="sound">ma</Button>
            <Button className="sound">pa</Button>
            <Button className="sound">da</Button>
            <Button className="sound">ni</Button>
            <Button className="sound">sa</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
