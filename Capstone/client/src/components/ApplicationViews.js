import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TeamList from "./Team/TeamList";
import Login from "./Login";
import TeamDetails from "./Team/TeamDetails";
import BetList from "./Bet/BetList";
import Register from "./Register";
import PlaceBet from "./Bet/PlaceBetForm";
import { UserProfileContext } from "../providers/UserProfileProvider";
import EditTeam from "./Team/EditTeamOdds";
import DeleteBet from "./Bet/DeleteBet";
import EditBet from "./Bet/EditBet";
import MatchupList from "./Matchup/MatchupList";
import Faq from "./FAQ/FAQList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <Switch>
      <Route path="/matchups" exact>
        {isLoggedIn ? <MatchupList /> : <Redirect to="/login" />}
      </Route>

      {/* Team Routes */}
      <Route path="/teams">
        {isLoggedIn ? <TeamList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/team/edit/:id" exact>
        {isLoggedIn ? <EditTeam /> : <Redirect to="/login" />}
      </Route>
      <Route path="/team/:id">
        {isLoggedIn ? <TeamDetails /> : <Redirect to="/login" />}
      </Route>

      {/* Bet Routes */}
      <Route path="/betsbyteam/:id" exact>
        {isLoggedIn ? <BetList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/bet/add/:id" exact>
        {isLoggedIn ? <PlaceBet /> : <Redirect to="/login" />}
      </Route>
      <Route path="/bet/delete/:id" exact>
        {isLoggedIn ? <DeleteBet /> : <Redirect to="/login" />}
      </Route>
      <Route path="/bet/edit/:id" exact>
        {isLoggedIn ? <EditBet /> : <Redirect to="/login" />}
      </Route>
      <Route path="/FAQ">
        {isLoggedIn ? <Faq /> : <Redirect to="/login" />}
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

