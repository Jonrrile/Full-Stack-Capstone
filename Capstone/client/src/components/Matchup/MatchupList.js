import React, { useContext, useEffect } from "react";
import { MatchupContext } from "../../providers/MatchupProvider";
import { CardColumns, Navbar, Container, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import Matchup from './Matchup';


const MatchupList = () => {
    const { matchups, getAllMatchups } = useContext(MatchupContext);

    useEffect(() => {
        getAllMatchups();
    }, []);

    const MatchupCards = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginBottom: "1rem",
        padding: "2rem"
    }

    const NewsList = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        marginLeft: "1rem",
        alignItems: "flex-start",
        padding: "2rem"
    }

    const Container = {
        display: "flex",
        flexDirection: "column"
    }
    const UnderBanner = {
        display: "flex",
        flexDirection: "row",
        padding: "2rem"
    }

    const UnderBannerLeft = {
        display: "flex",
        flexDirection: "column",
        flex: 3.5,
        padding: "2rem",
    }

    const UnderBannerRight = {
        flex: 1,
        padding: "2rem",
    }
    return (
        <main style={Container}>
            <Jumbotron className="jumbotron"><h1><i>BetOnIt!</i></h1></Jumbotron>
            <div style={UnderBanner}>
                <div style={UnderBannerLeft} className="footballField">
                    <h3 className="matchupHeader">Week 9 Matchups & Odds</h3>
                    <article style={MatchupCards}>
                        {/* <h5>Week 9 Games & Odds</h5> */}
                        {matchups.map((matchup) => (
                            <Matchup key={matchup.id} matchup={matchup} />
                        ))}
                    </article>
                </div>
                <div className="footballNews" style={UnderBannerRight}>
                    <article style={NewsList}>

                        <ListGroup>
                            <h3>News</h3>
                            <ListGroup.Item>
                                <a href="https://www.nfl.com/news/nfl-power-rankings-week-9-seahawks-leapfrog-ravens-and-packers">Week 9 Power Rankings</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="https://www.nfl.com/news/2021-nfl-draft-order-giants-no-2-cowboys-patriots-in-top-10">Current Projected Draft Order</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="https://www.cbssports.com/nfl/news/nfl-odds-lines-spreads-picks-predictions-for-week-9-2020-proven-model-backing-bills-texans/">Betting Predictions for Week 9</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="https://www.nfl.com/news/2020-nfl-trade-deadline-grades-assessing-five-notable-moves">NFL 2020 Trade Dealine Grades</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="https://www.nfl.com/news/wednesday-s-nfl-injury-and-roster-news-for-week-9">Week 9 Injury Roundup</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default MatchupList;