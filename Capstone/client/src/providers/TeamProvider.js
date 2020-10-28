import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const TeamContext = createContext();

export const TeamProvider = (props) => {
  const [teams, setTeams] = useState([]);
  const { getToken } = useContext(UserProfileContext);
  const apiUrl = "/api/team";

  const getAllTeams = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setTeams));


  const getTeam = (id) =>
    getToken().then((token) =>
      fetch(`/api/team/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
    );

  const editTeam = (team) => {
    return getToken().then((token) => {
      fetch(`/api/team/${team.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
          //Having a problem here. 
        },
        body: JSON.stringify(team)
      })
    })
  }



  // const getTeamData = () => {
  //   return fetch("https://api.the-odds-api.com/v3/sports?apiKey=e41356749169d3c9782c88e9aecc16b3")
  //     .then((res) => res.json());
  // };

  return (
    <TeamContext.Provider value={{ teams, getAllTeams, getTeam, editTeam }}>
      {props.children}
    </TeamContext.Provider>
  );
};