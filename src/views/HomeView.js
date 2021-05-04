import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';


function HomeView(props) {

    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} body={props.body} />
            <Carousel />
        </div> 
    );

}

export default HomeView;