import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { TeamProvider } from "./providers/TeamProvider";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <TeamProvider>
          <Header />
          <ApplicationViews />
        </TeamProvider>
      </Router>
    </div>
  );
}

export default App;