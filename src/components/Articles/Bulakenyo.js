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
        width: '100vw', 
        objectFit: 'cover'
    },
}))
function Bulakenyo() {
    const classes = useStyles()
    const items = [
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/3-4.jpg`, 
            meaning: `Meaning / English Translation: Inin – to be fully cooked / fully ready (as in rice).`,
            example: `Example: Na-inin na po ang sinaing. Maaari na po tayong kumain. (The rice is fully cooked. We can now all eat.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/4-4.jpg`, 
            meaning: `Meaning / English Translation: supil – headband.`,
            example: `Example: Ang ganda ng supil nya. (Her headband looks nice.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/5-3.jpg`, 
            meaning: `Meaning / English Translation: kilik – to carry against one’s hips.`,
            example: `Example: Paki kilik nga ang aking sanggol. (Please carry my baby.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/6-4.jpg`, 
            meaning: `Meaning / English Translation: pangko – carried in one’s arms.`,
            example: `Example: Paki pangko ang prinsesa at inaantok na. (Please carry my princess as she is already sleepy.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/7-4.jpg`, 
            meaning: `Meaning / English Translation: hilam – pain in the eyes due to accidental application of soap / other chemicals, as if while washing the face (hilamos)`,
            example: `Example: Aray! Nahilam ako. (Ouch! My eyes are in pain as the soap got into my eyes.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/9-4.jpg`, 
            meaning: `Meaning / English Translation: paragan – tuck in; (nakaparagan – tucked in).`,
            example: `Example: Dapat naka-paragan ang panloob mong damit. (You should tuck in your undershirt.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/9.png`, 
            meaning: `Meaning / English Translation: bato-balani – magnet.`,
            example: `Example: Pinag-aralan nila ang bata-balani sa Agham. They studied magnets during Science class.`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/11-2.jpg`, 
            meaning: `Meaning / English Translation: tagasaw – weaver ants; Also called as “hantik” or “Ibok” in other parts of Bulacan.`,
            example: `Example: Nakagat ka na ba ng tagasaw? (Have you experienced being bitten by a weaver ant?)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2020/04/12-2.jpg`, 
            meaning: `Meaning / English Translation: urong – to move the plates to the sink for washing. ConTypographyually, in Bulakenyo vocabularies, it is also used to mean the actual washing of the dishes.`,
            example: `Example: Ako na ang mag uurong. (I will do the dishes.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/20.png`, 
            meaning: `Meaning / English Translation: ika / eka – As they say; according to; as per.`,
            example: `Example: “Galit ako sa droga”, eka nga ng pangulo. (“I hate drugs,” said the president.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/21.png`, 
            meaning: `Meaning / English translation: Magigi – low-moving, sluggish, unhurried, too relaxed. The term “makupad” can also mean the same.`,
            example: `Example: Masyado kang magigi.  Huli na tayo sa ating tipanan. (You’re too slow.  We are already late with our appointment.)`
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/24.png`, 
            meaning: `Meaning / English Translation: saukan / sawsawan – dipping sauce`,
            example: ``
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/27.png`, 
            meaning: `Meaning / English Translation: sutil – stubborn; hardheaded.`,
            example: ``
        },
        {
            image: `https://www.bulakenyo.ph/wp-content/uploads/2018/09/26.png`, 
            meaning: `Meaning / English Translation: baribot – grumpy; irritable; in a bad mood; ill-tempered.`,
            example: `Example: Bakit kaya baribot na naman ang bata? (Why is the kid in a bad mood again?)`
        },
    ]
    return (
        <div>
            <Typography className={classes.title}>'ika Nga Namin sa Bulacan!</Typography>
            <Typography className={classes.body}>Bulacan, as a part of the Tagalog-speaking provinces in the country,  has had its own set of words and accents that set it apart from other Tagalogs. Here are selected Bulakenyo vocabularies that Bulakenyos love to use in their daily conversations.</Typography>
            <Typography>{'\n'}</Typography>
            <Typography className={classes.body}>
                But before we start with our Bulakenyo vocabularies, here’s a bit of trivia for everyone. The name “Bulakan” was etymologically derived from the Tagalog word “bulak,” which means cotton.  Bulacan was named as such due to the abundance of cotton growing in the region.
            </Typography>
            <Typography>{'\n'}</Typography>
            <Typography className={classes.body}>
                Read through these Bulakenyo vocabularies, and brush up on your Filipino / Tagalog.
            </Typography>
            {
                items.map((item, index) => (
                    <div key={index} style={{marginTop: 20, marginBottom: 20}}>
                        <img src={item.image} className={classes.image} alt={item.image}/>
                        <Typography className={classes.body}>{item.meaning}</Typography>
                        <Typography className={classes.body}>{item.example}</Typography>
                    </div>
                ))
            }
        </div>
    )
}

export default Bulakenyo
