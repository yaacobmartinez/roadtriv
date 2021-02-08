import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.text.secondary, 
        marginBottom: 10
    },
    body: {
        textAlign:'justify',
        fontSize: 14,
    },
}));
function Hotlines() {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.title}>Important Hotlines</Typography>
            <Typography className={classes.body}>CITY MAYOR (044) 796-2793</Typography>
            <Typography className={classes.body}> PNP (044) 791-0257</Typography>
            <Typography className={classes.body}> BFP (044) 662-3472</Typography>
            <Typography className={classes.body}>RESCUE (044) 760-5160</Typography>
            <Typography className={classes.body}>CITY HEALTH(044) 791-2449</Typography>
            <Typography className={classes.body}>Keep Calm and Stay Safe</Typography>
        </div>
    )
}

export default Hotlines
