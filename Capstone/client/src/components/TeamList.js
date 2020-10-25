import React, { useContext, useEffect } from "react";
import { TeamContext } from "../providers/TeamProvider";

const TeamList = () => {
  const { teams, getAllTeams } = useContext(TeamContext);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <div key={team.id}>
          <p>
            <strong>{team.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeamList;