import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
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
        marginTop: 10, 
        marginBottom: 10,
    },
}))
function Delicacies() {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.title}>Bistro Maloleño Restaurant in Malolos, Bulacan</Typography>
            <img 
                src={`https://3.bp.blogspot.com/-287yLifGxv8/U2_VAz1KHvI/AAAAAAAANpI/YrukK_rs274/s1600/Bistro+Maloleno+Restaurant+in+Malolos+Bulacan.jpg`} 
                className={classes.image} 
                alt={`Bistro1`}
            />
            <Typography className={classes.body}>
               Opened in April 2013, Bistro Maloleno is a casual dining restaurant in Malolos serving Heirloom Bulacan Dishes. This concept restaurant does not only bring dining entertainment to its guests, but it also serves as a living museum of culinary tradition where the guests learn and experience Bulacan's heritage cuisine. Let us take your taste buds into a travel back in time through the dishes served by Bistro Maloleno.
            </Typography>
            <Typography className={classes.title}>Nilagang Manok sa Puti na may Asparagus</Typography>
            <Typography>{'\n'}</Typography>
            <Typography className={classes.body}>
                The Nilagang Manok sa Puti na may Asparagus is a basic chicken soup that is cooked with asparagus. The taste of the soup is quite similar to a regular nilagang manok, and quite different from tinolang manok. This dish is said to be a favorite of Pres. Emilio Aguinaldo.            </Typography>
            <Typography>{'\n'}</Typography>
            <img 
                src={`https://4.bp.blogspot.com/-lP1tmGweShM/U2_VDMvgbII/AAAAAAAANpQ/JKPypEc7d1Y/s1600/Bistro+Maloleno+in+Malolos+Bulacan+-+Nilagang+Manok+sa+Puti+na+may+Asparagus.jpg`} 
                className={classes.image} 
                alt={`Bistro2`}
            />
            <Typography className={classes.title}>Hamon Bulakenya</Typography>
            <Typography className={classes.body}>
                Another specialty dish of Bistro Maloleno is the Hamon Bulakenya. A slab of pork is slow cooked in the restaurant's special sauce. This dish reminds me of my mom's hamonado and for some, they associate the taste to asado. Hamon Bulakenya has a well balanced sweetness and is perfect with plain rice.
            </Typography>
            <img 
                src={`https://2.bp.blogspot.com/-r88PhYVxpzM/U2_VGAXdN1I/AAAAAAAANpY/09Ex90QUsVk/s1600/Bistro+Maloleno+in+Malolos+Bulacan+-+Hamon+Bulakenya.jpg`} 
                className={classes.image} 
                alt={`Bistro3`}
            />
            <Typography className={classes.title}>Pochero ni Plaridel</Typography>
            <Typography className={classes.body}>
                The best-selling beef dish of the restaurant is the Pochero ni Plaridel. Bulacan's version uses a part of beef that is similar to those used in bulalo. The sauce on the other hands is quite thick, in contrast to the pochero in Manila which is more like a soup dish. Pochero ni Plaridel has the usual pochero vegetables like reployo, sitaw, petchay, saging na saba and kamote. In addition, Pochero ni Plaridel also has slices of choriz and pieces of garbanzos. This dish is said to be a favorite of Philippine hero, Marcelo H. del Pilar.            
            </Typography>
            <img 
                src={`https://1.bp.blogspot.com/-ORc6EgvUOxY/U2_VHCPAw8I/AAAAAAAANpg/6cOzZLqZz2Y/s1600/Bistro+Maloleno+in+Malolos+Bulacan+-+Pochero+ni+Plaridel.jpg`} 
                className={classes.image} 
                alt={`Bistro4`}
            />
            <Typography className={classes.title}>Seafoods Fiesta</Typography>
            <Typography className={classes.body}>
            The city of Malolos has a number of coastal barangays and they also take pride in the quality of their coastal waters which yield a bountiful harvest of fresh seafood. Bistro Maloleno's Seefods Fiesta showcases the variety of fish and shellfish which can be cough in those area. This dish has mussels, squid, oyster, tempura, crab, prawn, and lobster.            </Typography>
            <img 
                src={`https://2.bp.blogspot.com/-RNv1paWYq40/U2_VKdpHL2I/AAAAAAAANpo/_vG53t1ki4E/s1600/Bistro+Maloleno+in+Malolos+Bulacan+-+Seafoods+Fiesta.jpg`} 
                className={classes.image} 
                alt={`Bistro5`}
            />
            <Typography className={classes.body}>
            Overall, dining at Bistro Maloleno is a unique experience. Heritage Bulacan Cuisine is made even more fabulous by learning the history behind every dish. It is no wonder that Bistro Maloleno was given the recognition as one of the "pinaka yummy restaurants in Bulacan" by the GMA News TV show "Ang Pinaka". We hope that Kris Aquino would also feature Bistro Maloleno on Kris TV so that more Filipinos can get to learn about the unique heirloom dishes in Bulacan.            </Typography>
            <br />
            <Typography className={classes.body}>
                Bistro Maloleño Events Place & Restaurant
            </Typography>
            <Typography className={classes.body}>
            Capitol View Park, Malolos City, Bulacan
            </Typography>
            <Typography className={classes.body}>
            Restaurant Hours: Monday to Sunday, 10:00am to 10:00pm
            </Typography>
            <Typography className={classes.body}>
            Contact: (044) 305-0645 / 09428247876
            </Typography>
            <Typography className={classes.body}>
            Facebook: www.facebook.com/BistroMaloleno
            </Typography>
            <br />
            <Typography className={classes.body}>
            How to get to Bistro Maloleno
            </Typography>
            <Typography className={classes.body}>
            From SLEX, take the Tabang Exit. From the Exit, drive past Robinson's Place Malolos and cross the flyover. After the flyover, drive past the Capitol of Bulacan and turn left on the intersection . Drive through the street until you reach Bistro Maloleno on the right side of the street.            </Typography>
        </div>
    )
}

export default Delicacies
