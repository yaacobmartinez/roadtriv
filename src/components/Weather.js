import { makeStyles, Paper, Typography } from '@material-ui/core';
import { Room } from '@material-ui/icons';
import React from 'react'
import BottomNavBar from './BottomNavBar'

const useStyles = makeStyles((theme) =>({
    root: {
        // height: '100vh',
        width: '100vw',
        backgroundColor: '#0353A4',
        paddingBottom: 100,
    },
    main: {
        margin: theme.spacing(0,2),
        paddingTop: theme.spacing(2)
    },
    title: {
        fontSize: 30, 
        fontWeight: 700,
        color: '#F8F7FF'
    },
    weather_location_temp:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: theme.spacing(2,0)
    },
    location: {
        fontSize: 23, 
        fontWeight: 500,
        color: '#F8F7FF'
    },
    weather_location:{
        display: 'flex',
    },
    weather_temp:{
        fontSize: 23, 
        fontWeight: 500,
        color: '#F8F7FF'
    },
    weather_icon_desc:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    weather_desc:{
        fontSize: 20,
        fontWeight: 500,
        color: '#F8F7FF',
        marginTop: -25
    },
    weather_day:{
        backgroundColor: theme.mint,
        padding: theme.spacing(2),
        borderRadius: 15,
        marginBottom: theme.spacing(2)
    },
    weather_day_component:{
        display: 'flex'
    },
    weather_icon: {
        height: 70, 
        width: 70
    },
    weather_temp_daily:{
        fontSize: '1.5rem', 
        fontWeight: 'bold',
        color: '#000'
    },
    weather_subtitle:{
        fontSize: '.75rem',
        color: '#000'
    },
}));

function Weather({weather}) {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <Typography className={classes.title}>Weather Forecast</Typography>
                <div className={classes.weather_location_temp}>
                    <div className={classes.weather_location}>
                        <Room fontSize='large' style={{color: '#F8F7FF'}} />
                        <Typography className={classes.location}>Malolos</Typography>
                    </div>
                    <Typography className={classes.weather_temp}>{weather.current.temp}°C</Typography>
                </div>
                <div className={classes.weather_icon_desc}>
                    <img src={`./icons/${weather.current.weather[0].icon}@2x.png`} alt='icon' />
                    <Typography variant='button' className={classes.weather_desc}>{weather.current.weather[0].description}</Typography>
                </div>
                <div className={classes.weather_location_temp}>
                    <div>
                        <Typography className={classes.location} style={{fontSize: 15}}>Feels like</Typography>
                        <Typography className={classes.location}>{weather.current.feels_like}°C</Typography>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Typography className={classes.location} style={{fontSize: 15}}>Humidity</Typography>
                        <Typography className={classes.location}>{weather.current.humidity}</Typography>

                    </div>
                </div>
                <div>
                    {weather.daily.slice(1,8).map((weather, index) =>(
                        // <div key={index} />
                        <WeatherDaily key={index} weather={weather} />
                    ))}
                </div>
            </div>
            <BottomNavBar />
        </div>
    )
}

export default Weather

const WeatherDaily = ({weather}) =>{
    const classes = useStyles()
    const convertWithDay = (timeStamp) => {
        const code = timeStamp * 1000
        return new Date(code).toDateString()
    }
    return (
        <Paper className={classes.weather_day}>
            <Typography style={{fontSize: 15}}>
                {convertWithDay(weather.dt)}
            </Typography>
            <div className={classes.weather_day_component}>
                <img src={`./icons/${weather.weather[0].icon}@2x.png`} alt='icon' className={classes.weather_icon}/>
                <div>
                <Typography className={classes.weather_temp_daily}>{weather.temp.day}°C</Typography>
                <Typography className={classes.weather_subtitle}>Feels like {weather.feels_like.day}°C. {weather.weather[0].description}<br/></Typography>
                </div>
            </div>
        </Paper>
    )
}