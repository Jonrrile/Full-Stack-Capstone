import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { TeamProvider } from "./providers/TeamProvider";
import Header from "./components/Header";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { BetProvider } from "./providers/BetProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <TeamProvider>
            <BetProvider>
              <Header />
              <ApplicationViews />
            </BetProvider>
          </TeamProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;