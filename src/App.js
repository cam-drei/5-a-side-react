import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Container, Input } from "semantic-ui-react";

import Home from "./home/Home.js";
import Tatics from "./tactics/Tatics.js";
import Fitness from "./fitness/Fitness.js";
import Tips from "./tips/Tips.js";

function App() {
  return (
    <Fragment>
      <Container className="container">
        <BrowserRouter>
          <div>
            <ul className="navigation">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/tatics">Tatics</NavLink>
              </li>
              <li>
                <NavLink to="/fitness">Fitness</NavLink>
              </li>
              <li>
                <NavLink to="/tips">Tips</NavLink>
              </li>
              <li className="nav-search">
                <Input icon="search" placeholder="Search..." />
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/tatics" component={Tatics}></Route>
            <Route path="/fitness" component={Fitness}></Route>
            <Route path="/tips" component={Tips}></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </Fragment>
  );
}

export default App;
