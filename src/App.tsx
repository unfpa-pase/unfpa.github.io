import React from 'react';
import './App.css';

import Home from './pages/Home';
import Tensiones from './pages/Tensiones';
import CrearTension from './pages/CrearTension';
import Dimensiones from './pages/Dimensiones';
import AmbienteAmbiental from './pages/DimensionesDetalle/AmbienteAmbiental';
import AmbienteConstruido from './pages/DimensionesDetalle/AmbienteConstruido';
import Sociocultural from './pages/DimensionesDetalle/Sociocultural';
import Economico from './pages/DimensionesDetalle/Economico';


import { HashRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9C00", 
      /*Naranja */ 
    },
    secondary: {
      main: "#F0EDE7",
      /*Beige */ 
    },
    warning: {
      main: "#F0EDE7",
      /*Rosado 2*/ 
    },
    success: {
      main: "#E8853E",
      /*Naranja 2 */ 
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
                <Route exact path='/dimensiones' component={Dimensiones} />
                <Route exact path='/tensiones' component={Tensiones} />
                <Route exact path='/tensiones/crear/' component={CrearTension} />
                <Route exact path='/dimension/ambienteambiental/' component={AmbienteAmbiental} />
                <Route exact path='/dimension/ambienteconstruido/' component={AmbienteConstruido} />
                <Route exact path='/dimension/sociocultural/' component={Sociocultural} />
                <Route exact path='/dimension/economico/' component={Economico} />

              </ThemeProvider>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;