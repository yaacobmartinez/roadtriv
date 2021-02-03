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

  const [weather, setWeather] = React.useState(null)
    const getWeather = React.useCallback(async() => {
        const weatherAxios = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5`
        })
        const res = await weatherAxios.get(`/onecall?lat=14.8527&lon=120.8160&exclude=minutely,hourly&appid=dd29aed5cc6af856d92740131374a63c&units=metric`)
        setWeather(res.data)
    },[])
    React.useEffect(() => {
        let cancelled = false
        if (!cancelled) getWeather()
        return() => cancelled = true
    },[getWeather])

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/home' component={() => <Home weather={weather} />} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/weather' component={ () => <Weather weather={weather} />} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;