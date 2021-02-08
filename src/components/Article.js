import React from 'react'
import About from './Articles/About';
import Default from './Default';
import CovidUpdates from './Articles/CovidUpdates'
import Bulakenyo from './Articles/Bulakenyo';
import Festivals from './Articles/Festivals';
import Preparation from './Articles/Preparation';
import Hotlines from './Articles/Hotlines';

function Article({slug}) {

    let article = ''
    switch (slug) {
        case 'About':
            article = <About />
            break;
        case 'CovidUpdates':
            article = <CovidUpdates />
            break;
        case `KuwentongBayan` : 
            article = <Bulakenyo />
            break;
        case `Tradition` : 
            article = <Festivals />
            break;
        case `Preparation` : 
            article = <Preparation />
            break;
        case `Hotlines` : 
            article = <Hotlines />
            break;
        default:
            article = <Default />
            break;
    }
    return (
        <div>
            {article}
        </div>
    )
}

export default Article
