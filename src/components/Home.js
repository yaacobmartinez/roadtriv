import {  makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import BottomNavBar from './BottomNavBar'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'
import axios from 'axios'
import Location from './Location'

const useStyles = makeStyles((theme) =>({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.mint,
        overflowY: 'hidden',
        overflowX: 'hidden'
    },
    loader: {
        height: '100vh', backgroundColor: theme.mint
    },
    main: {
        margin: theme.spacing(0,2),
        paddingTop: theme.spacing(2)
    },
    title: {
        fontSize: 30, 
        fontWeight: 700,
    },
    categories: {
        display: 'flex',
        flexDirection: 'row', 
    },
    category: {
        textAlign: 'center',
        marginRight: 20,
        color: '#508991',
        fontWeight: 'bold',
        fontSize: 18,
    },
    category_selected: {
        textAlign: 'center',
        marginRight: 20,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    panels:{
        width: '100vw',
        overflowY: 'scroll',
        display : 'flex'
    },
    panel: {
        flex: 1, 
        height: 400, 
        width: 250,
        position: 'relative',
        '&::after' :{
            content: `''`,
            position: 'absolute',
            left: 0, top: 0,
            width: 230, height: 350,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))',
            borderRadius: 15
        }
    },
    panel_image: {
        width: 230,
        height: 350,
        objectFit: 'cover',
        borderRadius: 15,
        marginRight: theme.spacing(2),
        zIndex: 1,
    },
    panel_title: {
        position: 'relative',
        width: 210,
        height: 100,
        color: '#fff', 
        zIndex: 1,
        left: 10,
        bottom: theme.spacing(6),
    }
}))
function Home() {
    const classes = useStyles()
    const categories = ['Places', 'Culture', 'Food']
    const [categorySelected, setCategorySelected] = React.useState('Places')
    const [featuredPlaces, setFeaturedPlaces] = React.useState(null)
    const [images, setImages] = React.useState(null)
    const getplaces = React.useCallback( async() => {
        const res = await axios.get(`/locations`)
        if (!res.data.success) return 
        setFeaturedPlaces((res.data.locations).slice(10,28))
    },[])

    const getImages = React.useCallback( async() => {
        const res = await axios.get(`/images`)
        if (!res.data.success) return 
        setImages(res.data.images)
    }, [])

    React.useEffect(() => {
        let cancelled = false
        if (!cancelled) {
            getImages();
            getplaces();
        }
        return () => cancelled = true
    }, [getplaces, getImages])

    if (!featuredPlaces) return <Lottie animationData={animationData} className={classes.loader} />
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <Typography className={classes.title}>Discover</Typography>
                <div className={classes.categories}>
                    {
                        categories.map((category, index) =>(
                            <Typography 
                                key={index} 
                                onClick={() => setCategorySelected(category)}
                                className={categorySelected === category ? classes.category_selected : classes.category}
                                >
                                {category}<br />{categorySelected === category && `•` }
                            </Typography>
                        ))
                    }
                </div>
                <div className={classes.panels}>
                    {categorySelected === 'Places' && images && featuredPlaces?.map((place, index) => (
                        <Panel key={index} panel={place} images={images.filter((image) => image.location === place._id)}/>
                    ))}
                </div>
            </div>
            
            <BottomNavBar />
        </div>
    )
}

export default Home

const Panel = ({panel, images}) => {
    const classes = useStyles() 
    const image = images[0].url
    const [open, setOpen] = React.useState(false)
    return (
        <React.Fragment>
            <div className={classes.panel} onClick={() => setOpen(true)}>
                <img src={image} alt='dummy' className={classes.panel_image} />
                <div className={classes.panel_title}>
                    <Typography variant='body2'>{panel.name}</Typography>
                </div>
            </div>
            <Location location={panel} images={images} open={open} handleClose={() => setOpen(false)} />
        </React.Fragment>
    )
} 

