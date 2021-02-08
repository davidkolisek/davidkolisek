import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { useMemo, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch } from "react-router-dom";
import Footer from "src/components/src/Footer";
import { Navbar } from "src/components/src/Navbar";
import { ThemeProvider } from "styled-components";
import { Page } from "../components/src/Layout";
import { createTheme, ThemeVariant } from "../components/src/Theme/index";
import { AuthProvider } from "../context/auth";
import { Dashboard } from "./Admin/Dashboard";
import PrivateRoute from "./Admin/PrivateRoute";
import AuthRoute from "./Auth/AuthRoute";
import { Signin } from "./Auth/Signin";
import { admin, auth, base } from "./Routes";
import { Home } from "./Web/Home";
import PublicRoute from "./Web/PublicRoute";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () => createTheme(darkMode ? ThemeVariant.dark : ThemeVariant.light),
    [darkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Page>
              <Switch>
                <AuthRoute path={auth.signIn} component={Signin} />
                <PrivateRoute path={admin.dashboard} component={Dashboard} />
                <PublicRoute path={base.home} component={Home} themeSwitch={()=> setDarkMode(darkMode ? false : true)}/>
              </Switch>
            </Page>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default hot(App);
