import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Container, Input } from "semantic-ui-react";

import Home from "./home/Home.js";
import Tactics from "./tactics/Tactics.js";
import Fitness from "./fitness/Fitness.js";
import Tips from "./tips/Tips.js";
import Article from "./article/Article.js";
// import Categories from "./components/Categories.js";

const NAVIGATION_MENU = [
  { route: "/tactics", text: "Tactics", component: Tactics },
  { route: "/fitness", text: "Fitness", component: Fitness },
  { route: "/tips", text: "Tips", component: Tips }
];

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
              {NAVIGATION_MENU.map((item, index) => {
                return (
                  <li>
                    <NavLink key={index} to={item.route}>
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
              <li className="nav-search">
                <Input icon="search" placeholder="Search..." />
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/article/:id" component={Article}></Route>
            {NAVIGATION_MENU.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.route}
                  component={item.component}
                ></Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </Container>
    </Fragment>
  );
}

export default App;
