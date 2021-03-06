import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Image } from "react-bootstrap";
import { FormsReducer } from "../Reducers/FormsReducer";
import "./Forms.css";

export const Forms = () => {
  const { firstName, LastName, LineNo1, LineNo2, CityName, PincodeCity } =
    FormsReducer.Data[0];
  const [fname, setFname] = useState(firstName);
  const [lname, setLname] = useState(LastName);
  const [line1, setLine1] = useState(LineNo1);
  const [line2, setLine2] = useState(LineNo2);
  const [city, setCity] = useState(CityName);
  // const [pincode, setPincode] = useState(PincodeCity);
  const [bulbState, setBulbState] = useState("on");
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={4}>
          {/* <Card> */}
          <Row>
            <Col>
              <Form className="Card1">
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label className="Lable1">
                        <h6>First Name: </h6>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label>
                        <h6>Last Name: </h6>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>
                        <h6>Address : </h6>
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Line1"
                        onChange={(e) => setLine1(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Line2"
                        onChange={(e) => setLine2(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="pincode"
                        onChange={(e) => setPincode(e.target.value)}
                      ></Form.Control>
                    </Col>
                  </Row> */}
                </Form.Group>
              </Form>
            </Col>
          </Row>
          {/* </Card> */}
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="IMG/1.jpg" />
                <Row>
                  <Col>
                    {" "}
                    <h4>
                      <label>Full Name:</label> {`${fname} ${lname}`}
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Last Name:</label> {`${line1}`}
                  </Col>
                </Row>
                <Row>
                  <Col>{`${line2} `}</Col>
                </Row>
                <Row>
                  <Col>{`${city} `}</Col>
                </Row>
                <Row>
                  <Col>{`${PincodeCity} `}</Col>
                  <Row>
                    <Col>
                      <Button className="button">Submit</Button>
                    </Col>
                  </Row>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={5}></Col>
        <Col md="2">
          <Image
            src={`IMG/Capture${bulbState}.PNG`}
            width="100px"
            height="100px"
            onClick={() =>
              bulbState === "off" ? setBulbState("on") : setBulbState("off")
            }
          ></Image>
        </Col>
      </Row>
    </div>
  );
};
