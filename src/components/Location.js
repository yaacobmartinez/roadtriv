import { AppBar, Dialog, IconButton, makeStyles, Slide, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import LocationMap from './LocationMap';
import ImageViewer from "react-simple-image-viewer";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const useStyles = makeStyles((theme) => ({
    image: {
        width: '100vw', 
        height: 300, 
        objectFit: 'cover'
    },
    panel:{
        marginBottom: theme.spacing(5)
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
    map: {
        height: 200, 
        width: '100vw',
        backgroundColor: theme.mint,
    },
    map_caption: {
        margin: theme.spacing(2), 
        fontWeight: 'bold',
        fontSize: '1rem'
    }
}))
const Location = ({location, images, open, handleClose}) => {
    const classes = useStyles()
    const [isViewerOpen, setIsViewerOpen] = React.useState(false)
    const imageUrls = images.map((image) => image.url)
    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition}>
                <AppBar position='fixed' style={{backgroundColor: 'transparent'}} elevation={0}>
                    <Toolbar variant='dense'>
                        <IconButton edge='start' color='inherit' size='small' style={{backgroundColor: '#0C1821' }} onClick={handleClose}>
                            <ArrowBack />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.panel}>
                    <img src={images[0].url} alt='primary' 
                        className={classes.image}
                        onClick={() =>setIsViewerOpen(true)}    
                    />
                    <div className={classes.panel_information}>
                        <Typography className={classes.panel_information_title}>{location.name}</Typography>
                        <Typography variant='button' style={{fontWeight: 'bold'}} color='textSecondary' gutterBottom>{location.category}</Typography><br/>
                        <Typography variant='caption' gutterBottom >{location.address}</Typography>
                        <Typography className={classes.panel_information_description}>Description</Typography>
                        <Typography variant='caption'>{location.description}</Typography>
                    </div>
                    <LocationMap latitude={location.latitude} longitude={location.longitude} />
                    <Typography className={classes.map_caption} gutterBottom >{`Malolos, Bulacan`}</Typography>
                    {isViewerOpen && (
                        <ImageViewer 
                            src={imageUrls}
                            currentIndex={0}
                            onClose={() => setIsViewerOpen(false)}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                        />
                    )}
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default Location
