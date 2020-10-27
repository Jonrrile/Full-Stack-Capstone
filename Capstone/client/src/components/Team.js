import React from "react";
import {
    Button, ListGroup, ListGroupItem,
    Card, CardGroup, CardDeck, CardColumns
} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Team = ({ team }) => {
    return (
        <CardColumns>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team.imageLocation} />
                <Card.Body>
                    <Card.Title>{team.name}</Card.Title>
                    <Button variant="light">
                        <Link to={`/team/${team.id}`}>
                            +{team.odds}
                        </Link>
                    </Button>
                    <Button variant="light">
                        <Link to={`/team/edit/${team.id}`}>
                            Adjust Odds
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </CardColumns>


    );
}

export default Team;