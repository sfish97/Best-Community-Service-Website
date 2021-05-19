import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth_handling/use-auth';
import {Form, Col, Button, Table} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

export default function Account({seminars, setSeminars, id, setId}){
    const auth = useAuth();
    const [selectedSession, setSelectedSession] = React.useState("");
    const [seminarName, setSeminarName] = React.useState("");
    const [seminarDate, setSeminarDate] = React.useState(new Date());
    const [seminarTime, setSeminarTime] = React.useState("");
    const [seminarFee, setSeminarFee] = React.useState("");
    const [isUpdatable, setIsUpdatable] = React.useState(false);
    const [seminarLength, setSeminarLength] = React.useState(1);

    const handleChange = (e) => {
        if(e.target.value == 'seminars'){
            setSelectedSession('seminars');
        }

        var name = e.target.name;
        var val = e.target.value;

        switch (name){
            case 'seminarName':
                setSeminarName(val)
                break;
            case 'seminarDate':
                setSeminarDate(val)
                break;
            case 'seminarTime':
                setSeminarTime(val)
                break;
            case 'seminarFee':
                setSeminarFee(val)
                break;
            case 'seminarLength':
                setSeminarLength(val)
                break;
        }
    }

    const handleSeminarSubmit = (e) => {
        e.preventDefault();
        var date = new Date(seminarDate);
        var json = {
            id,
            seminarName,
            seminarDate: date.toDateString(),
            seminarTime,
            seminarFee,
            seminarLength
        }

        setSeminars(oldArr => [...oldArr, json]);
        const newid = id + 1;
        setId(newid);
    }

    const removeClicked = (id) => {
        const newList = seminars.filter((seminar) => seminar.id !== id);
        setSeminars(newList);
    }

    return(
        <div>
            {auth.user ? (
                <div>
                    <h1>Employee Management</h1>
                    <Form style={{maxWidth: 600, margin: '50px auto'}}>
                        <Form.Label>Select a session to manage</Form.Label>
                        <Form.Control as='select' onChange={handleChange}>
                            <option value='languages'>Language</option>
                            <option value='seminars'>Seminars</option>
                        </Form.Control>
                    </Form>

                {selectedSession =='seminars' ? (
                        <div>
                            <h1>Add a seminar</h1>
                            <Form style={{maxWidth: 600, margin: '50px auto'}} onSubmit={handleSeminarSubmit}>
                                <Form.Row>
                                    <Col sm={3}><Form.Label>Name of Seminar:</Form.Label></Col>
                                    <Col><Form.Control type='text' name='seminarName' value={seminarName} onChange={handleChange}/></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={3}><Form.Label>Date:</Form.Label></Col>
                                    <Col sm={1}><DatePicker onChange={setSeminarDate} value={seminarDate}/></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={3}><Form.Label>Time:</Form.Label></Col>
                                    <Col sm={1}><TimePicker value={seminarTime} onChange={setSeminarTime}/></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={3}><Form.Label>Length(hrs):</Form.Label></Col>
                                    <Col sm={3}><Form.Control type='number' name='seminarLength' value={seminarLength} onChange={handleChange} min={1} max={10}/></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={3}><Form.Label>Fee:</Form.Label></Col>
                                    <Col sm={3}><Form.Control type='number' name='seminarFee' value={seminarFee} onChange={handleChange}/></Col>
                                </Form.Row>
                                <Button style={{marginTop: 25}}type='submit'>Submit</Button>
                            </Form>

                            <div>
                                <h1>Current Seminars</h1>
                                <Table style={{maxWidth: 1100, margin: '5px auto'}}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Length</th>
                                            <th>Fee</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {seminars.map(seminar =>
                                            <tr>
                                                <td>{seminar.seminarName}</td>
                                                <td>{seminar.seminarDate}</td>
                                                <td>{seminar.seminarTime}</td>
                                                <td>{seminar.seminarLength}</td>
                                                <td>{seminar.seminarFee}</td>
                                                <td><Button onClick={() => removeClicked(seminar.id)}>Remove</Button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </div>


                    ) : (<div></div>)}
                </div>
            ) : (
                <Redirect to='/login'/>
            )}
        </div>
    )
}