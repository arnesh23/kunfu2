import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main"

function App () {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/kunfu2/" component={Main} />
        </Switch>
      </div>
    </Router>
    );
  
}

export default App;


