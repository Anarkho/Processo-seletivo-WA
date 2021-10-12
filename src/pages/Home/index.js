import React, { useContext } from "react";
import "./home.css";
import Selection from "./components/Selection";
import { Button } from "@material-ui/core";
import { questionaryContext } from "../../App";

function Home() {
  const { state, setState } = useContext(questionaryContext);
  return (
    <div className="home">
      <Selection />
      <div style={{ marginTop: 20 }}>
        <Button
          style={{ width: 80 }}
          variant="contained"
          color="secondary"
          onClick={() =>
            setState({
              type: "QUANTIDADE",
              payload: 1,
            })
          }
        >
          Cancel
        </Button>
        <Button
          style={{ marginLeft: 10, width: 80 }}
          variant="contained"
          color="primary"
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Home;
