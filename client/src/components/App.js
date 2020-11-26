import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";
import RegiterLogin from "./registerLogin";
import Logout from "./registerLogin/logout";
import Register from "./registerLogin/register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/login" component={RegiterLogin} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
