import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import Teams from './components/Teams/Teams';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Router>
          <Switch>
              <Route path="/home">
                 <Home />
              </Route>
              <Route path="/leagueInfo/:idTeam">
                <Teams/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotMatch />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
