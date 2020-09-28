import React from "react";
import "./App.css";
import "./firebase/config";
import SignUp from "./pages/SignUp";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <Switch>
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
