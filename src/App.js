import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Leagues from "./component/Leagues/Leagues";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeagueDetails from "./component/LeagueDetails.js/LeagueDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Leagues />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetails />
          </Route>

          <Route path="*">
            <h1 className="text-center my-5">404 - Not Found!</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
