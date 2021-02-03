import React from 'react'
import About from './About';
import Default from './Default';
import CovidUpdates from './CovidUpdates'

function Article({slug}) {

    let article = ''
    switch (slug) {
        case 'About':
            article = <About />
            break;
        case 'CovidUpdates':
            article = <CovidUpdates />
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
