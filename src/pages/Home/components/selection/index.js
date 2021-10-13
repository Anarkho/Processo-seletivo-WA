import React, { useContext } from "react";
import "./selection.css";
import { Card, Slider } from "@material-ui/core";
import { questionaryContext } from "@/App";

const Selection = () => {
  const { state, setState } = useContext(questionaryContext);

  const changeValue = (event, value) => {
    setState({
      type: "QUANTIDADE",
      payload: value,
    });
  };
  const getText = (value) => `${value}`;
  return (
    <Card className="card-selection">
      Quantas questões quer responder?
      <Slider
        className="slider"
        min={1}
        max={10}
        value={state.quantidade}
        marks
        onChange={changeValue}
        getAriaValueText={getText}
        valueLabelDisplay="auto"
      />
    </Card>
  );
};

export default Selection;
