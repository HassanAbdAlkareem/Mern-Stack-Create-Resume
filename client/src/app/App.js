import FunctionAlContext from "../Context/FunctionAlContext";
import ContainerHome from "../components/container-home/ContainerHome";
import Resume from "../components/create-resume/ContainerResume";
import Login from "../pages/page-login/Login";
import { useSelector } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//
function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="app">
      <FunctionAlContext>
        <Router>
          <Switch>
            <Route exact path="/">
              {user ? <ContainerHome /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/resume">
              {user ? <Resume /> : <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <p className="page-not-found">This pahe not found !</p>
            </Route>
          </Switch>
        </Router>
      </FunctionAlContext>
    </div>
  );
}

export default App;
