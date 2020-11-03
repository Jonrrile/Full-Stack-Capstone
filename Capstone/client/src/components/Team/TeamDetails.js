import React, { useEffect, useContext, useState } from "react";
import { TeamContext } from "../../providers/TeamProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Image, Container, Card } from 'react-bootstrap';

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
            <Card>
                <Card.Img variant="top" src={team.imageLocation} width="250px" height="500px" />
                <Card.Title>
                    {team.name}
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                        +{team.odds}
                    </Card.Text>
                    <Card.Text>
                        {team.fact}
                    </Card.Text>
                    <Link to={`/betsbyteam/${id}`}><Button variant="light">
                        View Bets
                    </Button></Link>
                    <Link to={`/bet/add/${id}`}><Button variant="light">
                        Place Bet
                    </Button></Link>
                </Card.Body>
            </Card>
        </Container >
    );
};

export default TeamDetails;