import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";
import RegiterLogin from "./registerLogin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={RegiterLogin} />
      </Switch>
    </div>
  );
}

export default App;
