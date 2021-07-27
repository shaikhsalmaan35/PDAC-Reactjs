import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export const ToggleComps = () => {
  const [colorName, setColorName] = useState("Orange");
  const [imagesOne, setImageOne] = useState("IMG/1.jpg");

  return (
    <div>
      <Card>
        <Button
          onClick={() =>
            colorName === "Blue" ? setColorName("orange") : setColorName("Blue")
          }
        >
          Change me
        </Button>
        <Button
          onClick={() =>
            imagesOne === "IMG/1jpg"
              ? setImageOne("IMG/2.jpg")
              : setImageOne("IMG/1jpg")
          }
        >
          image change
        </Button>
        <Card style={{ backgroundColor: "rgb(185, 231, 185)" }}>
          <h3 style={{ color: colorName }}>PickupBiz</h3>
          <p style={{ color: colorName }}>This my consent</p>
          <img src={"1.jpg"} alt="myimage" />
          <span style={{ color: colorName }}>
            {" "}
            <h1>PDAC Course</h1>
          </span>
        </Card>
        <Row>
          <Col md="0"></Col>

          <Col>
            <Button
              variant="outline-danger"
              onClick={() => setColorName("Red")}
            >
              danger
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-success"
              onClick={() => setColorName("Green")}
            >
              Success
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-secondary"
              onClick={() => setColorName("Grey ")}
            >
              Grey
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-warning"
              onClick={() => setColorName("Yellow")}
            >
              warning
            </Button>
          </Col>
          <Col md="8"></Col>
        </Row>
      </Card>
    </div>
  );
};
