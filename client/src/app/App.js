import FunctionAlContext from "../Context/FunctionAlContext";
import ContainerHome from "../components/container-home/ContainerHome";
import Resume from "../components/create-resume/ContainerResume";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <FunctionAlContext>
        <Router>
          <Switch>
            <Route exact path="/">
              <ContainerHome />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </Router>
      </FunctionAlContext>
    </div>
  );
}

export default App;
