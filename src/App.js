import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} exact path="/" />
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
