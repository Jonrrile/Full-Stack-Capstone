import React from "react";
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Matchup = ({ matchup }) => {
    return (
        [
            'Dark',
        ].map((variant, idx) => (
            <Card
                border="success"
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>{matchup.awayTeam} ({matchup.awayOdds})<br />
                    {matchup.homeTeam} ({matchup.homeOdds})</Card.Header>
            </Card>
        )));

}

export default Matchup;