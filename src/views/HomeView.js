import React from 'react';

import Hero from '../components/Hero';

function HomeView(props) {

    return(
        <Hero title={props.title} subtitle={props.subtitle} body={props.body} />
    );

}

export default HomeView;