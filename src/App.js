import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'
import ArtView from './views/ArtView'
import ContactView from './views/ContactView'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Brian Jenkins',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Art & Design', path: '/art'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Brian Jenkins Art & Design',
        subtitle: 'art, design and web development portfolio',
        body: 'Check out a sample of my web development projects below:'
      },
      about: {
        title: 'About Me'
      },
      art: {
        title: 'A sample of art and design projects'
      },
      contact: {
        title: 'Let\'s talk'
      },
    }
  }

render() {
  return (
    <Router>
      <Container className="p=0" fluid={true}>

        <Navbar className="border-bottom" bg="trasparent" expand="lg">
          <Navbar.Brand>Brian Jenkins</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/art">Art/Design</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <Route path="/" render={() => <HomeView title={this.state.title} subtitle={this.state.home.subtitle} body={this.state.home.body} />} />
        <Route path="/about" exact render={() => <AboutView title={this.state.about.title}/>} />
        <Route path="/art" exact render={() => <ArtView title={this.state.art.title} />} />
        <Route path="/contact" exact render={() => <ContactView title={this.state.contact.title} />} />



        <Footer />


      </Container>

    </Router>
  );  
  } 
};

export default App;
