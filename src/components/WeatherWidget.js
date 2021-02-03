import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0,2),
        backgroundColor: '#0353A4',
        borderRadius: 15,
        padding: theme.spacing(2),
        display: 'flex',
        textDecoration: 'none'
    },
    weather_icon: {
        height: 70, 
        width: 70
    },
    weather_temp:{
        fontSize: '1.5rem', 
        fontWeight: 'bold',
        color: '#fff'
    },
    weather_subtitle:{
        fontSize: '.75rem',
        color: '#fff'
    },
}))

function WeatherWidget({current}) {
    const classes = useStyles()
    const convertToDate = (timeStamp) => {
        const code = timeStamp * 1000
        return new Date(code).toLocaleTimeString();
    }
    return (
        <Paper className={classes.root} component={Link} to='/weather'>
            <img src={`./icons/${current.weather[0].icon}@2x.png`} alt='icon' className={classes.weather_icon} />
            <div>
                <Typography className={classes.weather_temp}>{current.temp}°C</Typography>
                <Typography className={classes.weather_subtitle}>Feels like {current.feels_like}°C. {current.weather[0].description}<br/></Typography>
                <Typography variant='caption' style={{color: '#FFF2F1'}}>Today as of {convertToDate(current.dt)}</Typography>
            </div>
        </Paper>
    )
}

export default WeatherWidget
