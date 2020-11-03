import React, { useContext, useEffect } from "react";
import { MatchupContext } from "../../providers/MatchupProvider";
import { CardColumns, Container } from 'react-bootstrap';
import Matchup from './Matchup';

const MatchupList = () => {
    const { matchups, getAllMatchups } = useContext(MatchupContext);

    useEffect(() => {
        getAllMatchups();
    }, []);

    return (
        <div>
            <Container fluid="md">
                <CardColumns>
                    {matchups.map((matchup) => (
                        <Matchup key={matchup.id} matchup={matchup} />
                    ))}
                </CardColumns>
            </Container >
        </div>
    );
};

export default MatchupList;