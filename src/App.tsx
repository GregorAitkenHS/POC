import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { Claim, HomePage } from "./Pages/Pages";

function App() {
  return (
    <div className="HealthShield">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route exact path="/claim" component={withRouter(Claim)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
