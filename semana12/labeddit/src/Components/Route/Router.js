import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import FeedsPage from "../Pages/FeedsPage";
import PostPage from "../Pages/PostPage";
import Header from "../Elements/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>

        <Route exact path={"/signup"}>
          <SignupPage />
        </Route>

        <Route exact path={"/feeds"}>
          <Header />
          <FeedsPage />
        </Route>

        <Route exact path={`/post/:id`}>
          <Header />
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
