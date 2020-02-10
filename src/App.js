import React, { Fragment, Component } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Input, Icon } from "semantic-ui-react";
import Home from "./components/Home.js";
import Article from "./components/Article.js";
import Category from "./components/Category.js";
import Results from "./components/Results.js";
import axios from "axios";

const NAVIGATION_MENU = [
  { route: "/tactics", text: "Tactics", catId: 1 },
  { route: "/fitness", text: "Fitness", catId: 2 },
  { route: "/tips", text: "Tips", catId: 3 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], value: "" };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({ value: e.target.value });
      axios
        .get(`http://localhost:3001/search/word?search=${e.target.value}`)
        .then(response => {
          // debugger;
          this.setState({
            isLoading: false,
            results: response.data
          });
        });
      console.log("enter press here! ");
    }
  };

  render() {
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
                  <Input
                    placeholder="Search..."
                    icon="search"
                    ref="search"
                    type="text"
                    onKeyPress={this.handleKeyPress}
                  />
                  <Icon
                    onClick={() => this.setState({ results: [], value: "" })}
                    circular
                    name="close"
                  />
                  <div>
                    {this.state.value.length > 0 && (
                      <Redirect
                        to={{
                          pathname: "/results",
                          state: {
                            results: this.state.results,
                            value: this.state.value
                          }
                        }}
                      />
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <Switch>
              {/* <Route path="/home" render={() => <div>Home</div>} /> */}

              <Route exact path="/" component={Home}></Route>
              <Route path="/article/:id" component={Article}></Route>
              <Route path="/results" component={Results}></Route>

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
}

export default App;
