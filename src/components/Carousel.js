 import React from 'react';

 import Card from './Card';
 import Container from 'react-bootstrap/Container';

 import Row from 'react-bootstrap/Row';


 import golf from '../assets/images/golf.jpg';
 import generator from '../assets/images/generator.jpg';
 import truffle from '../assets/images/truffle.jpg';
 import notepad from '../assets/images/notepad.jpg';
 import artstack from '../assets/images/artstack.jpg';
 import weather from '../assets/images/weather.jpg';



 class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Golf Quiz',
                    subTitle: 'A timed test of your golfing knowledge.',
                    imgSrc: golf,
                    link: 'https://github....',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Random Password Generator',
                    subTitle: 'Create unique passwords from 8-64 characters long.',                 
                    imgSrc: generator,
                    link: 'https://github....',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Truffle Shuffle',
                    subTitle: 'A group project integrating external API calls to create a fun entertainment application.',                 
                    imgSrc: truffle,
                    link: 'https://github....',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Pad',
                    subTitle: 'An application for keeping and deleting notes.',                 
                    imgSrc: notepad,
                    link: 'https://github....',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Art Stack',
                    subTitle: 'A group project, we created an online gallery application for local artists to exhibit their work.',                 
                    imgSrc: artstack,
                    link: 'https://github....',
                    selected: false
                },
                {
                    id: 5,
                    title: 'API Weather App',
                    subTitle: 'Search for a city, get weather conditions for that day and a 5-day forecast.',
                    imgSrc: weather,
                    link: 'https://github....',
                    selected: false
                },
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
            </Container>            );
    }
 }


 export default Carousel;