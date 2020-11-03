import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { TeamProvider } from "./providers/TeamProvider";
import Header from "./components/Header";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { BetProvider } from "./providers/BetProvider";
import { MatchupProvider } from "./providers/MatchupProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <TeamProvider>
            <MatchupProvider>
              <BetProvider>
                <Header />
                <ApplicationViews />
              </BetProvider>
            </MatchupProvider>
          </TeamProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;