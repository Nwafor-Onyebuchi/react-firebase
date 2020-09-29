import React from "react";
import "./App.css";
import "./firebase/config";
import SignUp from "./pages/SignUp";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./firebase/UserProvider";
import Profile from "./pages/Proflie";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header"></header>
          <div className="container">
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
