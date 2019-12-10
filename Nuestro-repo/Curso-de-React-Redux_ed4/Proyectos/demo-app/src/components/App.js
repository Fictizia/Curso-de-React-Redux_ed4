import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import MainMenu from "./MainMenu";
import Routes from "./Routes";

export default function App() {
  return (
    <Router>
      <div>
      <MainMenu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes />
      </div>
    </Router>
  );
}
