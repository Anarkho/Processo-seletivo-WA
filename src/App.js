import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./App.css";
import Home from "./pages/Home";
import DetailsQuestion from "./pages/DetailsQuestion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#22222",
    },
    secondary: {
      main: "#fffe",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details_Question" component={DetailsQuestion} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
