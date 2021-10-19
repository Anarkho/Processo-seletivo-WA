import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";

import { questionaryContext } from "@/App";

const Final = () => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 5000);
  });
  const { state } = useContext(questionaryContext);
  const history = useHistory();
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {state.pontuacao > state.quantidade / 2 ? (
        <>
          <h1>PARABÉNS!!!&nbsp;&nbsp;</h1>
          <img
            src="http://i1.kym-cdn.com/photos/images/original/000/538/716/7f5.gif"
            alt="orgulhoso"
          />
        </>
      ) : (
        <>
          <h1>DECEPÇÃO...&nbsp;&nbsp;</h1>
          <img
            src="http://pa1.narvii.com/7031/ea7036f3d6af6362d08ff30388167b5811421775r1-512-384_00.gif"
            alt="decepcionado"
          />
        </>
      )}
    </Card>
  );
};

export default Final;
