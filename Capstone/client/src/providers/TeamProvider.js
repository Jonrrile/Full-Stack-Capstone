import React, { useState } from "react";
export const TeamContext = React.createContext();

export const TeamProvider = (props) => {
  const [teams, setTeams] = useState([]);

  const getAllTeams = () => {
    return fetch("/api/team")
      .then((res) => res.json())
      .then(setTeams);
  };

  return (
    <TeamContext.Provider value={{ teams, getAllTeams }}>
      {props.children}
    </TeamContext.Provider>
  );
};