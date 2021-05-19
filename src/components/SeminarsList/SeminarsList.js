import React from 'react';
import {Table, Button} from 'react-bootstrap';


export default function SeminarsList({seminars, joinedSeminars, setJoinedSeminars}){
    const addClicked = (id) => {
        setJoinedSeminars(oldArr => [...joinedSeminars, id])
        console.log(joinedSeminars);
    }

    return(
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
                    {joinedSeminars.includes(seminar.id) ? (
                        <td>Joined</td>
                    ) : (
                        <td><Button onClick={() => addClicked(seminar.id)}>Join</Button></td>
                    )}
                    
                </tr>
            )}
        </tbody>
    </Table>
    )
}