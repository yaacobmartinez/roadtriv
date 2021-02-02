import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Image from '../appbg_green.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#27b1fc',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        textAlign: 'center',
    },
    tagline:{
        paddingTop: 80,
        fontWeight: 600,
        color: '#BEE9E8',
    },
    title: {
        color: '#5AFF15',
        fontWeight: 700
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        width: '100%'
    },
    footer_title: {
        color: '#5AFF15',
        fontWeight: 700,
        fontSize: 23
    },
    footer_subtitle: {
        color: '#fff',
        fontSize: 14
    },
    footer_link:{
        color: '#fff',
        textDecoration: 'underlined',
        marginLeft: 5, 
        marginRight: 5
    },
    logo: {
        marginTop: '30%',
        height: 180,
    }
}))
function Welcome() {
    const classes = useStyles()
    const {push} = useHistory()

    React.useEffect(() => {
        let cancelled = false
        setTimeout(() => {
            if (!cancelled) push('/home') 
        }, 2000);
        return () => cancelled = true
    },[push])

    return (
        <div className={classes.root}>
            <Typography 
                variant='h6' 
                component='h2'
                className={classes.tagline}
                gutterBottom
            >
                Discover the magic of
            </Typography>
            <Typography variant='h3' className={classes.title}>
                malolos
            </Typography>
            <img src={`./logo_final.png`} component={Link} to='/home' className={classes.logo} alt='logo' />
            <div className={classes.footer}>
                <Typography gutterBottom className={classes.footer_title}>
                    malolos
                </Typography>
                <Typography className={classes.footer_subtitle}>
                    By continuing, you agree to our 
                    <a target="_blank" rel="noreferrer" href='https://google.com' className={classes.footer_link}>Terms of Service</a> and 
                    <a target="_blank" rel="noreferrer" href='https://google.com' className={classes.footer_link}>Privacy Policy</a> 
                </Typography>
            </div>
        </div>
    )
}

export default Welcome
