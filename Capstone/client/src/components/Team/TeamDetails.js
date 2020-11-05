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

    const DetailsStyle = {
        paddingTop: "3rem",
        width: "400px"
    }

    return (
        <Container style={DetailsStyle}>
            <Image src={team.imageLocation} width="300px" height="250px" />
            <h3>
                {team.name}
            </h3>
            <p>
                +{team.odds}
            </p>
            <p>
                {team.fact}
            </p>
            <Link to={`/betsbyteam/${id}`}><Button variant="dark">
                View Bets
                    </Button></Link>
            <Link to={`/bet/add/${id}`}><Button variant="dark">
                Place Bet
                    </Button></Link>
        </Container >
    );
};

export default TeamDetails;