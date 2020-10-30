import React, { useEffect, useContext, useState } from "react";
import { TeamContext } from "../../providers/TeamProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Image, Container } from 'react-bootstrap';

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
            <Image src={team.imageLocation} rounded />
            <h2>
                {team.name}
            </h2>
            <h2>
                +{team.odds}
            </h2>
            <p>
                {team.fact}
            </p>
            <Link to={`/betsbyteam/${id}`}><Button variant="light">
                View Bets
                    </Button></Link>
            <Link to={`/bet/add/${id}`}><Button variant="light">
                Place Bet
                    </Button></Link>
        </Container >
    );
};

export default TeamDetails;