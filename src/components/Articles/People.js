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
    }
}))

function People() {
    const classes = useStyles()
    const people = [
        { name: `Guillermo Tolentino `, desc: `is a product of the Revival period in Philippine art. Returning from Europe (where he was enrolled at the Royal Academy of Fine Arts, Rome) in 1925, he was appointed as professor at the UP School of Fine Arts where the idea also of executing a monument for national heroes `},
        { name: `Alberta Uitangcoy-Santos `, desc: `(November 20, 1865 – June 1, 1953) was the leader of The Women of Malolos, and is revered for her contributions to Philippine women's rights, the fight for Philippine independence, and a large part of the traditional cuisine of the city of Malolos, Bulacan, in the Philippines during the Spanish and American colonial periods. She is known as the matriarch of the Uitangcoy-Santos House, which has been declared a national heritage house by the National Historical Commission of the Philippines, and currently houses the Museum of the Women of Malolos which is now curated by her fifth-generation grandson, Carlo Herrera.`},
        { name: `Geminiano T. de Ocampo `, desc: `was a Filipino ophthalmologist known to some as the "Father of Modern Philippine Ophthalmology". He was the founder of the Philippine Eye Bank. He graduated valedictorian of his class at the Bulacan High School in 1926.
        He established the first eye hospital in the Philippines, De Ocampo Eye Hospital (1952) and the first Filipino President of the Philippine Ophthalmological Society (1958). He was the first Filipino to design a corneal dissector that was manufactured in the US. He received the Jose Rizal Medal in Ophthalmology from the Asia Pacific Academy of Ophthalmology and was named National Scientist of the Philippines in 1982.
        `},
        { name: `Nikko Natividad `, desc: `(born February 13, 1993) is a Filipino celebrity, model and dancer, who became popular after winning ABS-CBN's noontime variety show It's Showtime's Gandang Lalake segment.  He is also known as one of the members of #Hashtags of the same noontime variety show. 
        In July 2016 he was selected as one of the housemates of the 7th season of Pinoy Big Brother as a 2-in-1 housemate with McCoy de Leon. Inside the house, he admitted being a father to a child out of marriage.] He was also chosen to be the Most Valuable Housemate in his stay at the house. They were hailed as the 6th Lucky Big Placer. 
        `}, 
        { name: `Vergel Meneses`, desc: `(born January 14, 1969, Malolos, Bulacan) is a Filipino politician, serving as mayor of the municipality of Bulakan, Bulacan. He is also a retired professional basketball player who played in the Philippine Basketball Association and the current head coach of the JRU Heavy Bombers of the NCAA Philippines. He is also a former Philippine Basketball Association Most Valuable Player and a many-time member of the Philippine National team. `}, 
        { name: `Shaira Lenn Osuna Roberto `, desc: `(born August 9, 1996 in Nagcarlan, Laguna), professionally known as Sanya Lopez, is a Filipina actress and singer known for portrayal in the afternoon series, The Half Sisters, as Lorna. In 2016, Lopez gained media attention and rose to fame after being announced as the new Hara Danaya of the 2016 television remake of GMA Network's Encantadia`}, 
        { name: `Carlos Herrera `, desc: `is a reporter for KTLA 5 News. He joined the KTLA family in October 2020 after spending seven years working at several TV news stations in California and Arizona.`}, 
        { name: `Joonee Gamboa `, desc: `(born Jose Espineli Gamboa; August 7, 1936) is a Filipino actor and voice actor. As veteran actor, he appeared in more than 145 movies and television shows.`}, 
        { name: `Salvador Estrella`, desc:`(20 August 1856 – 19 October 1932) was a Filipino general who fought in the Philippine Revolution and the Philippine–American War. For his courage in battle, he earned the moniker "red blooded.” `},
        { name: `Dr. José María Delgado`, desc: `(June 20, 1887, Malolos - December 24, 1978) was the first Philippine Ambassador to the Vatican. He was the cousin of Francisco Afan Delgado, descendant of General Martín Teófilo Delgado.`}, 
        { name: `Jose B. Cruz Jr.`, desc: `is a noted control theorist and a Distinguished Professor of Engineering in the Department of Electrical and Computer Engineering, Ohio State University. He is a member of the National Academy of Engineering, a Fellow of the American Association for the Advancement of Science, the Institute of Electrical and Electronics Engineers, the International Federation of Automatic Control, and the American Society for Engineering Education. He is also the recipient of the IEEE Centennial Medal in 1984, the Richard E. Bellman Control Heritage Award in 1994, and the IEEE James H. Mulligan, Jr. Education Medal in 2009. `}, 
        { name: `Cheryl Kathleen Cosim-Alvarez `, desc: `(born February 7, 1974) is a Filipina journalist, news anchor and TV host. She began her career as a journalist at ABS-CBN News and Current Affairs, hosting the programs Magandang Umaga, Pilipinas, Salamat Dok, the hourly news updates, and a radio show on DZMM. After 14 years at ABS-CBN, she joined News5, the news department of TV5 as an on-air talent in summer 2010.] Cosim became the co-anchor on Aksyon with Erwin Tulfo. In 2014, she became the news anchor on the late-night newscast Aksyon Tonite.`}, 
        { name: `José Chichioco Cojuangco`, desc: `(July 3, 1896 – August 21, 1976) was a Filipino politician who served as Representative of the 1st District of Tarlac in the Philippines from 1934 to 1946. Cojuangco is one of the patriarchs of the Cojuangco clan. He was the father and grandfather of former Philippine presidents Corazon Aquino and Benigno Aquino III, respectively. His other grandchildren include actresses Kris Aquino and Mikee Cojuangco.`}, 
        { name: `Darylle Francis Bernardo Salvador `, desc: `(born April 14, 1992 in Bulacan, Philippines), also known by his stage name Dar Bernardo, is a Filipino television actor, model and singer. He started as a commercial model until his debut as an actor in a primetime series under ABS-CBN, Ina, Kapatid, Anak`},
        { name: `Angelito "Mang Lito" Antonio`, desc: `(born February 3, 1939)[ is a Filipino painter. He was born in Malolos, Bulacan. Since he was young, he was already earning titles and awards from various contests. He studied at the University of Santo Tomas (UST) and obtained his bachelor's degree in Fine Arts in 1963, he then became one of the faculties where he taught for many years. He is married to the artist Norma Belleza, with three children Marcel, Emil, and Fatima who are also painters. `}, 
    ]
    return (
        <div>
            <Typography className={classes.title}>
                PEOPLE OF MALOLOS
            </Typography>
            {people.map((person, index) => (
                <div key={index} style={{marginTop: 20, marginBottom: 10}}>
                    <Typography className={classes.title}>{person.name}</Typography> 
                    <Typography className={classes.body}>{person.desc}</Typography> 
                </div>
            ))}
        </div>
    )
}

export default People