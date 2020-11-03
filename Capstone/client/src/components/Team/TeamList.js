import React, { useContext, useEffect } from "react";
import { TeamContext } from "../../providers/TeamProvider";
import { CardColumns, Container } from 'react-bootstrap';
import Team from "./Team";

const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  const TeamHeader = {
    textAlign: "center",
    fontFamily: "Georgia, Times, serif",
    fontSize: "28px"
  }

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      <header style={TeamHeader}>Take your team to the <strong>Super Bowl</strong>!</header>
      <p style={TeamHeader}>Adjust the odds for your favorite team and place mock bets.</p>
      <Container fluid="md">

        {teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}

      </Container >
    </div>
  );
};

export default TeamList;