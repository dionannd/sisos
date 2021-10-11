import React from "react";
import routeList from "./route-list";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { MainLayout } from "components";

const PrivateRoute = withRouter(() => {
  const AuthPage = routeList.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={true}
      render={(props) => <route.component {...props} />}
    />
  ));

  return (
    <MainLayout>
      <Switch>
        {localStorage.getItem("token") ? AuthPage : <Redirect to="/" />}
      </Switch>
    </MainLayout>
  );
});

export default PrivateRoute;
