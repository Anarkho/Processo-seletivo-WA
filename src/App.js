import React, {createContext, useReducer} from "react";
import { questionaryReducer } from "./store/questionary";

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import "./App.css";
import Home from "./pages/Home";
import DetailsQuestion from "./pages/DetailsQuestion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const questionaryContext = createContext()

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
  const INITIAL_STATE = {
    quantidade: 1,
    questoes: []
  }

  const [state, setState] = useReducer(questionaryReducer, INITIAL_STATE)

  return (
    <questionaryContext.Provider value={{state, setState}} >
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
    </questionaryContext.Provider>
  );
}

export default App;
