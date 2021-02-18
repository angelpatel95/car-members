import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/img/Car-Logo.png';
import './styles.css';

// Imports From React-Router-Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';
import { DECLARATION_TYPES } from '@babel/types';

render(
  <React.StrictMode>
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Car Collectors"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <Link to="/"> Car Collecting Members Area</Link>
        </Navbar.Brand>
          {/* Nav Items to the right */}
          <Nav className="move nav" activeKey='/'>

            <Nav.Item>
              <Nav.Link>
                <Link to='/'> Home </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to='/create'> Car Club Members </Link>
              </Nav.Link>
            </Nav.Item>

          </Nav>

      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home title="Collecting Cars" /> 
        </Route>
      <Route path="/create">
        <CreateCar />
      </Route>
      <Route path="/cars">
        <CreateCar />
      </Route>
    </Switch>

  </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
