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
        marginTop: 10,
        marginBottom: 10,
    },
}))
function Festivals() {
    const classes = useStyles()
    const feasts = [
        {
            title: 'Singkaban Festival',
            content1: `Singkaban Festival is a yearly common occasion of Bulacan where Bulakenyo culture and expressions are included in seven days in length festivity. It exhibits the conventional crafts of the scholarly frame "Balagtasan", folk moves, and customary tunes known as kundiman. The fundamental concentration however, is on the singkaban, a Bulakenyo craft of making a passage curve and other enlivening materials for the most part from bamboo. The headliner of the celebration is the road move and buoy parade where agents from ious Bulacan towns, to the extent San Jose del Monte in the southeast and San Miguel in the north, travel to Malolos amid the celebration season.`,
            content2: `These occasions exhibit Bulacan's neighborhood culture, legacy, and imaginativeness, and the different towns' entrances highlight everything Bulakenyo. The singkaban bamboo fine arts, after which the celebration was named, is a noticeable subject, particularly in the passage of Hagonoy town. The subject shows up as artists' crowns, the curve and setting of the Desposorio, and as parts of the artists' ensembles.Guiguinto's Halamanan Festival, San Ildefonso's Gulay Festival, Pandi's Baro't Saya Festival, Plaridel's Goto Festival, San Jose del Monte's Camotes Festival, Bustos' Minasa Festival, and Baliwag's Buntal Hat Festival are only a portion of the neighborhood celebrations that partook in the bright road moving amid the past Singkaban celebrations.`,
            content3: `Not at all like different well known celebrations around the Philippines which highlight Mardi Gras-style party, a large portion of Singkaban Festival sections remain consistent with the nearby culture of Bulacan. This is obvious in Singkaban's Santa Cruzan subject in which the utilization of the baro't saya, the Maria Clara-style outfit, the camisa chino, and the singkaban is plenteous.`,
            images:[
                `https://kapampangantraveller.files.wordpress.com/2019/09/singkaban-festival-2019-malolos-bulacan.jpg`,
                `https://4.bp.blogspot.com/_sm-Eb8kPvW4/SrCNtWVgcRI/AAAAAAAAAH8/3lL-PINxtgw/w1200-h630-p-k-no-nu/m3clicks_singkaban+2009_parade+%2820%29.jpg`,
                `https://kapampangantraveller.files.wordpress.com/2019/09/singkaban-festival-2019-float-parade-2.jpg?w=600`
            ]
        },
        {
            title: 'Sto Niño de Malolos Festival',
            content1: `The city of Malolos, Bulacan comes alive as the Sto Niño de Malolos Festival takes place on the last Sunday of January.  Visitors from all over Luzon and beyond come in droves to take part in the festivities and pay homage to the Santo Niño.`,
            content2: `The Sto Niño de Malolos Festival is held during the last Sunday of January, The biggest and largest expression of devotion to the Holy Child Jesus in the Luzon island, celebrated every last Sunday of January. The festivities begin with an exhibit of "Santo Niño" (Holy Child) and culminate in a grand procession of hundreds of folk, antique and new statues of the Holy Child in different depictions. The highlight of this festival is the hundred year-old antique miraculous image of Senor Sto Nino de Malolos.`,
            content3: ``,
            images:[
                `https://4.bp.blogspot.com/-p072AwkerYk/XEwpKfFD2pI/AAAAAAAAJiQ/SwoKQEaAER0mo3vTJKXveHBUvp7ymKMEwCLcBGAs/s1600/1548490474978_FullSizeRender.jpg`,
                `https://www.catholicsandcultures.org/sites/default/files/pages/sto.nino_malolos_city_bulacan.mp4_.00_17_11_20.still012.jpg`,
                `https://www.catholicsandcultures.org/sites/default/files/pages/sto.nino_malolos_city_bulacan.mp4_.00_36_03_00.still022.jpg`
            ]
        },
        {
            title: `Pista ng Barihan`,
            content1: `This event is held every year on Trinity Sunday and is commonly called Pista ng Santisima Trinidad. The festival is named as such because baranggays Pinagbakahan and Santisima Trinidad were once annexed to Barangay Barihan. The festival traces back to the 19th century.`,
            content2: `Commonly called Pista ng Santisima Trinidad because the barangays of Santisima Trinidad and Pinagbakahan were once annexed to Barangay Barihan`,
            content3: `This fiesta started since 19th century where thousands of people attending this fiesta to pray for petition and wishes also to view the procession of three, miraculous and highly venerated antique icons of the Holy Trinity`,
            images: [
                `https://bulacanphotoessay.weebly.com/uploads/3/1/6/4/31641693/900850_orig.jpg`,
                `https://sanlazarodebetania.files.wordpress.com/2017/06/19055866_1538088092888641_5041831797782256678_o.jpg?w=621&h=466`,
                `https://sanlazarodebetania.files.wordpress.com/2017/06/10480568_1098236216861263_8990436083121683245_o.jpg?w=579&h=579`
            ]
        }

        
    ]
    return (
        <div>
            <Typography className={classes.title}>Fiestas or Feasts of Malolos, Bulacan</Typography>
            {
                feasts.map((feast, index) => (
                    <div key={index} style={{marginTop: 20, marginBottom: 20}}>
                        <Typography className={classes.title} style={{color: '#000'}}>
                            {feast.title}
                        </Typography>
                        <Typography className={classes.body}>{feast.content1}</Typography>
                        <img src={feast.images[0]} alt={index} className={classes.image} />
                        <Typography className={classes.body}>{feast.content2}</Typography>
                        <img src={feast.images[1]} alt={index} className={classes.image} />
                        <Typography className={classes.body}>{feast.content3}</Typography>
                        <img src={feast.images[2]} alt={index} className={classes.image} />
                    </div>
                ))
            }
        </div>
    )
}

export default Festivals
