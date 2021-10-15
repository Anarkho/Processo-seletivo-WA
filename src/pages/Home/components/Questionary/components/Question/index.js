import React, { useContext, useEffect } from "react";
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
//import { useHistory } from "react-router-dom";

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
  //const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const relatorio = (values) => {
    localStorage.setItem("Pontuacao", JSON.stringify(state.pontuacao));
    localStorage.setItem(
      "Erros",
      JSON.stringify(state.questoes.length - state.pontuacao)
    );
  };

  const Alternativas = (incorret, correct) => {
    const alternativa = incorret.concat(correct);
    return alternativa;
  };

  const [value, setValue] = React.useState([]);
  const hChange = (event) => {
    setValue(event.target.value);
    state.escolhida = value
  };

  return (
    <div>
      <Formik
        initialValues={{
          question: [],
          alternativas: [],
          corretas: [],
          escolhida: state.escolhida,
          pontuacao: state.pontuacao,
        }}
        render={({ values, handleChange }) => (
          <Form>
            {state.questoes.map((data, index) => {
              const question = formatText(data.question);

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
                        ).map((data, index) => {
                          const alternativas = formatText(data);
                          return (
                            <span key={index}>
                              <FormControl>
                                <RadioGroup
                                  value={value}
                                  onChange={hChange}
                                >
                                  <FormControlLabel
                                    value={alternativas}
                                    control={<StyledRadio />}
                                    label={alternativas}
                                  />
                                </RadioGroup>
                              </FormControl>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
            {state.questoes.length > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <Button
                  onClick={() => {
                    localStorage.setItem(
                      "Questoes",
                      JSON.stringify(values.question)
                    );
                    localStorage.setItem(
                      "Corretas:",
                      JSON.stringify(values.corretas)
                    );
                    relatorio();
                  }}
                  type="submit"
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
  );
};
export default Question;
