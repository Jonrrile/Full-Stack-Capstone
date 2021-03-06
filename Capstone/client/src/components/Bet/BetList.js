import React, { useContext, useEffect, useState } from "react";
import { BetContext } from "../../providers/BetProvider";
import { TeamContext } from "../../providers/TeamProvider";
import { useHistory } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { Link, useParams } from "react-router-dom";

const BetList = () => {
    const { bets, getAllBetsForTeam } = useContext(BetContext);
    const { id } = useParams();
    const history = useHistory();
    const { teamId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const [team, setTeam] = useState({
    });
    const { getTeam } = useContext(TeamContext);
    useEffect(() => {
        getTeam(id).then(setTeam);
    }, []);

    useEffect(() => {
        getAllBetsForTeam(id);
        getTeam(id);
    }, []);

    useEffect(() => {
        getTeam(teamId);
    }, [])
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    const BetListStyle = {
        paddingTop: "3rem"
    }

    return (
        <>
            {bets.length === 0 ? <div style={BetListStyle}><h2>Active Bets for {team.name}</h2> <br />
                <Button color="danger" isLoading={isLoading}
                    href="/teams">
                    {'Back to Teams'}
                </Button></div> :
                <div className="container">
                    <div>
                        <div>
                            <div style={BetListStyle}>
                                <h2>Active Bets for {team.name}</h2>
                            </div>
                            {bets && bets.map((bet) => {
                                if (currentUser == bet.userProfileId) {
                                    return (
                                        <Table striped bordered hover>
                                            <thead>
                                                <th>Ticket #</th>
                                                <th>Bet Amount</th>
                                                <th>Team Odds</th>
                                                <th>Potential Winnings</th>
                                                <th></th>
                                            </thead>
                                            <tbody>
                                                <td>{bet.id}</td>
                                                <td>${bet.toBetAmount}</td>
                                                <td>{team.odds}</td>
                                                <td>${bet.toBetAmount * (team.odds / 100)}</td>
                                                <Link to={`/bet/edit/${bet.id}`}>
                                                    Edit Bet
                                            </Link>
                                                <br />
                                                <Link to={`/bet/delete/${bet.id}`}>
                                                    Delete Bet
                                            </Link >
                                            </tbody >
                                        </Table >

                                    )
                                } else {
                                    return (
                                        <div style={BetListStyle}>
                                            <input type="hidden"></input>
                                        </div>
                                    )
                                }
                            })}
                            <Button color="danger" isLoading={isLoading}
                                href="/teams">
                                {'Back to Teams'}
                            </Button>
                        </div>
                    </div >
                </div >
            }
        </>
    );
};

export default BetList;