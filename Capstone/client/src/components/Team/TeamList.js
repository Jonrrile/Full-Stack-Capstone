import React, { useContext, useEffect } from "react";
import { TeamContext } from "../../providers/TeamProvider";
import { CardColumns, Container } from 'react-bootstrap';
import Team from "./Team";

const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      <h2>Odds to win the SuperBowl</h2>
      <h6>Simply click on 'Adjust Odds' if you want to adjust or change odds for your favorite team!</h6>
      <Container fluid="md">
        <CardColumns>
          {teams.map((team) => (
            <Team key={team.id} team={team} />
          ))}
        </CardColumns>
      </Container >
    </div>
  );
};

export default TeamList;