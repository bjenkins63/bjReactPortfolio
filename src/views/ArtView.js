import React from 'react';

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';


function ArtView(props) {

    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} body={props.body} />
            <Gallery />
        </div> 
    );

}

export default ArtView;