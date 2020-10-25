import React from 'react';
import './App.css';
import Home from './pages/Home';
import Tensiones from './pages/Tensiones';
import CrearTension from './pages/CrearTension';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1AA5C4", 
      /*Azul */ 
    },
    secondary: {
      main: "#D02C6A",
      /*Verde */ 
    },
    warning: {
      main: "#4DAC52",
      /*Rosado */ 
    },
    success: {
      main: "#E8853E",
      /*Naranja */ 
    },
  },
});

function App() {
  return (

    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
              <ThemeProvider theme={theme}>
                <Route exact path='/' component={Home} />
                <Route exact path='/tensiones' component={Tensiones} />
                <Route exact path='/creartension' component={CrearTension} />
              </ThemeProvider>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;