import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useAuth } from '../auth_handling/use-auth.js';
import ClassList from '../components/ClassesList/ClassesList.js';
import SeminarsList from '../components/SeminarsList/SeminarsList.js';
import './Classes.css'
import Login from './Login.js';

export default function Classes({classes, seminars, joinedSeminars, setJoinedSeminars}){
    const auth = useAuth();
    const reload = false;

    const reloadFunc = () => {
        reload = false;
    }

    return(
        <div>
        {auth.user ? (
            <div className='main-div'>
                <Container>
                    <div className='classes-header'>
                        <h1>The first step is always the hardest.</h1>
                        <p>But here, we make sure that you too can learn. The Best Community Service provides you <br/>
                            with the best tools and teachers that are willing to pass on their knowlegde. So don't <br/>
                            be afriad, and come learn a new skill today!.    
                        </p>
                        <hr/>
                    </div>
                    <div>
                        <p>Available classes are below. Select a Tab, and if a class suits you, click Join.</p>
                        <Tabs defaultActiveKey="none" id="uncontrolled-tab-example">
                            <Tab eventKey="language" title="Languages">
                                <ClassList name="language" classes={classes}/>
                            </Tab>
                            <Tab eventKey="school" title="Seminars">
                                <SeminarsList seminars={seminars} joinedSeminars={joinedSeminars} setJoinedSeminars={setJoinedSeminars}/>
                            </Tab>
                            <Tab eventKey="other" title="Other">
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </div>
        ) 
        : (
            <div>
                <h3>You must login to see the list of classes</h3>
                <Login/>
            </div>
        )}
        </div>


    )
}