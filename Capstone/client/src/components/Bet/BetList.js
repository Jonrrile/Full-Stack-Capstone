import React, { useContext, useEffect, useState } from "react";
import { BetContext } from "../../providers/BetProvider";
import { TeamContext } from "../../providers/TeamProvider";
import { useHistory } from "react-router-dom";
import { Col, Row, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link, useParams } from "react-router-dom";


const BetList = () => {
    const { bets, getAllBetsForTeam } = useContext(BetContext);
    const { team, getTeam } = useContext(TeamContext);
    const { id } = useParams();
    const history = useHistory();
    const { teamId } = useParams();
    const [isLoading, setIsLoading] = useState(false);


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
                                            <CardTitle><strong>To Win Amount:</strong></CardTitle>
                                            <CardText>{bet.toBetAmount * 10}</CardText>
                                        </CardBody>
                                        <Link to={`/bet/edit/${id}`}><Button variant="light">
                                            Edit Bet
                                            </Button></Link>
                                        <Link to={`/bet/delete/${id}`}><Button variant="light">
                                            Delete Bet
                                            </Button></Link>
                                    </Card>
                                )
                            })}
                            <Button block className="cancelEdit" type="button" color="danger" isLoading={isLoading}
                                onClick={() => history.goBack()}>
                                {'Go Back'}
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default BetList;