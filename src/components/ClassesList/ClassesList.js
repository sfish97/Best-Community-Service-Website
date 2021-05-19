import React, { useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';

export default function ClassesList({classes}){
    const [rows, setRows] = React.useState([]);
    const [joinClicked, setJoinClicked] = React.useState(false)

    useEffect(() =>{
        createTableRow();
    }, [])

    function createTableRow(){
        var tempArr = [];
        for(var i = 0; i < 5; i++){
            tempArr.push(<h1>Hi</h1>);
        }

        setRows(tempArr);
    }

    const onClicked = (id) => {
        classes.set(id, true);
        if(joinClicked){
            setJoinClicked(false);
        }
        else{
            setJoinClicked(true);
        }
    }

    return(
        <div>
            {joinClicked ? (
                <div>
                <h1>You have sucessfully joined the class. Click the button to add more classes. </h1>
                <Button onClick={() => onClicked(-1)}>View More Classes</Button>
                </div>
            ) 
            : (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ClassId</th>
                        <th>Languages</th>
                        <th>Days</th>
                        <th>Time</th>
                        <th>Start-to-End Date (MM/DD/YYYY)</th>
                        <th>Join the Class</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Spanish</td>
                        <td>Tuesday, Thursday</td>
                        <td>4pm-6pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        
                        {classes.has(1) ? (<td>Joined</td>) : (<td><Button onClick={() => onClicked(1)}>Join</Button></td>)}
                        <th>Free</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Spanish</td>
                        <td>Monday, Wednesday</td>
                        <td>4pm-6pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        {classes.has(2) ? (<td>Joined</td>) : (<td><Button onClick={() => onClicked(2)}>Join</Button></td>)}
                        <th>Free</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Spanish</td>
                        <td>Tuesday, Thursday</td>
                        <td>6pm-8pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        <td><Button>Join</Button></td>
                        <th>$100</th>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Spanish</td>
                        <td>Tuesday, Thursday</td>
                        <td>6pm-8pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        <td><Button>Join</Button></td>
                        <th>$100</th>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>German</td>
                        <td>Monday, Wednesday</td>
                        <td>4pm-6pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        <td><Button>Join</Button></td>
                        <th>$150</th>
                    </tr>
                                        <tr>
                        <td>6</td>
                        <td>French</td>
                        <td>Tuesday, Thursday</td>
                        <td>6pm-8pm</td>
                        <td>03/01/2021 - 04/01/2021</td>
                        <td><Button>Join</Button></td>
                        <th>$150</th>
                    </tr>
                </tbody>
            </Table>
            )}
        </div>
    )
}