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
    image: {
        width: '90vw', 
        objectFit: 'cover',
        marginBottom: 10, 
        marginTop: 10
    },
}))
function Preparation() {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.body}>
                Unknown to many, this landlocked province is a go-to for adventure seekers and history buffs. Try out the many hiking and biking trails within its towns and be prepared to bask in stunning views of the Sierra Madre mountain range. Go spelunking, cliff diving, or swimming to your heart’s desire in the many caves, waterfalls, and rivers that are ready to be explored.
            </Typography>
            <Typography className={classes.body}>
                If you’re looking for something less tiring but still just as fun, get transported to the Spanish era through historic tours of old churches and heritage homes.            
            </Typography>
            <img src='https://explore.traveloka.com/wp-v2/wp-content/uploads/2017/09/Fields-in-Bulacan-750x469.jpg' alt='image1' className={classes.image} />
            <Typography className={classes.body}>
                Aside from the rich and deeply rooted history of Bulacan, the province is also known for its pyrotechnic industry, fiestas, and great delicacies. Going on a food trip during festivals is never a bad idea and you’ll always know where to go to get literal bang for your buck just in time for New Year’s eve.
            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
            Fast Facts
            </Typography>
            <Typography className={classes.body}>
                Public Transportation: Buses, Jeepneys, Tricycles {'\n'}
                Languages/Dialect: Tagalog, English {'\n'}
                Payment Options: Cash, Credit/Debit Card {'\n'}
                Known For: Fireworks, Chicharon, Barasoain Church, Biak-na-Bato {'\n'}
            </Typography>
            <img src='https://explore.traveloka.com/wp-v2/wp-content/uploads/2017/09/Fiesta-in-Bulacan-750x469.jpg' alt='image2' className={classes.image} />
            <Typography className={classes.body}>
            It is widely known that Filipinos are friendly and will easily treat you as a part of their family. If you get invited to Fiesta celebrations in Bulacan, don’t be shy to eat and celebrate with them. {'\n'}
            “Dakip” is a Bulakeno Lenten tradition where in towns men reenact the capturing of Jesus Christ.{'\n'}
            The Obando Fertility dance is widely believed to help women become more fertile and have a successful pregnancy.{'\n'}
            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
                Best Time to Visit Bulacan            
            </Typography>
            <img src='https://explore.traveloka.com/wp-v2/wp-content/uploads/2017/09/Barasoain-Church-Bulacan-750x469.jpg' alt='image3' className={classes.image} />
            <Typography className={classes.body}>
            Dry season, which is around November to April, is the best time to visit the province. Aside from less delays and traffic due to bad weather, you’ll have an easier time going to nature spots like hike trails and caves or going on historical tours of heritage towns. Fiestas are also definitely more enjoyable when it’s not raining.
            </Typography>
            <Typography className={classes.body}>
            Dry season, which is around November to April, is the best time to visit the province. Aside from less delays and traffic due to bad weather, you’ll have an easier time going to nature spots like hike trails and caves or going on historical tours of heritage towns. Fiestas are also definitely more enjoyable when it’s not raining.
            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
                How to Go to Bulacan          
            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
                By Air          
            </Typography>
            <Typography className={classes.body}>
            There are no direct flights to Bulacan but there are direct flights to the neighboring city of Manila via Ninoy Aquino International Airport and the nearby province of Pampanga via Clark International Airport.            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
                By Land          
            </Typography>
            <Typography className={classes.body}>
            Most buses bound for Northern Luzon pass by Bulacan. There are also direct routes from Manila to towns like Malolos, Bocaue, Baliuag, and Hagonoy.            
            </Typography>
            <Typography className={classes.title} style={{color: '#000'}}>
                By Sea          
            </Typography>
            <Typography className={classes.body}>
            Going to Bulacan by sea is not possible as there’s no commercial port in the province.            
            </Typography>

        </div>
    )
}

export default Preparation
