import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import "./App.css";
import Home from "./pages/Home";
import DetailsQuestion from "./pages/DetailsQuestion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details_Question" component={DetailsQuestion} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
