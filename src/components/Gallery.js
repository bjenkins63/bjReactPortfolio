import React from 'react';

import Card from './Card';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import primeroast from '../assets/images/primeroast.jpg';
import fiftytwo from '../assets/images/fiftytwo.jpg';
import dated from '../assets/images/dated.jpg';
import illustration from '../assets/images/illustration.jpg';
import smokers from '../assets/images/smokers.jpg';
import pinegrove from '../assets/images/pinegrove.jpg';





class Gallery extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
           items: [
               {
                   id: 0,
                   title: 'Prime Roast, client',
                   subTitle: 'Branded print materials',
                   imgSrc: primeroast,
                   link: 'http://primeroast.com/',
                   selected: false
               },
               {
                   id: 1,
                   title: 'Fifty-Two',
                   subTitle: 'KSC exhibit',                 
                   imgSrc: fiftytwo,
                   link: 'http://jenkinsart.blogspot.com/',
                   selected: false
               },
               {
                   id: 2,
                   title: 'Dated',
                   subTitle: 'An art project',                 
                   imgSrc: dated,
                   link: 'http://jenkinsart.blogspot.com/',
                   selected: false
               },
               {
                   id: 3,
                   title: 'Illustration Samples',
                   subTitle: 'Covers, logos, etc.',                 
                   imgSrc: illustration,                  
                   link: 'http://jenkinsart.blogspot.com/',
                   selected: false
               },
               {
                    id: 4,
                    title: 'Pine Grove Springs GC, client',
                    subTitle: 'Print, social media',                 
                    imgSrc: pinegrove,                  
                    link: 'https://www.instagram.com/pine_grove_springs_cc/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Smokers',
                    subTitle: 'An art project',                 
                    imgSrc: smokers,                  
                    link: 'http://jenkinsart.blogspot.com/',
                    selected: false
                }
           ]

       }
   }


   handleCardClick = (id, card) => {
       let items = [...this.state.items];

       items[id].selected = items[id].selected ? false : true;

       items.forEach(item => {
           if(item.id !== id) {
               item.selected = false;
           }
       });

       this.setState( {
           items
       });
   }


   makeItems = (items) => {
       return items.map(item => {
           return <Card item={item} click={(e => this.handleCardClick(item.id, e))}  key={item.id}/>
       })


   }



   render() {
       return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
           </Container>            
           );
   }
}


export default Gallery;