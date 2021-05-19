import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Classes from './pages/Classes'
import Catering from './pages/Catering'
import Shuttle from './pages/Shuttle'
import About from './pages/About'
import { Container, Row, Col } from 'react-bootstrap';
import { ProvideAuth, useAuth } from './auth_handling/use-auth';
import Login from './pages/Login';
import Donate from './pages/Donate';
import Signup from './pages/Signup';
import EquipmentRental from './pages/EquipmentRental';
import Account from './pages/Account';
import HomeCare from './pages/HomeCare';

/**
 *  If updating links here, make sure to update links in NavigationBar.js
 */
function App(){
  const classes = new Map();
  const [seminars, setSeminars] = React.useState([]);
  const [joinedSeminars, setJoinedSeminars] = React.useState([]);
  const [id, setId] = React.useState(1);

  return(
    <ProvideAuth>
      <Router>
        <div className="App">
          <div>
            <NavigationBar/>
          </div>


          <Switch>
            <Route exact path='/services/equipment-rental'>
              <EquipmentRental/>
            </Route>

            <Route exact path='/services/classes'>
              <Classes classes={classes} seminars={seminars} joinedSeminars={joinedSeminars} setJoinedSeminars={setJoinedSeminars}/>
            </Route>

            <Route exact path='/services/catering'>
              <Catering/>
            </Route>

            <Route exact path='/services/shuttle'>
              <Shuttle/>
            </Route>

            <Route exact path='/services/home-care'>
              <HomeCare/>
            </Route>

            <Route exact path='/about'>
              <About/>
            </Route>

            <Route exact path='/login'>
              <Login/>
            </Route>

            <Route exact path='/donate'>
              <Donate/>
            </Route>

            <Route exact path='/signout'>
              <Home auth={false}/>
            </Route>

            <Route exact path='/signup'>
              <Signup/>
            </Route>

            <Route exact path='/account'>
              <Account seminars={seminars} setSeminars={setSeminars} id={id} setId={setId}/>
            </Route>

            <Route exact path='/'>
              <Home/>
            </Route>
          </Switch>

          <div className='footerDiv' style={{marginTop: '100vh'}}>
            <footer className='footer'>
                    <Container className='footer-container'>
                        <Row>
                            <Col>
                                <p>Copyright 2021</p>
                            </Col>
                            <Col>
                                <p>Best Community Service<br/>
                                    123 Address Ave.<br/>
                                    City, State 12345<br/><br/>
                                    123-555-6789<br/>
                                    emailAddress@temp.com
                                </p>

                            </Col>
                        </Row>
                    </Container>
            </footer>
          </div>

        </div>
      </Router>
    </ProvideAuth>
  )

}

export default App;
