import { Chip, makeStyles } from '@material-ui/core'
import React from 'react'
import Information from './Information'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        overflowY: 'scroll',
        display : 'flex',
        marginLeft: 16, 
        marginTop: 32
    },
    panel: {
        flex: 1, 
        height: 210, 
        width: 250,
        position: 'relative',
    },
    panel_image: {
        width: 230,
        height: 200,
        objectFit: 'cover',
        borderRadius: 15,
        marginRight: theme.spacing(2),
        zIndex: 1,
    },
    panel_title: {
        position: 'relative',
        width: 210,
        height: 50,
        color: '#fff', 
        zIndex: 1,
        left: 10,
        bottom: theme.spacing(6),
    }
}))




function UsefulInfo() {
    const classes = useStyles()
    const infos = [
        {
            uri :  `https://img.abs-cbnnews.com/2015/images/metro/20150123-MalolosSublime-SLIDESHOW-JC-1.jpg`, 
            name: `About Malolos`,
            slug: `About`
        },
        { 
            uri: `https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name: 'Preparation',
            slug: `Preparation`
        },
        { 
            uri: `https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            slug: `CovidUpdates`,
            name: 'COVID Updates'
        },
        {
            uri: `https://images.pexels.com/photos/2733667/pexels-photo-2733667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name: `Hotlines`,
            slug: `Hotlines`
        },
    ]
    return (
        <div className={classes.root}>
            {infos.map((info, index) => (
                <InfoPanel info={info} key={index} />
            ))}
        </div>
    )
}

export default UsefulInfo

const InfoPanel = ({info}) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    return (
        <React.Fragment>
            <div className={classes.panel} onClick={() =>setOpen(true)}>
                <img src={info.uri} alt='info' className={classes.panel_image} />
                <div className={classes.panel_title}>
                    <Chip
                        size="small"
                        label={info.name}
                        color="primary"
                    />
                </div>
            </div>
            <Information open={open} info={info} handleClose={() => setOpen(false)} />
        </React.Fragment>
    )
} 
