import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { TeamProvider } from "./providers/TeamProvider";
import Header from "./components/Header";
import { UserProfileProvider } from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <TeamProvider>
            <Header />
            <ApplicationViews />
          </TeamProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;