import { AppBar, Dialog, IconButton, makeStyles, Slide, Toolbar, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import Article from './Article';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    panel:{marginBottom: theme.spacing(5)},
    image: {
        width: '100vw', 
        height: 200, 
        objectFit: 'cover'
    },
    panel_information: {
        margin: theme.spacing(2),
        textAlign: 'justify'
    },
    panel_information_title :{
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    panel_information_description: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: 20,
    },
}))
function Information({open,info, handleClose}) {
    const classes = useStyles()
    return (
        <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition}>
            <AppBar position='fixed' style={{backgroundColor: 'transparent'}} elevation={0}>
                <Toolbar variant='dense'>
                    <IconButton edge='start' color='inherit' size='small' style={{backgroundColor: '#0C1821' }} onClick={handleClose}>
                        <ArrowBack />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.panel}>
                <img src={info.uri} alt='primary' className={classes.image} />
                <div className={classes.panel_information}>
                    <Typography className={classes.panel_information_title}>{info.name}</Typography>
                    <Article slug={info.slug} />
                </div>
            </div>
        </Dialog>
    )
}

export default Information
