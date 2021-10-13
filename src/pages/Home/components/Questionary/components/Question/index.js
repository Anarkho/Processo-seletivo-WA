import React, { useContext } from "react";
import { questionaryContext } from "@/App";
import "./question.css";
import { Card, Button } from "@material-ui/core";

const Question = () => {
  const { state } = useContext(questionaryContext);

  return (
    <div>
      <form>
        {state.questoes.map((data) => {
          return (
            <div className="question">
              <Card>
                <div style={{ padding: 10 }}>
                  <h5>
                    {data.question
                      .replace(/&#039;/g, "'")
                      .replace(/&quot;/g, '"')
                      .replace(/&rdquo;/g, "`")
                      .replace(/&ldquo;/g, '"')}
                  </h5>
                  <div>
                    {data.incorrect_answers.map((data) => {
                      return (
                        <>
                          <button>
                            {data
                              .replace(/&#039;/g, "'")
                              .replace(/&quot;/g, '"')
                              .replace(/&rdquo;/g, "`")
                              .replace(/&ldquo;/g, '"')}
                          </button>{" "}
                          &nbsp;&nbsp;
                        </>
                      );
                    })}
                    <button>{data.correct_answer}</button>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
        {state.questoes.length > 1 && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
          >
            <Button variant="contained" color="primary">
              Finalizar
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};
export default Question;
