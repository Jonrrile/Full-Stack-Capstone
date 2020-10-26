import React, { useEffect, useContext, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { TeamContext } from "../providers/TeamProvider";
import { useParams } from "react-router-dom";
import Team from "./Team";
import { Link } from "react-router-dom";

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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <Team key={team.id} team={team} />
                    <Link to={`/betsbyteam/${id}`}><Button variant="light">
                        View Bets
                    </Button></Link>
                    <Link to=""><Button variant="light">
                        Place Bet
                    </Button></Link>
                </div>
            </div>
        </div >
    );
};

export default TeamDetails;