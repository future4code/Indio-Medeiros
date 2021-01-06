import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import ReviewDay1 from "../Pages/ReviewDay1";
import ReviewDay2 from "../Pages/ReviewDay2";
import ReviewDay3 from "../Pages/ReviewDay3";
import ReviewDay4 from "../Pages/ReviewDay4";
import ReviewList from "../Pages/ReviewList";

export default function Router() {
  return (
    <BrowserRouter>
     <Header />
      <Switch>
        <Route exact path="/">
          <ReviewList />
        </Route>

        <Route exact path="/day1">
          <ReviewDay1 />
        </Route>

        <Route exact path="/day2">
          <ReviewDay2 />
        </Route>

        <Route exact path="/day3">
          <ReviewDay3 />
        </Route>

        <Route exact path="/day4">
          <ReviewDay4 />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
