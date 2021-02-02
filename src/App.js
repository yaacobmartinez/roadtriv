import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Welcome from './components/Welcome'
import Map from './components/Map';
import Home from './components/Home';
import Weather from './components/Weather';
import Search from './components/Search';
axios.defaults.baseURL = `https://malolos.herokuapp.com/api`

const theme = createMuiTheme({
	typography: {
		fontFamily: "Poppins",
  },
  mint: '#A9FBD7'
});

function App() {

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/weather' component={Weather} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;