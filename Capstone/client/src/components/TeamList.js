import React, { useContext, useEffect } from "react";
import { TeamContext } from "../providers/TeamProvider";
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Team from "./Team";

const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </div >
  );
};

export default TeamList;