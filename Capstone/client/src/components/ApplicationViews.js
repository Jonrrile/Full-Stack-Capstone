import React from "react";
import { Switch, Route } from "react-router-dom";
import TeamList from "./TeamList";
import Home from "./Home";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/teams">
        <TeamList />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;