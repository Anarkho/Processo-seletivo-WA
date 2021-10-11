import React from "react";
import "./home.css";
import Selection from "./components/selection";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <Selection />
      <div style={{ marginTop: 20 }}>
        <Button style={{ width: 80 }} variant="contained" color="secondary">
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
