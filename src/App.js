import React, { Component } from 'react';
import { 
  HashRouter, 
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <header>
            <Navbar expand="lg" variant="dark" bg="dark">
              <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#/">Home</Nav.Link>
                  <Nav.Link href="#/about">About</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;