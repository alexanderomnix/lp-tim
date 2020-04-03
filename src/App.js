import React from "react";
import SignInScreen from "./components/SignInScreen";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import MainScreen from "./components/MainScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004691"
    },
    secondary: {
      main: "#01508C"
    },
    tertiary: {
      main: "#fff"
    }
  },
  status: {
    danger: "orange"
  },
  typography: {
    fontFamily: "TIM Sans"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "TIM Sans"
      }
    }
  }
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/">
              <NavBar subtitle={true} />
              <SignInScreen />
            </Route>
            <Route exact={true} path="/plano">
              <NavBar subtitle={false} />
              <MainScreen />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
