import React, { useContext } from "react";

import { questionaryContext } from "@/App";
import "./detailsQuestion.css";
import { Card, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const DetailsQuestion = () => {
  const { state } = useContext(questionaryContext);
  const history = useHistory();

  const questoes = JSON.parse(localStorage.getItem("Questoes"));

  return (
    <div>
      {questoes.length > 0 && <h1>RELATÓRIO</h1>}
      {questoes.map((data, index) => {
        return (
          <Card className="relatorio" style={{ marginTop: 10 }}>
            <textarea>{data !== undefined ? data : ""}</textarea>
            <div id="op">
              {state.escolhida !== undefined
                ? "Escolhida: " + state.escolhida[index]
                : ""}
            </div>
            <div id="op2">
              {state.corretas[0] !== undefined
                ? "Corretas: " + state.corretas[index]
                : ""}
            </div>
          </Card>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <span className="erros">ERROS: {state.erros} </span>{" "}
        <span className="acertos">ACERTOS: {state.pontuacao} </span>
      </div>
      {state.questoes.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Button
            onClick={() => {
              history.push("/final");
            }}
            variant="contained"
            color="primary"
          >
            Voltar
          </Button>
        </div>
      )}
    </div>
  );
};
export default DetailsQuestion;
