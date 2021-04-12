import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Accordion,
  Card,
  Tabs,
  Tab,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Table,
  Button
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <header>
            <Navbar expand="lg" variant="dark" bg="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#/">Home</Nav.Link>
                  <Nav.Link href="#/about">About</Nav.Link>
                  {/* <Link to="/">Home</Link> */}
                  {/* <Nav.Link href="topics">Topics</Nav.Link>
                  <Nav.Link href="place">Places</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <hr />
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