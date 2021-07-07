import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import SearchPage from "./components/search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
