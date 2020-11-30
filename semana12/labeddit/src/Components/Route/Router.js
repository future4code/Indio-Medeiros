import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <p>login</p>
        </Route>

        <Route exact path={"/singup"}>
          <p>singup</p>
        </Route>

        <Route exact path={"/feeds"}>
          <p>feed</p>
        </Route>

        <Route exact path={"/post"}>
          <p>post</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
