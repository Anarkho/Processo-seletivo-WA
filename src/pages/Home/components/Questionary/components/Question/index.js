import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { formatText } from "@/utils/formatText";
import { questionaryContext } from "@/App";
import "./question.css";
import {
  Card,
  Button,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Radio,
  FormControl,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import DetailsQuestion from "../DetailsQuestion";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

const StyledRadio = (props) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

const Question = () => {
  const { state } = useContext(questionaryContext);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const relatorio = (question, correct, selection) => {
    localStorage.setItem("Pontuacao", JSON.stringify(state.pontuacao));
    localStorage.setItem(
      "Erros",
      JSON.stringify(state.questoes.length - state.pontuacao)
    );
    state.erros = state.questoes.length - state.pontuacao;
    const q = question.filter((este, i) => question.indexOf(este) === i);
    const c = correct.filter((este, i) => correct.indexOf(este) === i);
    localStorage.setItem("Questoes", JSON.stringify(q));
    localStorage.setItem("Corretas", JSON.stringify(c));
    localStorage.setItem("Escolhidas", JSON.stringify(selection));
  };

  const Alternativas = (incorret, correct) => {
    const alternativa = incorret.concat(correct);
    return alternativa;
  };

  const [selectedValue, setSelectedValue] = useState([]);

  const hChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {!visibility && (
        <div>
          {state.questoes.length > 0 && <h1>QUESTIONÁRIO</h1>}
          <Formik
            initialValues={{
              question: state.questoes,
              corretas: state.corretas,
              escolhida: state.escolhida,
              pontuacao: state.pontuacao,
            }}
            render={({ values, handleChange, resetForm }) => (
              <Form>
                {state.questoes.map((data, index) => {
                  const question = formatText(data.question);
                  values.question.push(question);
                  values.corretas.push(formatText(data.correct_answer));

                  return (
                    <div key={index} className="question">
                      <Card key={index}>
                        <div style={{ padding: 10 }}>
                          <textarea
                            type="text"
                            disabled
                            name="question"
                            onChange={handleChange}
                            value={question}
                          />
                          <div id="div-btn">
                            {Alternativas(
                              data.incorrect_answers,
                              data.correct_answer
                            )
                              .map((data, index) => {
                                const alternativas = formatText(data);
                                return (
                                  <span key={index}>
                                    <FormControl>
                                      <RadioGroup
                                        name="customized-radios"
                                        value={selectedValue}
                                        onChange={hChange}
                                      >
                                        <FormControlLabel
                                          value={alternativas}
                                          control={
                                            <StyledRadio
                                              id={index}
                                              onClick={(e) => {
                                                values.escolhida.push(
                                                  e.target.value
                                                );
                                                if (
                                                  values.corretas.includes(
                                                    e.target.value
                                                  ) === true
                                                ) {
                                                  state.pontuacao =
                                                    state.pontuacao + 1;
                                                }
                                              }}
                                            />
                                          }
                                          label={alternativas}
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </span>
                                );
                              })
                              .sort(() => 0.3 - Math.random())}
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
                {state.questoes.length >= 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <Button
                      onClick={() => {
                        relatorio(
                          values.question,
                          values.corretas,
                          values.escolhida
                        );
                        setVisibility(true);
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Finalizar
                    </Button>
                  </div>
                )}
              </Form>
            )}
          />
        </div>
      )}
      {visibility && <DetailsQuestion />}
    </>
  );
};
export default Question;
