import React, { useContext, useEffect } from "react";
import { TeamContext } from "../providers/TeamProvider";
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <ListGroup>
      {teams.map((team) => (
        <ListGroup key={team.id}>
          <ListGroup.Item>{team.name} <br />
            <Button variant="light">+{team.odds}
              {/* <input type="checkbox" class="form-check-input" id="exampleCheck1">
              </input> */}
            </Button></ListGroup.Item>

        </ListGroup>
      ))}
    </ListGroup>
  );
};

export default TeamList;