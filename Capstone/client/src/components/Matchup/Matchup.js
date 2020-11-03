import React from "react";
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Matchup = ({ matchup }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Away Team</th>
                    <th>Home Team</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{matchup.awayTeam} {matchup.awayOdds}</td>
                    <td>{matchup.homeTeam} {matchup.homeOdds}</td>
                </tr>
            </tbody>
        </Table>
        // [
        //     'Success',
        // ].map((variant, idx) => (
        //     <Card
        //         border="dark"
        //         bg={variant.toLowerCase()}
        //         key={idx}
        //         text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        //         style={{ width: '18rem' }}
        //         className="mb-2"
        //     >
        //         <Card.Header>{matchup.awayTeam} {matchup.awayOdds}
        //             <p>vs.</p> {matchup.homeTeam} {matchup.homeOdds}</Card.Header>
        //     </Card>
    );

}

export default Matchup;