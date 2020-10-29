import React, { useContext, useEffect, useState } from "react";
import { BetContext } from "../../providers/BetProvider";
import { TeamContext } from "../../providers/TeamProvider";
import { useHistory } from "react-router-dom";
import { Col, Row, Button, Card, CardBody, CardTitle, Table, CardText } from "reactstrap";
import { Link, useParams } from "react-router-dom";


const BetList = () => {
    const { bets, getAllBetsForTeam } = useContext(BetContext);
    const { id } = useParams();
    const history = useHistory();
    //const { teamId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    //I need to calculate the win amount by Potential Profit = ToBetAmount x (Odds/100)
    //Math.floor();


    const [team, setTeam] = useState();
    const { getTeam } = useContext(TeamContext);
    useEffect(() => {
        getTeam(id).then(setTeam);
    }, []);


    useEffect(() => {
        getAllBetsForTeam(id);
        getTeam(id);
    }, []);

    // useEffect(() => {
    //     getTeam(teamId);
    // }, [])
    //const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).firstName;

    const teamname = parseInt(id);

    return (
        <>
            {/* <Link to={`/ team / ${ id }`}>Back to Team</Link> */}
            {bets.length === 0 ? <p>This team has no bets associated.</p> :
                <div className="container">
                    <div>
                        <div>
                            <h2>Active Bets for {id}</h2>
                            {bets && bets.map((bet) => {
                                return (
                                    <Table striped bordered hover>
                                        <thead>
                                            <th>Ticket #</th>
                                            <th>Bet Amount</th>
                                            <th>Win Amount</th>
                                            <th>Placed By</th>
                                        </thead>
                                        <tbody>
                                            <td>{bet.id}</td>
                                            <td>${bet.toBetAmount}</td>
                                            <td>${bet.toBetAmount * (team.odds / 100)}</td>
                                            <Link to={`/ bet / edit / ${bet.id}`}>
                                                Edit Bet
                                            </Link>
                                            <br />
                                            <Link to={`/ bet / delete /${bet.id}`}>
                                                Delete Bet
                                            </Link >
                                        </tbody >
                                    </Table >
                                )
                            })}
                            <Button block className="cancelEdit" type="button" color="danger" isLoading={isLoading}
                                onClick={() => history.goBack()}>
                                {'Go Back'}
                            </Button>
                        </div >
                    </div >
                </div >
            }
        </>
    );
};

export default BetList;