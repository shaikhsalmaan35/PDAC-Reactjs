import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

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
          imag change
        </Button>{" "}
        <h3 style={{ color: colorName }}>PickupBiz</h3>
        <p style={{ color: colorName }}>This my consent</p>
        <img src={"1.jpg"} alt="myimage" />
        <span style={{ color: colorName }}>
          {" "}
          <h1>PDAC Course</h1>
        </span>
        <button onClick={() => setColorName("Red")}>Red</button>
        <button onClick={() => setColorName("Green")}>Green</button>
        <button onClick={() => setColorName("Black")}>Black</button>
        <button onClick={() => setColorName("teal")}>Teal</button>
      </Card>
    </div>
  );
};
