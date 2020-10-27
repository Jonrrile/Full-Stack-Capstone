import React, { useContext, useEffect } from "react";
import { BetContext } from "../providers/BetProvider";
import { TeamContext } from "../providers/TeamProvider";
import { Col, Row, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link, useParams } from "react-router-dom";


const BetList = () => {
    const { bets, getAllBetsForTeam } = useContext(BetContext);
    const { team, getTeam } = useContext(TeamContext);
    const { id } = useParams();
    const { teamId } = useParams();

    useEffect(() => {
        getAllBetsForTeam(id);
        getTeam(id);
    }, []);

    //const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).firstName;

    return (
        <>
            {/* <Link to={`/team/${id}`}>Back to Team</Link> */}
            {bets.length === 0 ? <p>This team has no bets associated.</p> :
                <div className="container">
                    <div>
                        <div>
                            {bets && bets.map((bet) => {
                                return (
                                    <Card>
                                        <CardBody>
                                            <CardTitle><strong>Bet Amount:</strong></CardTitle>
                                            <CardText>{bet.toBetAmount}</CardText>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default BetList;