import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Matchup = ({ matchup }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{matchup.homeTeam}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Matchup;