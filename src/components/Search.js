import React from 'react'
import BottomNavBar from './BottomNavBar'
import axios from 'axios';
import { IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Paper } from '@material-ui/core'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'
import { SearchOutlined } from '@material-ui/icons';
import Location from './Location';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.mint,
    },
    loader: {
        height: '100vh', backgroundColor: theme.mint
    }, 
    search: {
        paddingTop: 10,
    },
    search_root: {
        padding: '1px 2px',
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        margin: '10px auto',
        zIndex: theme.zIndex.appBar + 1

    },
    search_input:{
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}))

function Search() {
    const classes = useStyles()
    const [locations, setLocations] = React.useState(null)
    const [images, setImages] = React.useState(null)
    const [audios, setAudios] = React.useState(null)
    const getLocations = React.useCallback(async () => {
        const res = await axios.get(`/locations`)
        if(!res.data.success) return
        setLocations(res.data.locations)
      },[])
    const getImages = React.useCallback(async () => {
        const res = await axios.get(`/images`)
        if(!res.data.success) return
        setImages(res.data.images)
    },[])
    const getAudios = React.useCallback( async() => {
        const res = await axios.get(`/audios`)
        if (!res.data.success) return 
        setAudios(res.data.audios)
    }, [])
    React.useEffect(() => {
        let cancelled = false
        if (!cancelled) {
            getImages();
            getLocations();
            getAudios();
        }
        return () => cancelled = true
    }, [getLocations, getImages, getAudios])

    const filterByValue = (array, string) => {
        return array.filter(o => {     	
          return Object.keys(o).some(k => {       	
            if(typeof o[k] === 'string') {
                return o[k].toLowerCase().includes(string.toLowerCase())
            }else{
                return null
            }   
          });      
        });
    } 
    const [key, setKey] = React.useState('');
    const [results, setResults] = React.useState(null)
    const [selectedLocation, setSelectedLocation] = React.useState(null)
    const handleChange = (e) => {
        setKey(e.target.value)
        setResults(null)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = filterByValue(locations, key)
        setResults(res)
    } 
    if (!locations) return <Lottie animationData={animationData} className={classes.loader} />

    return (
        <div className={classes.root}>
            <div className={classes.search}>

            <Paper 
                component='form'
                className={classes.search_root}
                onSubmit={handleSubmit}
            >
                <IconButton className={classes.iconButton} aria-label="menu">
                    <SearchOutlined />
                </IconButton>
                <InputBase
                    value={key}
                    onChange={handleChange}
                    className={classes.search_input}
                    placeholder="Search for a Place in Malolos"
                />
            </Paper>
            </div>
            {
                results && (
                    <List component={Paper} dense style={{maxHeight: 350, width: '90vw', overflowY: 'scroll', margin: '-10px auto'}}>
                    {results?.map((result, index) => (
                        <ListItem key={index} button 
                            onClick={() =>{ 
                                        setSelectedLocation(result)
                                        setKey('')
                                        setResults(null)
                                    }}>
                            <ListItemText primary={result.name} secondary={result.address} />
                        </ListItem>
                    ))}
                    </List>
                )
            }
            {
                selectedLocation && (
                    <Location
                        open={Boolean(selectedLocation)}
                        location={selectedLocation} 
                        images={images.filter((i) => i.location === selectedLocation._id)} 
                        handleClose={() => setSelectedLocation(null)}
                        audios={audios.filter((audio) => audio.location === selectedLocation._id)}
                    />
                )
            }
            <BottomNavBar />
        </div>
    )
}

export default Search
