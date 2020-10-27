import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TeamList from "./TeamList";
import Home from "./Home";
import Login from "./Login";
import TeamDetails from "./TeamDetails";
import BetList from "./BetList";
import Register from "./Register";

import { UserProfileContext } from "../providers/UserProfileProvider";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  // let teamCollection = []

  // const getTeamData = () => {
  //   return fetch("https://api.the-odds-api.com/v3/sports?apiKey=e41356749169d3c9782c88e9aecc16b3")
  //     .then((httpResponse) => {
  //       return httpResponse.json()
  //     }
  //     ).then((arrayOfTeams) => {
  //       teamCollection = arrayOfTeams
  //     }
  //     )
  // };

  // console.log(teamCollection);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/teams">
        {isLoggedIn ? <TeamList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/team/:id">
        {isLoggedIn ? <TeamDetails /> : <Redirect to="/login" />}
      </Route>
      <Route path="/betsbyteam/:id" exact>
        {isLoggedIn ? <BetList /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

