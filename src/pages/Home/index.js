import React, { useContext, useState } from "react";
import "./home.css";
import Selection from "./components/Selection";
import { Button } from "@material-ui/core";
import { questionaryContext } from "@/App";
import http from "@/services/api";
import Questionary from "./components/Questionary";

function Home() {
  const [display, setDisplay] = useState("flex");
  const [displayBtn, setdisplayBtn] = useState("flex");
  const { state, setState } = useContext(questionaryContext);

  const Questions = () => {
    http.get(`?amount=${state.quantidade}`).then((response) => {
      const questions = response.data;
      setState({
        type: "QUESTOES",
        payload: questions.results,
      });
    });
  };

  return (
    <div className="home">
      <div
        style={{
          display: display,
          alignItems: "center",
          flexDirection: "column",
          height: '100vh',
          justifyContent: "center"
        }}
      >
        <Selection />
        <Button
          style={{ marginLeft: 10, width: 100, marginTop: 20 }}
          variant="contained"
          color="primary"
          onClick={() => {
            setDisplay("none");
          }}
        >
          Confirmar
        </Button>
      </div>
      {display === "none" && (
        <div style={{ display: displayBtn, marginTop: 20 }}>
          <Button
            style={{ width: 80 }}
            variant="contained"
            color="secondary"
            onClick={() => {
              setState({
                type: "QUANTIDADE",
                payload: 1,
              });
              setDisplay("flex");
              window.location.reload();
            }}
          >
            Cancel
          </Button>
          <Button
            style={{ marginLeft: 10, width: 80 }}
            variant="contained"
            color="primary"
            onClick={() => {
              Questions();
              setdisplayBtn("none");
            }}
          >
            Start
          </Button>
        </div>
      )}
      <Questionary></Questionary>
    </div>
  );
}

export default Home;
