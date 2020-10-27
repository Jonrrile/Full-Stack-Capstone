import React, { useContext, useEffect } from "react";
import { TeamContext } from "../providers/TeamProvider";
import { Button, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import Team from "./Team";

const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <Container>
      <h2>Odds to win the SuperBowl as of 10/24/2020</h2>
      {teams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </Container >
  );
};

export default TeamList;