import React, { useContext, useEffect } from "react";
import { MatchupContext } from "../../providers/MatchupProvider";
import { CardColumns, Container, Jumbotron } from 'react-bootstrap';
import Matchup from './Matchup';

const MatchupList = () => {
    const { matchups, getAllMatchups } = useContext(MatchupContext);

    useEffect(() => {
        getAllMatchups();
    }, []);

    return (
        <div>
            <Jumbotron>
                <h1>Welcome to BetOnIt!</h1>
            </Jumbotron>
            <h5>Week 9 Games & Odds</h5>
            <Container fluid="md">
                <CardColumns>
                    {matchups.map((matchup) => (
                        <Matchup key={matchup.id} matchup={matchup} />
                    ))}
                </CardColumns>
            </Container >
            <Container>
                <h5>News</h5>
                <a href="https://www.nfl.com/news/nfl-power-rankings-week-9-seahawks-leapfrog-ravens-and-packers">Week 9 Power Rankings</a>
                < br />
                <a href="https://www.nfl.com/news/2021-nfl-draft-order-giants-no-2-cowboys-patriots-in-top-10">Current Projected Draft Order</a>
                < br />
                <a href="https://www.cbssports.com/nfl/news/nfl-odds-lines-spreads-picks-predictions-for-week-9-2020-proven-model-backing-bills-texans/">Betting Predictions for Week 9</a>
                < br />
                <a href="https://www.newschannel5.com/news/online-sports-betting-goes-live-in-tennessee">Sports Betting Goes Live in Tennessee</a>
            </Container>
        </div>
    );
};

export default MatchupList;