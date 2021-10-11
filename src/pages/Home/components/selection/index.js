import React, { useState } from "react";
import "./selection.css";
import { Card, Slider } from "@material-ui/core";

const Selection = () => {
  const [value, setvalue] = useState(1);

  const changeValue = (event, value) => {
    setvalue(value);
  };
  const getText = (value) => `${value}`;
  return (
    <Card className="card-selection">
      Escolha quantas questões quer responder
      <Slider
        className="slider"
        min={1}
        max={10}
        value={value}
        marks
        onChange={changeValue}
        getAriaValueText={getText}
        valueLabelDisplay="auto"
      />
    </Card>
  );
};

export default Selection;
