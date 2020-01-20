import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
// import Truncate from "react-truncate";
import Article from "../article/Article.js";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const DATE_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "2-digit"
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/categories`)
      .then(response => {
        console.log(response);
        this.setState({ articles: response.data });
      })
      .catch(error => console.log(error));
    // console.log(new Date("2019-12-19T09:53:58.678Z"));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <h2>This is Home</h2>
          <p>
            Today is: {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}
          </p>
          <Divider />

          {this.state.articles.map((article, index) => {
            return (
              <div key={index}>
                <BrowserRouter>
                  <Link exact to={`/article/${article.id}`}>
                    <h3>{article.title}</h3>
                  </Link>
                  <Switch>
                    <Route
                      exact
                      path="/article/:id"
                      component={Article}
                    ></Route>
                  </Switch>
                  <p>
                    <i>Source: {article.source}</i>
                    <i>, </i>
                    <i>
                      {new Date(article.created_at).toLocaleDateString(
                        "en-US",
                        DATE_OPTIONS
                      )}
                    </i>
                  </p>
                </BrowserRouter>

                {/* <Truncate
                  lines={3}
                  ellipsis={
                    <span>
                      ... <a href="/link/to/article">Read more</a>
                    </span>
                  }
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article.content
                    }}
                  />
                </Truncate> */}
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: article.content
                  }}
                /> */}
                <Divider />
              </div>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default Home;
