import React, { useEffect, useContext, useState } from "react";
import { TeamContext } from "../providers/TeamProvider";
import { useParams } from "react-router-dom";
import Team from "./Team";
import { Link } from "react-router-dom";
import {
    Button, ListGroup, ListGroupItem,
    Card, Container, CardGroup, CardDeck, CardColumns
} from 'react-bootstrap';

const TeamDetails = () => {
    const [team, setTeam] = useState();
    const { getTeam } = useContext(TeamContext);
    const { id } = useParams();

    useEffect(() => {
        getTeam(id).then(setTeam);
    }, []);

    if (!team) {
        return null;
    }

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team.imageLocation} />
                <Card.Body>
                    <Card.Title>
                        {team.name}
                    </Card.Title>
                    <Card.Text>
                        {team.fact}
                    </Card.Text>
                    <Link to={`/betsbyteam/${id}`}><Button variant="light">
                        View Bets
                    </Button></Link>
                    <Link to=""><Button variant="light">
                        Place Bet
                    </Button></Link>
                </Card.Body>
            </Card>
        </Container >
    );
};

export default TeamDetails;