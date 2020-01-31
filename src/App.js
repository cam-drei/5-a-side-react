import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Container, Input } from "semantic-ui-react";

import Home from "./components/Home.js";
import Article from "./components/Article.js";
import Category from "./components/Category.js";

const NAVIGATION_MENU = [
  { route: "/tactics", text: "Tactics", catId: 1 },
  { route: "/fitness", text: "Fitness", catId: 2 },
  { route: "/tips", text: "Tips", catId: 3 }
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
            {/* <Route path="/home" render={() => <div>Home</div>} /> */}

            <Route exact path="/" component={Home}></Route>
            <Route path="/article/:id" component={Article}></Route>

            {NAVIGATION_MENU.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.route}
                  render={() => <Category catId={item.catId} />}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </Container>
    </Fragment>
  );
}

export default App;
