import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginPage, RegisterPage, ForgotPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} exact path="/" />
        <Route component={RegisterPage} exact path="/signup" />
        <Route component={ForgotPage} exact path="/password_reset" />
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
